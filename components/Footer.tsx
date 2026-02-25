import Link from 'next/link';
import MerchantBadge from '@/components/MerchantBadge';

function IconVisa() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <text x="23" y="20" textAnchor="middle" fill="#1A1F71" fontSize="14" fontWeight="800" fontFamily="Arial,sans-serif" fontStyle="italic">VISA</text>
    </svg>
  );
}

function IconMastercard() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <circle cx="18" cy="15" r="8" fill="#EB001B"/>
      <circle cx="28" cy="15" r="8" fill="#F79E1B"/>
      <path d="M23 8.4a8 8 0 0 1 0 13.2A8 8 0 0 1 23 8.4z" fill="#FF5F00"/>
    </svg>
  );
}

function IconBancontact() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bancontact">
      <rect width="46" height="30" rx="4" fill="#005498"/>
      <path d="M0 20h46v6a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-6z" fill="#F5CB00"/>
      <text x="23" y="14" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing=".3">Bancontact</text>
      <text x="23" y="26" textAnchor="middle" fill="#005498" fontSize="7" fontWeight="800" fontFamily="Arial,sans-serif">BC</text>
    </svg>
  );
}

function IconMaestro() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Maestro">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <circle cx="19" cy="13" r="7" fill="#0099DF"/>
      <circle cx="27" cy="13" r="7" fill="#EB001B" fillOpacity=".85"/>
      <text x="23" y="26" textAnchor="middle" fill="#333" fontSize="6" fontWeight="600" fontFamily="Arial,sans-serif">Maestro</text>
    </svg>
  );
}

function IconPayPal() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <text x="12" y="19" fill="#003087" fontSize="12" fontWeight="800" fontFamily="Arial,sans-serif" fontStyle="italic">P</text>
      <text x="18" y="19" fill="#009CDE" fontSize="12" fontWeight="800" fontFamily="Arial,sans-serif" fontStyle="italic">P</text>
      <text x="23" y="19" fill="#003087" fontSize="9" fontWeight="600" fontFamily="Arial,sans-serif">ayPal</text>
    </svg>
  );
}

function IconAmex() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="American Express">
      <rect width="46" height="30" rx="4" fill="#2E77BC"/>
      <text x="23" y="19" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1">AMEX</text>
    </svg>
  );
}

function IconApplePay() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Pay">
      <rect width="46" height="30" rx="4" fill="#000"/>
      <path d="M16.5 10.5c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.6 1 .1 2-.5 2.7-1.2z" fill="white"/>
      <path d="M17.4 11.8c-1.5-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 2.9.7 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.7 0-2.3 1.9-3.5 2-3.5-.9-1.5-2.5-1.4-2.5-1.4z" fill="white"/>
      <text x="30" y="19" textAnchor="middle" fill="white" fontSize="8" fontWeight="500" fontFamily="Arial,sans-serif" letterSpacing=".5">Pay</text>
    </svg>
  );
}

function IconGooglePay() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <text x="8" y="20" fill="#4285F4" fontSize="12" fontWeight="700" fontFamily="Arial,sans-serif">G</text>
      <text x="17" y="20" fill="#555" fontSize="9" fontWeight="500" fontFamily="Arial,sans-serif">Pay</text>
    </svg>
  );
}

function IconShopPay() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Shop Pay">
      <rect width="46" height="30" rx="4" fill="#5C6AC4"/>
      <text x="23" y="19" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing=".3">Shop Pay</text>
    </svg>
  );
}

function IconKlarna() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Klarna">
      <rect width="46" height="30" rx="4" fill="#FFB3C7"/>
      <text x="23" y="20" textAnchor="middle" fill="#17120E" fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif">Klarna</text>
    </svg>
  );
}

