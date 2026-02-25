import {
  PRODUCTS_QUERY,
  PRODUCT_BY_HANDLE_QUERY,
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  UPDATE_CART_MUTATION,
  GET_CART_QUERY,
} from './queries';
import type { Product, Cart, ShopifyProduct, ShopifyCart } from './types';

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ACCESS_TOKEN) {
    throw new Error('Shopify environment variables are not set. Check .env.local');
  }

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Shopify API error ${response.status}: ${errorText}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(`GraphQL error: ${json.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }

  return json.data as T;
}

function normalizeProduct(product: ShopifyProduct): Product {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    price: parseFloat(product.priceRange.minVariantPrice.amount),
    compareAtPrice: product.compareAtPriceRange?.minVariantPrice?.amount
      ? parseFloat(product.compareAtPriceRange.minVariantPrice.amount)
      : null,
    currency: product.priceRange.minVariantPrice.currencyCode,
    images: product.images,
    variants: product.variants,
    options: product.options,
    productType: product.productType,
    vendor: product.vendor,
    tags: product.tags,
  };
}

function normalizeCart(cart: ShopifyCart): Cart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity,
    items: cart.lines.map((line) => ({
      lineId: line.id,
      variantId: line.merchandise.id,
      quantity: line.quantity,
      title: line.merchandise.product.title,
      handle: line.merchandise.product.handle,
      price: parseFloat(line.merchandise.price.amount),
      currency: line.merchandise.price.currencyCode,
      image: line.merchandise.product.images[0] ?? null,
      selectedOptions: line.merchandise.selectedOptions,
    })),
    subtotal: parseFloat(cart.cost.subtotalAmount.amount),
    total: parseFloat(cart.cost.totalAmount.amount),
    currency: cart.cost.totalAmount.currencyCode,
  };
}

// ─── Product Queries ──────────────────────────────────────────────────────────

export async function getAllProducts(first = 20): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: {
      edges: Array<{ node: ShopifyProduct }>;
    };
  }>(PRODUCTS_QUERY, { first });

  return data.products.edges.map(({ node }) => normalizeProduct(node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(
    PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );

  if (!data.productByHandle) return null;
  return normalizeProduct(data.productByHandle);
}

// ─── Cart Mutations ───────────────────────────────────────────────────────────

export async function createCart(
  variantId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCart };
  }>(CREATE_CART_MUTATION, {
    lines: [{ merchandiseId: variantId, quantity }],
  });

  return normalizeCart(data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCart };
  }>(ADD_TO_CART_MUTATION, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  });

  return normalizeCart(data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: ShopifyCart };
  }>(REMOVE_FROM_CART_MUTATION, {
    cartId,
    lineIds: [lineId],
  });

  return normalizeCart(data.cartLinesRemove.cart);
}

export async function updateCartItem(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: ShopifyCart };
  }>(UPDATE_CART_MUTATION, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });

  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: ShopifyCart | null }>(
    GET_CART_QUERY,
    { cartId }
  );

  if (!data.cart) return null;
  return normalizeCart(data.cart);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatPrice(amount: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function getDiscountPercentage(price: number, compareAtPrice: number | null): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
