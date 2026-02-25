import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-arvenzo-dark text-arvenzo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading font-bold text-2xl tracking-tight">ARVENZO</span>
            <p className="mt-4 text-arvenzo-cream/70 text-sm font-sans leading-relaxed">
              Avontuur en rust in elk ontwerp. Belgisch merk, gedrukt in Duitsland.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/arvenzo.be"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-arvenzo-cream/60 hover:text-arvenzo-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/arvenzo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-arvenzo-cream/60 hover:text-arvenzo-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@arvenzo.be"
                aria-label="E-mail"
                className="text-arvenzo-cream/60 hover:text-arvenzo-orange transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Collectie */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-5 text-arvenzo-cream/50">
              Collectie
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/products', label: 'Alle producten' },
                { href: '/products?type=Hoodies', label: 'Hoodies' },
                { href: '/products?type=Sweatshirts', label: 'Sweatshirts' },
                { href: '/products?type=Drinkware', label: 'Accessoires' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-arvenzo-cream/70 hover:text-arvenzo-orange transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Klantenservice */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-5 text-arvenzo-cream/50">
              Klantenservice
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/shipping', label: 'Verzending & levering' },
                { href: '/returns', label: 'Retourneren' },
                { href: '/sizing', label: 'Maatgids' },
                { href: '/contact', label: 'Contact' },
                { href: '/faq', label: 'Veelgestelde vragen' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-arvenzo-cream/70 hover:text-arvenzo-orange transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over Arvenzo */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-5 text-arvenzo-cream/50">
              Over Arvenzo
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'Ons verhaal' },
                { href: '/sustainability', label: 'Duurzaamheid' },
                { href: '/privacy', label: 'Privacybeleid' },
                { href: '/terms', label: 'Algemene voorwaarden' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-arvenzo-cream/70 hover:text-arvenzo-orange transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-arvenzo-cream/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-arvenzo-cream/40 text-xs font-sans">
            © {new Date().getFullYear()} Arvenzo. Alle rechten voorbehouden. · Van Eylen Jonas, Begijnendijk, België
          </p>
          <div className="flex items-center gap-4 text-arvenzo-cream/40">
            <svg viewBox="0 0 38 24" className="h-6" fill="currentColor" aria-label="Visa">
              <text x="2" y="18" fontSize="12" fontWeight="bold">VISA</text>
            </svg>
            <svg viewBox="0 0 38 24" className="h-6" fill="currentColor" aria-label="Maestro">
              <text x="0" y="18" fontSize="10" fontWeight="bold">Maestro</text>
            </svg>
            <svg viewBox="0 0 38 24" className="h-6" fill="currentColor" aria-label="Mastercard">
              <text x="0" y="18" fontSize="9" fontWeight="bold">Mastercard</text>
            </svg>
            <svg viewBox="0 0 38 24" className="h-6" fill="currentColor" aria-label="Bancontact">
              <text x="0" y="18" fontSize="9" fontWeight="bold">Bancontact</text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