function IconIdeal() {
  return (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="iDEAL">
      <rect width="46" height="30" rx="4" fill="white"/>
      <rect x=".5" y=".5" width="45" height="29" rx="3.5" stroke="#D1D5DB" strokeWidth=".5"/>
      <text x="23" y="20" textAnchor="middle" fill="#C0006D" fontSize="12" fontWeight="800" fontFamily="Arial,sans-serif">iDEAL</text>
    </svg>
  );
}

const PAYMENT_ICONS = [
  <IconVisa key="visa" />,
  <IconMastercard key="mc" />,
  <IconBancontact key="bc" />,
  <IconMaestro key="maestro" />,
  <IconPayPal key="paypal" />,
  <IconAmex key="amex" />,
  <IconApplePay key="applepay" />,
  <IconGooglePay key="gpay" />,
  <IconShopPay key="shoppay" />,
  <IconKlarna key="klarna" />,
  <IconIdeal key="ideal" />,
];

export default function Footer() {
  return (
    <footer className="bg-arvenzo-ink text-arvenzo-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-heading font-black text-2xl tracking-[0.12em]">ARVENZO</div>
            <p className="mt-3 text-arvenzo-cream/40 text-sm font-sans leading-relaxed">
              Avontuur en rust in elk ontwerp. Belgisch merk, gedrukt in Europa.
            </p>
            <div className="flex gap-3 mt-5">
              {['Instagram', 'Facebook', 'TikTok'].map(s => (
                <a key={s} href={`https://${s.toLowerCase()}.com/arvenzo.be`} target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-arvenzo-cream/30 hover:text-arvenzo-orange transition-colors font-sans tracking-widest uppercase">
                  {s}
                </a>
              ))}
            </div>
            <MerchantBadge />
          </div>

          {[
            {
              title: 'Shop',
              links: [
                ['Alle producten', '/products'],
                ['Hoodies', '/products?type=Hoodies'],
                ['Sweatshirts', '/products?type=Sweatshirts'],
                ['Shirts', '/products?type=Unisex-Shirts'],
                ['Mugs', '/products?type=Trinkgef%C3%A4%C3%9Fe'],
              ],
            },
            {
              title: 'Service',
              links: [
                ['Verzending', '/shipping'],
                ['Retourneren', '/returns'],
                ['Maatgids', '/sizing'],
                ['Contact', '/contact'],
                ['FAQ', '/faq'],
              ],
            },
            {
              title: 'Info',
              links: [
                ['Ons verhaal', '/about'],
                ['Privacybeleid', '/privacy'],
                ['Algemene voorwaarden', '/terms'],
                ['Cookiebeleid', '/privacy#cookies'],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-arvenzo-cream/30 mb-5">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-arvenzo-cream/50 hover:text-arvenzo-orange transition-colors font-sans">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="border-t border-white/5 pt-6 pb-4">
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-arvenzo-cream/20 mb-3">Veilig betalen via</p>
          <div className="flex flex-wrap gap-2">
            {PAYMENT_ICONS}
          </div>
        </div>

        {/* Legal bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-arvenzo-cream/20 font-sans">
          <div className="space-y-1">
            <span className="block">© {new Date().getFullYear()} Arvenzo · Van Eylen Jonas · 3130 Begijnendijk, België</span>
            <span className="block">E-mail: info@arvenzo.be · Belgisch recht van toepassing · Bevoegde rechtbank: arrondissement Leuven</span>
            <span className="block">
              Alle prijzen zijn inclusief BTW ·{' '}
              <Link href="/privacy" className="hover:text-arvenzo-orange/60 transition-colors">Privacybeleid</Link>
              {' · '}
              <Link href="/terms" className="hover:text-arvenzo-orange/60 transition-colors">Algemene voorwaarden</Link>
              {' · '}
              <Link href="/returns" className="hover:text-arvenzo-orange/60 transition-colors">Herroepingsrecht</Link>
            </span>
          </div>
          <div className="shrink-0 text-arvenzo-cream/10 text-[10px]">
            Veilig & beveiligd via Shopify
          </div>
        </div>
      </div>
    </footer>
  );
}
