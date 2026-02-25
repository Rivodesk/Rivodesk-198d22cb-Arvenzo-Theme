'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // In production: integrate with Klaviyo/Mailchimp
    setSubmitted(true);
  }

  return (
    <section className="py-24 bg-arvenzo-cream-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-arvenzo-orange font-sans text-sm font-medium uppercase tracking-widest mb-3">
          Blijf op de hoogte
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-arvenzo-dark">
          Als eerste nieuwe collecties ontvangen
        </h2>
        <p className="mt-4 text-arvenzo-muted font-sans text-lg">
          Schrijf je in voor onze nieuwsbrief en ontvang 10% korting op je eerste bestelling.
        </p>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-3">
            <CheckCircle size={48} className="text-green-500" />
            <p className="font-heading font-semibold text-arvenzo-dark text-lg">
              Bedankt voor je inschrijving!
            </p>
            <p className="text-arvenzo-muted font-sans text-sm">
              Controleer je inbox voor de 10% kortingscode.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jouw@email.be"
              required
              className="flex-1 px-5 py-3.5 rounded-xl border border-arvenzo-cream-dark bg-arvenzo-cream font-sans text-arvenzo-dark placeholder:text-arvenzo-muted/60 focus:outline-none focus:ring-2 focus:ring-arvenzo-brown/40 transition"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-arvenzo-brown text-arvenzo-cream font-heading font-semibold px-6 py-3.5 rounded-xl hover:bg-arvenzo-brown-light active:scale-[0.97] transition-all whitespace-nowrap"
            >
              Inschrijven
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-arvenzo-muted font-sans">
          Geen spam. Je kunt je op elk moment uitschrijven.
        </p>
      </div>
    </section>
  );
}
