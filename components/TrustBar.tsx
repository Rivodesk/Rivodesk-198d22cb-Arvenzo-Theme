import { getLocale } from '@/lib/locale';
import { t } from '@/lib/translations';

export default function TrustBar() {
  const locale = getLocale();

  const items = [
    { icon: '🚚', labelKey: 'trust.shipping.label', descKey: 'trust.shipping.desc' },
    { icon: '↩️', labelKey: 'trust.returns.label', descKey: 'trust.returns.desc' },
    { icon: '🔒', labelKey: 'trust.payment.label', descKey: 'trust.payment.desc' },
    { icon: '⭐', labelKey: 'trust.rating.label', descKey: 'trust.rating.desc' },
    { icon: '🌱', labelKey: 'trust.eco.label', descKey: 'trust.eco.desc' },
  ];

  return (
    <div className="bg-arvenzo-cream-dark border-y border-arvenzo-cream-dark/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map(({ icon, labelKey, descKey }) => (
          <div key={labelKey} className="flex items-center gap-3">
            <span className="text-xl shrink-0">{icon}</span>
            <div>
              <div className="font-sans font-semibold text-arvenzo-ink text-[13px]">{t(labelKey, locale)}</div>
              <div className="font-sans text-xs text-arvenzo-muted leading-snug">{t(descKey, locale)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
