import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-24 bg-arvenzo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-arvenzo-cream-dark">
              <Image
                src="https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-unisex-hoodie-arctic-white-482-c070-2000x.png"
                alt="Crescent Peak collectie"
                fill
                className="object-contain p-8"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-arvenzo-brown text-arvenzo-cream p-6 rounded-2xl shadow-xl max-w-[180px]">
              <div className="font-heading font-bold text-3xl">15%</div>
              <div className="font-sans text-sm text-arvenzo-cream/80 mt-1">
                korting op alle items
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-arvenzo-orange font-sans text-sm font-medium uppercase tracking-widest mb-3">
              Ons verhaal
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-arvenzo-dark leading-tight">
              Gemaakt voor
              <br />
              avonturiers
            </h2>
            <p className="mt-6 text-arvenzo-muted font-sans text-lg leading-relaxed">
              Arvenzo is geboren uit een passie voor de natuur en moderne esthetiek. Elke collectie is een ode aan de rust van berglandschappen en het avontuur dat daarin schuilt.
            </p>
            <p className="mt-4 text-arvenzo-muted font-sans leading-relaxed">
              Onze designs combineren minimalisme met krachtige grafische verhalen. Elk stuk is met zorg samengesteld en gedrukt met de hoogste kwaliteitsstandaarden — 100% in Duitsland.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: '🌿', title: 'Kwaliteit', desc: '280g/m² premium stof' },
                { icon: '🇩🇪', title: 'Made in Germany', desc: 'Gedrukt in Duitsland' },
                { icon: '📦', title: 'Snel geleverd', desc: 'Binnen 3-7 werkdagen' },
                { icon: '💚', title: 'Limited editions', desc: 'Niet verkrijgbaar in winkels' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-heading font-semibold text-arvenzo-dark text-sm">{item.title}</div>
                    <div className="font-sans text-xs text-arvenzo-muted mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-10 text-arvenzo-brown font-heading font-semibold hover:gap-3 transition-all group"
            >
              Lees meer over ons
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
