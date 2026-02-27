'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getFaq } from '@/lib/page-content/faq';

export default function FaqPage() {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = getFaq(locale);

  return (
    <div className="bg-arvenzo-light min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-[100px] pb-24">
        <nav className="flex items-center gap-2 text-xs font-sans text-arvenzo-muted mb-10">
          <Link href="/" className="hover:text-arvenzo-brown transition-colors">{t('page.home')}</Link>
          <span>/</span>
          <span className="text-arvenzo-ink">FAQ</span>
        </nav>

        <h1 className="font-heading font-black text-4xl text-arvenzo-ink mb-3">{t('faq.title')}</h1>
        <p className="text-arvenzo-muted font-sans mb-12">
          {t('faq.heading')}{' '}
          <Link href="/contact" className="text-arvenzo-brown hover:underline">{t('faq.contact')}</Link>.
        </p>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-arvenzo-cream rounded-2xl overflow-hidden border border-arvenzo-cream-dark">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-heading font-semibold text-arvenzo-ink text-sm">{faq.q}</span>
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
