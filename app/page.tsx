import { getAllProducts } from '@/lib/shopify';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TrustBar from '@/components/TrustBar';
import BrandStory from '@/components/BrandStory';
import Reviews from '@/components/Reviews';
import Newsletter from '@/components/Newsletter';

export const revalidate = 60;

export default async function HomePage() {
  let products = MOCK_PRODUCTS;

  // Use real Shopify data if configured
  if (
    process.env.SHOPIFY_STORE_DOMAIN &&
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  ) {
    try {
      products = await getAllProducts(6);
    } catch (err) {
      console.warn('Shopify API not available, using mock data:', err);
    }
  }

  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts products={products} />
      <BrandStory />
      <Reviews />
      <Newsletter />
    </>
  );
}
