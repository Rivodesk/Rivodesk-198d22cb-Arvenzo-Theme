'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ naam: '', email: '', onderwerp: '', bericht: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-arvenzo-light min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-[100px] pb-24">
        <nav className="flex items-center gap-2 text-xs font-sans text-arvenzo-muted mb-10">
          <Link href="/" className="hover:text-arvenzo-brown transition-colors">Home</Link>
          <span>/</span>
          <span className="text-arvenzo-ink">Contact</span>
        </nav>

        <h1 className="font-heading font-black text-4xl text-arvenzo-ink mb-3">Contact & Bedrijfsgegevens</h1>
        <p className="text-arvenzo-muted font-sans mb-12">Heeft u een vraag over een product, uw bestelling of onze diensten? Wij staan u graag te woord.</p>

        <div className="font-sans text-sm text-arvenzo-muted leading-relaxed space-y-10">

          {/* Legal company info */}
          <section className="bg-arvenzo-cream rounded-2xl p-6 border border-arvenzo-cream-dark">
            <h2 className="font-heading font-bold text-lg text-arvenzo-ink mb-4">Wettelijke Bedrijfsgegevens</h2>
            <p className="text-xs mb-4">Conform de Belgische wetgeving (Wetboek van Economisch Recht) en de EU-richtlijnen voor e-commerce:</p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {[
                ['Handelsnaam', 'Arvenzo'],
                ['Officiële bedrijfsnaam', 'Van Eylen Jonas'],
                ['Rechtsvorm', 'Eenmanszaak'],
                ['Maatschappelijke zetel', 'Pandhoevestraat 62, 3130 Begijnendijk, België'],
                ['Ondernemingsnummer (KBO)', '1027.570.389'],
                ['BTW-identificatienummer', 'BE1027.570.389'],
                ['E-mailadres', 'support@arvenzo.eu'],
                ['Telefoonnummer', '+32 16 98 24 90'],
                ['Website', 'www.arvenzo.be'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-arvenzo-muted/60 uppercase tracking-wider text-[10px] mb-0.5">{label}</p>
                  <p className="text-arvenzo-ink font-medium">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact + form */}
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arvenzo-muted mb-3">Klantenservice</p>
                <a href="mailto:support@arvenzo.eu" className="font-heading font-semibold text-arvenzo-ink hover:text-arvenzo-brown transition-colors block">
                  support@arvenzo.eu
                </a>
                <a href="tel:+3216982490" className="text-arvenzo-muted hover:text-arvenzo-brown transition-colors text-sm">
                  +32 16 98 24 90
                </a>
                <p className="text-xs text-arvenzo-muted/60 mt-1">Telefonisch niet bereikbaar voor klanten — gebruik e-mail</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arvenzo-muted mb-3">Openingstijden (e-mail)</p>
                <p className="text-sm text-arvenzo-ink">Ma – vr: 09:00 – 18:00</p>
                <p className="text-sm text-arvenzo-muted">Za & zo: gesloten</p>
                <p className="text-xs text-arvenzo-muted/60 mt-1">Reactietijd: binnen 24 uur op werkdagen</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arvenzo-muted mb-3">Specifieke vragen</p>
                <ul className="space-y-1.5 text-xs text-arvenzo-muted">
                  <li>• Algemeen: <a href="mailto:support@arvenzo.eu" className="text-arvenzo-brown hover:underline">support@arvenzo.eu</a></li>
                  <li>• Bestellingen & leveringen: vermeld uw ordernummer</li>
                  <li>• Retourzendingen: zie eerst ons <Link href="/returns" className="text-arvenzo-brown hover:underline">retourbeleid</Link></li>
                  <li>• Klachten: stuur een gedetailleerde omschrijving</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-arvenzo-muted mb-3">Volg ons</p>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'TikTok'].map(s => (
                    <a key={s} href={`https://${s.toLowerCase()}.com/arvenzo.be`} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-sans text-arvenzo-muted hover:text-arvenzo-brown transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">✓</div>
                <p className="font-heading font-bold text-arvenzo-ink">Bericht verstuurd!</p>
                <p className="font-sans text-sm text-arvenzo-muted">We nemen zo snel mogelijk contact op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'naam', label: 'Naam', type: 'text', placeholder: 'Je naam' },
                  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'je@email.be' },
                  { id: 'onderwerp', label: 'Onderwerp', type: 'text', placeholder: 'Waar gaat het over?' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs font-sans font-medium text-arvenzo-ink mb-1.5">{label}</label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-arvenzo-cream-dark bg-arvenzo-cream text-arvenzo-ink text-sm font-sans placeholder:text-arvenzo-muted/50 focus:outline-none focus:border-arvenzo-brown transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="bericht" className="block text-xs font-sans font-medium text-arvenzo-ink mb-1.5">Bericht</label>
                  <textarea
                    id="bericht"
                    required
                    rows={5}
                    placeholder="Je bericht..."
                    value={form.bericht}
                    onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-arvenzo-cream-dark bg-arvenzo-cream text-arvenzo-ink text-sm font-sans placeholder:text-arvenzo-muted/50 focus:outline-none focus:border-arvenzo-brown transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-arvenzo-brown text-arvenzo-cream font-heading font-bold py-3.5 rounded-full hover:bg-arvenzo-brown-light active:scale-[0.98] transition-all text-sm tracking-wide"
                >
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

          {/* ODR */}
          <section className="bg-arvenzo-cream rounded-2xl p-5 border border-arvenzo-cream-dark text-xs">
            <h3 className="font-heading font-semibold text-arvenzo-ink text-sm mb-2">Online Geschillenbeslechting (ODR)</h3>
            <p className="mb-2">Overeenkomstig EU-verordening nr. 524/2013 kunt u terecht bij het ODR-platform van de Europese Commissie: <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-arvenzo-brown hover:underline">ec.europa.eu/consumers/odr</a></p>
            <p>In België: <a href="https://consumentenombudsdienst.be/nl" target="_blank" rel="noopener noreferrer" className="text-arvenzo-brown hover:underline">Consumentenombudsdienst</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
