export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductOption {
  name: string;
  values: string[];
}

export interface ShopifySelectedOption {
  name: string;
  value: string;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  availableForSale: boolean;
  selectedOptions: ShopifySelectedOption[];
  image?: ShopifyImage;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  priceRange: {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
  };
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney;
  };
  images: ShopifyImage[];
  variants: ShopifyProductVariant[];
  options: ShopifyProductOption[];
  tags: string[];
  productType: string;
  vendor: string;
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    selectedOptions: ShopifySelectedOption[];
    product: {
      id: string;
      title: string;
      handle: string;
      images: ShopifyImage[];
    };
    price: ShopifyMoney;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: ShopifyCartLine[];
  cost: {
    subtotalAmount: ShopifyMoney;
    totalAmount: ShopifyMoney;
  };
}

// Simplified types for UI usage
export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  images: ShopifyImage[];
  variants: ShopifyProductVariant[];
  options: ShopifyProductOption[];
  productType: string;
  vendor: string;
  tags: string[];
}

export interface CartItem {
  lineId: string;
  variantId: string;
  quantity: number;
  title: string;
  handle: string;
  price: number;
  currency: string;
  image: ShopifyImage | null;
  selectedOptions: ShopifySelectedOption[];
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  items: CartItem[];
  subtotal: number;
  total: number;
  currency: string;
}
