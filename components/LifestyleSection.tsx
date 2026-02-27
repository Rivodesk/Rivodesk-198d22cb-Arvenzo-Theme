import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/shopify';
import { getLocale } from '@/lib/locale';
import { t } from '@/lib/translations';

export default function LifestyleSection({ products }: { products: Product[] }) {
  const locale = getLocale();

  const hoodie = products.find(p => p.productType === 'Hoodies');
  const sweatshirt = products.find(p => p.productType === 'Sweatshirts');
  const shirt = products.find(p => p.productType === 'Unisex-Shirts');
  const mug = products.find(p => p.productType === 'Trinkgefäße');

  return (
    <section className="bg-arvenzo-cream">

      {/* Row 1: Two columns — man sweatshirt + sustainability card */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Man with sweatshirt */}
        <div className="relative overflow-hidden aspect-square group">
          <Image
            src="/images/man-sweatshirt.jpg"
            alt="Man in Arvenzo sweatshirt"
            fill
            className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark/75 via-arvenzo-dark/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-arvenzo-orange text-[11px] uppercase tracking-widest font-sans mb-1">{t('lifestyle.1.tag', locale)}</p>
            <h3 className="font-heading font-black text-3xl text-arvenzo-cream leading-tight mb-3">
              {t('lifestyle.1.heading1', locale)}<br />
              <em className="not-italic text-arvenzo-orange">{t('lifestyle.1.heading2', locale)}</em>
            </h3>
            {sweatshirt && (
              <Link
                href={`/products/${sweatshirt.handle}`}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-arvenzo-cream font-sans font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/25 transition-all"
              >
                {t('lifestyle.1.cta', locale)} — {formatPrice(sweatshirt.price)} →
              </Link>
            )}
          </div>
        </div>

        {/* Sustainability card */}
        <div className="aspect-square bg-arvenzo-dark flex flex-col items-center justify-center p-10 text-center">
          <div className="text-5xl mb-6">🌱</div>
          <p className="text-arvenzo-orange text-[11px] uppercase tracking-widest font-sans mb-3">{t('lifestyle.mission.tag', locale)}</p>
          <h3 className="font-heading font-black text-4xl text-arvenzo-cream leading-tight mb-5">
            {t('lifestyle.mission.heading', locale)}
          </h3>
          <p className="font-sans text-arvenzo-cream/70 text-base leading-relaxed max-w-xs">
            {t('lifestyle.mission.body', locale)}
          </p>
          <div className="mt-8 flex items-center gap-2 text-arvenzo-cream/40 text-xs font-sans uppercase tracking-widest">
            <span>🌍</span>
            <span>{t('lifestyle.mission.footer', locale)}</span>
          </div>
        </div>
      </div>

      {/* Row 2: Two columns — woman hoodie + woman mug */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Woman with hoodie */}
        <div className="relative overflow-hidden aspect-square group">
          <Image
            src="/images/woman-hoodie.jpg"
            alt="Vrouw in Arvenzo hoodie"
            fill
            className="object-cover object-top scale-[1.2] origin-top transition-transform duration-700 group-hover:scale-[1.25]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark/75 via-arvenzo-dark/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-arvenzo-orange text-[11px] uppercase tracking-widest font-sans mb-1">{t('lifestyle.3.tag', locale)}</p>
            <h3 className="font-heading font-black text-3xl text-arvenzo-cream leading-tight mb-3">
              {t('lifestyle.3.heading', locale)}
            </h3>
            {hoodie && (
              <Link
                href={`/products/${hoodie.handle}`}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-arvenzo-cream font-sans font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/25 transition-all"
              >
                {t('lifestyle.3.cta', locale)} — {formatPrice(hoodie.price)} →
              </Link>
            )}
          </div>
        </div>

        {/* Woman with mug */}
        <div className="relative overflow-hidden aspect-square group">
          <Image
            src="/images/woman-mug.jpg"
            alt="Vrouw met Arvenzo mug"
            fill
            className="object-cover object-top scale-[1.2] origin-top transition-transform duration-700 group-hover:scale-[1.25]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark/75 via-arvenzo-dark/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-arvenzo-orange text-[11px] uppercase tracking-widest font-sans mb-1">{t('lifestyle.4.tag', locale)}</p>
            <h3 className="font-heading font-black text-3xl text-arvenzo-cream leading-tight mb-3">
              {t('lifestyle.4.heading', locale)}
            </h3>
            {mug && (
              <Link
                href={`/products/${mug.handle}`}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-arvenzo-cream font-sans font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/25 transition-all"
              >
                {t('lifestyle.4.cta', locale)} — {formatPrice(mug.price)} →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Row 3: Man in forest shirt — full-bleed light */}
      <div className="relative overflow-hidden min-h-[500px] flex items-center bg-[#EBE5DF]">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[45%]">
          <Image
            src="/images/man-shirt.jpg"
            alt="Man in Arvenzo shirt in het bos"
            fill
            className="object-cover object-[left_15%]"
            sizes="50vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#EBE5DF]/20 to-[#EBE5DF]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-20">
          <div className="max-w-md">
            <p className="text-arvenzo-orange text-[11px] font-sans font-medium uppercase tracking-[0.2em] mb-4">
              {t('lifestyle.5.tag', locale)}
            </p>
            <h2 className="font-heading font-black text-5xl text-arvenzo-ink leading-[0.95]">
              {t('lifestyle.5.heading', locale)}
            </h2>
            <p className="mt-5 text-arvenzo-muted font-sans text-lg max-w-sm leading-relaxed">
              {t('lifestyle.5.body', locale)}
            </p>
            {shirt && (
              <Link
                href={`/products/${shirt.handle}`}
                className="inline-flex items-center gap-2 mt-8 bg-arvenzo-ink text-arvenzo-cream font-heading font-bold px-7 py-3.5 rounded-full hover:bg-arvenzo-brown transition-all text-sm tracking-wide"
              >
                {t('lifestyle.5.cta', locale)} — {formatPrice(shirt.price)}
              </Link>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
