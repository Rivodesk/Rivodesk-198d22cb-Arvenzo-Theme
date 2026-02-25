import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import type { Product } from '@/lib/types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-24 bg-arvenzo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-arvenzo-orange font-sans text-sm font-medium uppercase tracking-widest mb-2">
              Nieuw binnen
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-arvenzo-dark">
              Onze collectie
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-arvenzo-brown font-sans font-medium text-sm hover:gap-3 transition-all group"
          >
            Bekijk alles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
