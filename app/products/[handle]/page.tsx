import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductByHandle, getAllProducts, formatPrice, getDiscountPercentage } from '@/lib/shopify';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import ProductGallery from '@/components/ProductGallery';
import ProductDetailClient from './ProductDetailClient';
import type { Product } from '@/lib/types';

interface PageProps {
  params: { handle: string };
}

async function getProduct(handle: string): Promise<Product | null> {
  if (
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN &&
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
  ) {
    try {
      return await getProductByHandle(handle);
    } catch {
      // fallthrough to mock
    }
  }
  return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;
}

export async function generateStaticParams() {
  let products: Product[] = MOCK_PRODUCTS;
  if (
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN &&
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
  ) {
    try {
      products = await getAllProducts(50);
    } catch {
      // fallthrough
    }
  }
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: product.images[0] ? [{ url: product.images[0].url }] : [],
    },
  };
}

export const revalidate = 60;

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.handle);

  if (!product) notFound();

  const discount = getDiscountPercentage(product.price, product.compareAtPrice);

  return (
    <div className="pt-20 pb-20 bg-arvenzo-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-sans text-arvenzo-muted mb-10">
          <a href="/" className="hover:text-arvenzo-brown transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-arvenzo-brown transition-colors">Collectie</a>
          <span>/</span>
          <span className="text-arvenzo-dark">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {discount && (
                <span className="bg-arvenzo-brown text-arvenzo-cream text-xs font-bold px-3 py-1 rounded-full">
                  -{discount}% KORTING
                </span>
              )}
              {product.tags.includes('limited-edition') && (
                <span className="bg-arvenzo-orange/20 text-arvenzo-brown text-xs font-semibold px-3 py-1 rounded-full border border-arvenzo-orange/30">
                  Limited Edition
                </span>
              )}
            </div>

            {/* Title & Price */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-arvenzo-dark">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-heading font-bold text-2xl text-arvenzo-dark">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="font-sans text-lg text-arvenzo-muted line-through">
                  {formatPrice(product.compareAtPrice, product.currency)}
                </span>
              )}
            </div>

            {/* Reviews stub */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-arvenzo-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-arvenzo-muted font-sans">4.9 (47 reviews)</span>
            </div>

            <div className="border-t border-arvenzo-cream-dark my-6" />

            {/* Interactive: variant selection + add to cart */}
            <ProductDetailClient product={product} />

            <div className="border-t border-arvenzo-cream-dark my-6" />

            {/* Description */}
            <div>
              <h3 className="font-heading font-semibold text-arvenzo-dark mb-3">Productomschrijving</h3>
              <div
                className="prose prose-sm max-w-none text-arvenzo-muted font-sans leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-arvenzo-dark [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>

            <div className="border-t border-arvenzo-cream-dark my-6" />

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚚', title: 'Gratis verzending', desc: 'Vanaf €50' },
                { icon: '🔄', title: '30 dagen retour', desc: 'Moeiteloos' },
                { icon: '🇩🇪', title: 'Gedrukt in Duitsland', desc: 'Premium kwaliteit' },
                { icon: '🔒', title: 'Veilig betalen', desc: 'SSL beveiligd' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-arvenzo-cream">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-sans font-medium text-arvenzo-dark text-xs">{item.title}</div>
                    <div className="font-sans text-xs text-arvenzo-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
