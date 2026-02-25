'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    v: 'Wanneer wordt mijn bestelling geleverd?',
    a: 'Onze producten worden on-demand gedrukt. Reken op 1–6 werkdagen productietijd + gemiddeld 3–5 werkdagen verzending (zonder vertragingen) voor België en Nederland. Bestellingen geplaatst vóór 12:00 uur op werkdagen worden dezelfde dag in behandeling genomen.',
  },
  {
    v: 'Is er gratis verzending?',
    a: 'Ja! Bestellingen vanaf €50 worden gratis verzonden naar België en Nederland. Voor andere EU-landen geldt gratis verzending vanaf €75 of €100, afhankelijk van het land. Verzendkosten worden duidelijk vermeld in de checkout.',
  },
  {
    v: 'Welke maat moet ik kiezen?',
    a: 'Bekijk onze uitgebreide maatgids voor exacte centimetermaten. Bij twijfel adviseren wij een maat groter te kiezen voor een comfortabele, streetwear-geïnspireerde pasvorm.',
  },
  {
    v: 'Kan ik mijn bestelling retourneren?',
    a: 'Ja, je kunt retourneren binnen 14 kalenderdagen na ontvangst (herroepingsrecht conform EU-richtlijn 2011/83/EU). Het product moet ongedragen, ongewassen en voorzien van het originele label zijn. Neem contact op via support@arvenzo.eu om een retour aan te melden. Bekijk ons volledig retourbeleid voor alle details.',
  },
  {
    v: 'Hoe worden de producten gemaakt?',
    a: 'Alle Arvenzo-producten worden on-demand geprint in Europa door onze printpartner. Dit betekent geen overproductie en een lagere ecologische voetafdruk. Elk stuk wordt speciaal voor jou gemaakt. Bovendien planten wij voor elk besteld artikel één boom en halen wij 1 kg CO₂ uit de lucht.',
  },
  {
    v: 'Kan ik mijn bestelling wijzigen of annuleren?',
    a: 'Neem zo snel mogelijk contact op via support@arvenzo.eu met vermelding van je ordernummer. Zodra de productie gestart is (na de cut-off van 12:00 uur), kan een bestelling niet meer worden gewijzigd of geannuleerd.',
  },
  {
    v: 'Hoe was ik mijn Arvenzo-producten?',
    a: 'Was op maximaal 30°C en keer het kledingstuk binnenstebuiten. Gebruik geen bleek en droog niet in de droogtrommel. Strijk niet direct op de print. Zo bewaar je de kwaliteit en de print zo lang mogelijk.',
  },
  {
    v: 'Welke betaalmethoden accepteren jullie?',
    a: 'Wij accepteren: Bancontact, Creditcard (Visa, Mastercard, Maestro, UnionPay, American Express), PayPal, Crypto (USDC), iDEAL, KBC Direct Pay en Belfius Direct Pay. De afrekening verloopt veilig en versleuteld.',
  },
  {
    v: 'Kan ik betalen met cryptocurrency?',
    a: 'Ja! Wij accepteren USDC (USD Coin) als betaalmethode. Selecteer "Crypto" bij het afrekenen en volg de instructies.',
  },
  {
    v: 'Ik heb een defect product ontvangen. Wat nu?',
    a: 'Stuur een foto van het defect naar support@arvenzo.eu met je ordernummer. Wij sturen gratis een vervangend product of betalen het volledige bedrag terug. U beschikt over 2 jaar wettelijke garantie conform Belgisch recht.',
  },
  {
    v: 'Kan ik de status van mijn bestelling volgen?',
    a: 'Ja. Zodra je bestelling verzonden is, ontvang je een bevestigingsmail met een Track & Trace-code. Hiermee kun je de status van je pakket live opvolgen via de website van de vervoerder (bpost, PostNL of DHL).',
  },
  {
    v: 'Waarom duurt de levering soms langer?',
    a: 'Onze producten worden on-demand gedrukt, wat een productietijd vereist van 1–6 werkdagen. Daarna volgt de verzending (gem. 3–5 werkdagen). Externe factoren zoals drukte bij de vervoerder, feestdagen of extreme weersomstandigheden kunnen extra vertraging veroorzaken.',
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-arvenzo-light min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-[100px] pb-24">
        <nav className="flex items-center gap-2 text-xs font-sans text-arvenzo-muted mb-10">
          <Link href="/" className="hover:text-arvenzo-brown transition-colors">Home</Link>
          <span>/</span>
          <span className="text-arvenzo-ink">FAQ</span>
        </nav>

        <h1 className="font-heading font-black text-4xl text-arvenzo-ink mb-3">Veelgestelde vragen</h1>
        <p className="text-arvenzo-muted font-sans mb-12">
          Staat je vraag er niet bij?{' '}
          <Link href="/contact" className="text-arvenzo-brown hover:underline">Neem contact op</Link>.
        </p>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-arvenzo-cream rounded-2xl overflow-hidden border border-arvenzo-cream-dark">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-heading font-semibold text-arvenzo-ink text-sm">{faq.v}</span>
                <span className={`text-arvenzo-muted transition-transform duration-200 shrink-0 ${open === i ? 'rotate-180' : ''}`}>↓</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-sans text-sm text-arvenzo-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
