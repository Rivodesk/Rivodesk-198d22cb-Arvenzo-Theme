'use client';

import { useState, useEffect } from 'react';
import type { ShopifyProductVariant, ShopifyProductOption } from '@/lib/types';

interface VariantSelectorProps {
  options: ShopifyProductOption[];
  variants: ShopifyProductVariant[];
  onVariantChange: (variant: ShopifyProductVariant | null) => void;
}

export default function VariantSelector({
  options,
  variants,
  onVariantChange,
}: VariantSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    options.forEach((opt) => {
      initial[opt.name] = opt.values[0];
    });
    return initial;
  });

  useEffect(() => {
    const matched = variants.find((v) =>
      v.selectedOptions.every((so) => selectedOptions[so.name] === so.value)
    );
    onVariantChange(matched ?? null);
  }, [selectedOptions, variants, onVariantChange]);

  function isAvailable(optionName: string, value: string): boolean {
    const testOptions = { ...selectedOptions, [optionName]: value };
    return variants.some(
      (v) =>
        v.availableForSale &&
        v.selectedOptions.every((so) => testOptions[so.name] === so.value)
    );
  }

  const colorMap: Record<string, string> = {
    'arctic white': '#F8F8F8',
    'baby pink': '#F4A5C0',
    burgundy: '#8B2244',
    'bottle green': '#1E4D2B',
    'deep black': '#1A1A1A',
    'hot chocolate': '#5C3317',
    'heather grey': '#B8B8B8',
    'royal blue': '#1E40AF',
    'oxford navy': '#1B2A4A',
    'steel grey': '#708090',
    'airforce blue': '#5D8AA8',
    'white glossy': '#FFFFFF',
  };

  return (
    <div className="space-y-6">
      {options.map((option) => {
        const isColor = option.name.toLowerCase() === 'kleur' || option.name.toLowerCase() === 'color';
        const isSize = option.name.toLowerCase() === 'maat' || option.name.toLowerCase() === 'size';

        return (
          <div key={option.name}>
            <div className="flex items-center justify-between mb-3">
              <label className="font-heading font-semibold text-sm text-arvenzo-dark">
                {option.name}:
                <span className="font-normal text-arvenzo-muted ml-1">
                  {selectedOptions[option.name]}
                </span>
              </label>
              {isSize && (
                <a
                  href="/sizing"
                  className="text-xs text-arvenzo-brown underline hover:text-arvenzo-orange transition-colors"
                >
                  Maatgids
                </a>
              )}
            </div>

            {isColor ? (
              // Color swatches
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const colorKey = value.toLowerCase();
                  const bgColor = colorMap[colorKey] ?? '#888';
                  const isSelected = selectedOptions[option.name] === value;
                  const available = isAvailable(option.name, value);

                  return (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions((s) => ({ ...s, [option.name]: value }))}
                      disabled={!available}
                      title={value}
                      aria-label={`${value}${!available ? ' (uitverkocht)' : ''}`}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                        isSelected
                          ? 'border-arvenzo-brown scale-110'
                          : 'border-arvenzo-cream-dark hover:border-arvenzo-muted'
                      } ${!available ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className="absolute inset-0.5 rounded-full"
                        style={{ backgroundColor: bgColor }}
                      />
                      {!available && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <div className="w-0.5 h-7 bg-arvenzo-muted/60 rotate-45 rounded-full" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              // Size pills
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const isSelected = selectedOptions[option.name] === value;
                  const available = isAvailable(option.name, value);

                  return (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions((s) => ({ ...s, [option.name]: value }))}
                      disabled={!available}
                      className={`relative px-4 py-2 rounded-lg border text-sm font-medium font-sans transition-all ${
                        isSelected
                          ? 'border-arvenzo-brown bg-arvenzo-brown text-arvenzo-cream'
                          : available
                          ? 'border-arvenzo-cream-dark text-arvenzo-dark hover:border-arvenzo-brown/50'
                          : 'border-arvenzo-cream-dark text-arvenzo-muted/50 cursor-not-allowed line-through'
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
