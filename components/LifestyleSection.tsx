import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/shopify';

interface Props {
  products: Product[];
}

export default function LifestyleSection({ products }: Props) {
  const hoodie = products.find(p => p.handle === 'crescent-peak-hoodie') ?? products.find(p => p.productType === 'Hoodies');
  const sweatshirt = products.find(p => p.handle === 'lunar-horizon-sweatshirt') ?? products.find(p => p.productType === 'Sweatshirts');

  return (
    <section className="bg-arvenzo-cream py-0">
      {/* Block 1: full-width dark — hoodie lifestyle */}
      <div className="relative overflow-hidden bg-arvenzo-dark min-h-[600px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=2000&q=80&auto=format&fit=crop"
          alt="Persoon in hoodie"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-arvenzo-dark/90 via-arvenzo-dark/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
          <div className="flex flex-col justify-center">
            <p className="text-arvenzo-orange text-[11px] font-sans font-medium uppercase tracking-[0.2em] mb-4">
              Bestseller
            </p>
            <h2 className="font-heading font-black text-5xl sm:text-6xl text-arvenzo-cream leading-[0.95]">
              Comfortabel.<br />
              <em className="not-italic text-arvenzo-orange">Opvallend.</em>
            </h2>
            <p className="mt-5 text-arvenzo-cream/60 font-sans text-lg max-w-sm leading-relaxed">
              80% katoen, 20% polyester. Dubbele capuchon, kangoeroe zak, perfecte pasvorm. Elke dag comfortabel.
            </p>
            {hoodie && (
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href={`/products/${hoodie.handle}`}
                  className="inline-flex items-center gap-2 bg-arvenzo-cream text-arvenzo-ink font-heading font-bold px-7 py-3.5 rounded-full hover:bg-arvenzo-orange hover:text-arvenzo-cream transition-all text-sm tracking-wide"
                >
                  Shop hoodies — {formatPrice(hoodie.price)}
                </Link>
              </div>
            )}
          </div>
          {/* Right: product image */}
          {hoodie?.images[0] && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src={hoodie.images[0].url}
                  alt={hoodie.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="288px"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Block 2: light — two columns with lifestyle + sweatshirt */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Lifestyle photo */}
        <div className="relative overflow-hidden rounded-3xl min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=1200&q=80&auto=format&fit=crop"
            alt="Model in sweatshirt"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-arvenzo-cream/70 text-xs font-sans uppercase tracking-widest mb-1">Stijl</p>
            <p className="font-heading font-black text-2xl text-arvenzo-cream">Gedragen door avonturiers</p>
          </div>
        </div>

        {/* Sweatshirt product card — editorial */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl bg-[#EDE8E2] flex-1 flex items-center justify-center min-h-[280px] group">
            {sweatshirt?.images[0] && (
              <Image
                src={sweatshirt.images[0].url}
                alt={sweatshirt.title}
                width={340}
                height={340}
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="bg-arvenzo-cream-dark rounded-3xl p-7">
            <p className="text-arvenzo-orange text-[11px] font-sans font-medium uppercase tracking-[0.2em] mb-2">Nieuw</p>
            <h3 className="font-heading font-black text-2xl text-arvenzo-ink leading-tight">
              {sweatshirt?.title ?? 'Lunar Horizon Sweatshirt'}
            </h3>
            <p className="text-arvenzo-muted font-sans text-sm mt-2">
              Klassieke pasvorm, 280g/m² premium stof. Perfect voor elke dag.
            </p>
            <div className="flex items-center justify-between mt-5">
              <span className="font-heading font-black text-xl text-arvenzo-ink">
                {sweatshirt ? formatPrice(sweatshirt.price) : '€31,44'}
              </span>
              {sweatshirt && (
                <Link href={`/products/${sweatshirt.handle}`} className="bg-arvenzo-ink text-arvenzo-cream font-heading font-bold px-5 py-2.5 rounded-full text-sm hover:bg-arvenzo-brown transition-colors">
                  Bekijk →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Block 3: full-width shirt lifestyle */}
      <div className="mx-5 sm:mx-8 mb-20 rounded-3xl overflow-hidden relative min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=2000&q=80&auto=format&fit=crop"
          alt="Mensen in casual kleding buiten"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark/80 via-arvenzo-dark/20 to-transparent" />
        <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-end justify-between gap-6 w-full">
          <div>
            <p className="text-arvenzo-orange text-[11px] font-sans font-medium uppercase tracking-[0.2em] mb-2">7 collecties</p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-arvenzo-cream leading-tight max-w-sm">
              Van berg tot stad. Altijd stijlvol.
            </h2>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-arvenzo-cream text-arvenzo-ink font-heading font-bold px-7 py-3.5 rounded-full hover:bg-arvenzo-orange hover:text-arvenzo-cream transition-all text-sm tracking-wide whitespace-nowrap"
          >
            Bekijk alle 28 producten →
          </Link>
        </div>
      </div>
    </section>
  );
}
