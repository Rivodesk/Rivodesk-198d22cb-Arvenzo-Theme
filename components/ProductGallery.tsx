'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ShopifyImage } from '@/lib/types';

interface ProductGalleryProps {
  images: ShopifyImage[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  function prev() {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-arvenzo-cream group">
        <Image
          src={images[activeIndex].url}
          alt={images[activeIndex].altText ?? title}
          fill
          className="object-contain p-6 transition-all duration-500"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-arvenzo-cream/90 rounded-full flex items-center justify-center text-arvenzo-dark shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-arvenzo-cream active:scale-95"
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-arvenzo-cream/90 rounded-full flex items-center justify-center text-arvenzo-dark shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-arvenzo-cream active:scale-95"
              aria-label="Volgende afbeelding"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all ${
                  i === activeIndex
                    ? 'w-5 h-1.5 bg-arvenzo-brown'
                    : 'w-1.5 h-1.5 bg-arvenzo-brown/30'
                }`}
                aria-label={`Afbeelding ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                i === activeIndex
                  ? 'border-arvenzo-brown'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img.url}
                alt={img.altText ?? `${title} ${i + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-contain p-1 bg-arvenzo-cream"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
