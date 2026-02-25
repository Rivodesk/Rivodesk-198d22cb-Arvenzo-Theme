'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { formatPrice, getDiscountPercentage } from '@/lib/shopify';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, isLoading } = useCart();
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  const primaryImage = product.images[0];
  const hoverImage = product.images[1] ?? product.images[0];
  const discount = getDiscountPercentage(product.price, product.compareAtPrice);
  const firstVariant = product.variants[0];

  async function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    if (!firstVariant || adding) return;
    setAdding(true);
    await addItem(firstVariant.id);
    setAdding(false);
  }

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-arvenzo-cream aspect-square">
        {/* Discount badge */}
        {discount && (
          <div className="absolute top-3 left-3 z-10 bg-arvenzo-brown text-arvenzo-cream text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        {/* Product image */}
        {primaryImage && (
          <Image
            src={hovered && hoverImage !== primaryImage ? hoverImage.url : primaryImage.url}
            alt={primaryImage.altText ?? product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
            priority={false}
          />
        )}

        {/* Quick Add button */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={adding || isLoading || !firstVariant?.availableForSale}
            className="w-full flex items-center justify-center gap-2 bg-arvenzo-brown text-arvenzo-cream text-sm font-medium py-3 rounded-xl hover:bg-arvenzo-brown-light active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <ShoppingBag size={16} />
            {adding ? 'Toegevoegd...' : 'Snel toevoegen'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="font-heading font-semibold text-arvenzo-dark text-base group-hover:text-arvenzo-brown transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-sans font-medium text-arvenzo-dark">
            {formatPrice(product.price, product.currency)}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="font-sans text-sm text-arvenzo-muted line-through">
              {formatPrice(product.compareAtPrice, product.currency)}
            </span>
          )}
        </div>
        {product.options.find((o) => o.name === 'Kleur') && (
          <p className="text-xs text-arvenzo-muted font-sans">
            {product.options.find((o) => o.name === 'Kleur')!.values.length} kleuren beschikbaar
          </p>
        )}
      </div>
    </Link>
  );
}
