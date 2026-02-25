'use client';

import { useState, useEffect } from 'react';
import type { ShopifyProductVariant, ShopifyProductOption } from '@/lib/types';
import SizeGuide from './SizeGuide';

interface VariantSelectorProps {
  options: ShopifyProductOption[];
  variants: ShopifyProductVariant[];
  onVariantChange: (variant: ShopifyProductVariant | null) => void;
}

const COLOR_MAP: Record<string, string> = {
  'arctic white': '#F5F5F3', white: '#FFFFFF', 'baby pink': '#F4A5C0',
  burgundy: '#8B2244', 'bottle green': '#1E4D2B', 'deep black': '#1A1A1A',
  'hot chocolate': '#5C3317', 'heather grey': '#B5B5B5', 'royal blue': '#1E40AF',
  'oxford navy': '#1B2A4A', 'steel grey': '#708090', 'airforce blue': '#5D8AA8',
  'hot pink': '#FF69B4', 'jet black': '#0D0D0D', 'urban navy': '#2C3E6B',
  navy: '#001F5B', sand: '#C2A882', gold: '#D4AF37', red: '#CC2222',
  'kelly green': '#4CBB17', 'sky blue': '#87CEEB', 'swimming pool': '#00B5CC',
  'urban purple': '#6B4C7A', 'sports grey (meliert)': '#9E9E9E', sorbet: '#FFAD9F',
  black: '#111111', 'white glossy': '#FFFFFF',
};

export default function VariantSelector({ options, variants, onVariantChange }: VariantSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    options.forEach((opt) => { initial[opt.name] = opt.values[0]; });
    return initial;
  });

  useEffect(() => {
    const matched = variants.find((v) =>
      v.selectedOptions.every((so) => selectedOptions[so.name] === so.value)
    );
    onVariantChange(matched ?? null);
  }, [selectedOptions, variants, onVariantChange]);

  // Since public API doesn't expose availability per variant, treat all as available
  function isOptionAvailable(optionName: string, value: string): boolean {
    const testOptions = { ...selectedOptions, [optionName]: value };
    return variants.some(
      (v) => v.selectedOptions.every((so) => testOptions[so.name] === so.value)
    );
  }

  return (
    <div className="space-y-6">
      {options.map((option) => {
        const isColor = ['kleur', 'color', 'colour', 'farbe'].includes(option.name.toLowerCase());
        const isSize = ['maat', 'size', 'größe', 'groesse'].includes(option.name.toLowerCase());

        return (
          <div key={option.name}>
            <div className="flex items-center justify-between mb-3">
              <label className="font-heading font-semibold text-sm text-arvenzo-ink">
                {option.name}:{' '}
                <span className="font-normal text-arvenzo-muted">{selectedOptions[option.name]}</span>
              </label>
              {isSize && <SizeGuide />}
            </div>

            {isColor ? (
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const bg = COLOR_MAP[value.toLowerCase()] ?? '#AAAAAA';
                  const selected = selectedOptions[option.name] === value;
                  const exists = isOptionAvailable(option.name, value);
                  return (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions(s => ({ ...s, [option.name]: value }))}
                      disabled={!exists}
                      title={value}
                      aria-label={value}
                      className={`relative w-9 h-9 rounded-full border-2 transition-all ${
                        selected ? 'border-arvenzo-brown scale-110 shadow-md' : 'border-arvenzo-cream-dark hover:border-arvenzo-muted'
                      } ${!exists ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span className="absolute inset-1 rounded-full shadow-inner" style={{ backgroundColor: bg }} />
                      {bg === '#FFFFFF' || bg === '#F5F5F3' ? (
                        <span className="absolute inset-1 rounded-full border border-arvenzo-cream-dark" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const selected = selectedOptions[option.name] === value;
                  const exists = isOptionAvailable(option.name, value);
                  return (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions(s => ({ ...s, [option.name]: value }))}
                      disabled={!exists}
                      className={`px-4 py-2 rounded-xl border text-sm font-sans font-medium transition-all ${
                        selected
                          ? 'bg-arvenzo-ink text-arvenzo-cream border-arvenzo-ink'
                          : exists
                          ? 'border-arvenzo-cream-dark text-arvenzo-ink hover:border-arvenzo-ink/50 hover:bg-arvenzo-cream-dark'
                          : 'border-arvenzo-cream-dark text-arvenzo-muted/40 cursor-not-allowed line-through'
                      }`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
