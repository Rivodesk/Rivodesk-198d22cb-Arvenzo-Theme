import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-arvenzo-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-unisex-hoodie-arctic-white-482-c070-2000x.png"
          alt="Crescent Peak Hoodie"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-arvenzo-dark via-arvenzo-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-arvenzo-dark via-transparent to-arvenzo-dark/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-arvenzo-brown/20 border border-arvenzo-brown/40 text-arvenzo-orange text-xs font-medium px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-arvenzo-orange animate-pulse" />
            Limited Edition Collectie
          </div>

          {/* Heading */}
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-arvenzo-cream leading-[1.05] animate-fade-up">
            Avontuur.
            <br />
            <span className="text-arvenzo-orange">Rust.</span>
            <br />
            Stijl.
          </h1>

          <p className="mt-6 text-arvenzo-cream/70 text-lg sm:text-xl font-sans leading-relaxed max-w-lg animate-fade-up">
            Ervaar de perfecte combinatie van comfort en design. Elke collectie vertelt een verhaal van de natuur.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-up">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-arvenzo-orange text-arvenzo-dark font-heading font-bold px-8 py-4 rounded-xl hover:bg-arvenzo-orange-light active:scale-[0.97] transition-all text-base"
            >
              Ontdek de collectie
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products/crescent-peak-hoodie"
              className="inline-flex items-center gap-2 border-2 border-arvenzo-cream/30 text-arvenzo-cream font-heading font-semibold px-8 py-4 rounded-xl hover:border-arvenzo-cream/60 hover:bg-arvenzo-cream/5 transition-all text-base"
            >
              Bekijk hoodie
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 animate-fade-up">
            {[
              { value: '4.9★', label: '500+ reviews' },
              { value: '100%', label: 'Gedrukt in Duitsland' },
              { value: 'Gratis', label: 'Verzending v.a. €50' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-xl text-arvenzo-cream">{stat.value}</div>
                <div className="text-arvenzo-cream/50 text-sm font-sans mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-arvenzo-cream/30" />
      </div>
    </section>
  );
}
