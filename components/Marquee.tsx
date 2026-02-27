import { getLocale } from '@/lib/locale';
import { t } from '@/lib/translations';

export default function Marquee() {
  const locale = getLocale();

  const keys = ['marquee.1', 'marquee.2', 'marquee.3', 'marquee.4', 'marquee.5', 'marquee.6', 'marquee.7', 'marquee.8', 'marquee.9'];
  const items = keys.map(k => t(k, locale));
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-arvenzo-brown py-4 select-none">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-4 font-heading font-bold text-sm tracking-[0.2em] text-arvenzo-cream whitespace-nowrap"
          >
            {item}
            <span className="text-arvenzo-orange/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
