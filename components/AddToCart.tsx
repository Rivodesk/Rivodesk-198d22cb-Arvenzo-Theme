'use client';

import { useState, useCallback } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { ShopifyProductVariant } from '@/lib/types';

interface AddToCartProps {
  variant: ShopifyProductVariant | null;
}

export default function AddToCart({ variant }: AddToCartProps) {
  const { addItem } = useCart();
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleAddToCart = useCallback(async () => {
    if (!variant || state !== 'idle') return;

    setState('loading');
    await addItem(variant.id, 1);
    setState('success');

    setTimeout(() => setState('idle'), 2000);
  }, [variant, state, addItem]);

  const isUnavailable = !variant || !variant.availableForSale;

  return (
    <button
      onClick={handleAddToCart}
      disabled={isUnavailable || state === 'loading'}
      aria-label={isUnavailable ? 'Uitverkocht' : 'Toevoegen aan winkelwagen'}
      className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-heading font-bold text-base transition-all active:scale-[0.98] ${
        isUnavailable
          ? 'bg-arvenzo-cream-dark text-arvenzo-muted cursor-not-allowed'
          : state === 'success'
          ? 'bg-green-600 text-white'
          : 'bg-arvenzo-brown text-arvenzo-cream hover:bg-arvenzo-brown-light'
      }`}
    >
      {state === 'loading' ? (
        <>
          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Toevoegen...
        </>
      ) : state === 'success' ? (
        <>
          <Check size={20} />
          Toegevoegd!
        </>
      ) : isUnavailable ? (
        'Uitverkocht'
      ) : (
        <>
          <ShoppingBag size={20} />
          Toevoegen aan winkelwagen
        </>
      )}
    </button>
  );
}
