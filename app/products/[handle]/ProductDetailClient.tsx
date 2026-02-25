'use client';

import { useState, useCallback } from 'react';
import VariantSelector from '@/components/VariantSelector';
import AddToCart from '@/components/AddToCart';
import type { Product, ShopifyProductVariant } from '@/lib/types';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProductVariant | null>(
    product.variants[0] ?? null
  );

  const handleVariantChange = useCallback((variant: ShopifyProductVariant | null) => {
    setSelectedVariant(variant);
  }, []);

  return (
    <div className="space-y-6">
      <VariantSelector
        options={product.options}
        variants={product.variants}
        onVariantChange={handleVariantChange}
      />
      <AddToCart variant={selectedVariant} />
    </div>
  );
}
