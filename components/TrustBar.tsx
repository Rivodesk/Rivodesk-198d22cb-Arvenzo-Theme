import { Truck, RefreshCcw, Shield, Star } from 'lucide-react';

const items = [
  {
    icon: Truck,
    title: 'Gratis verzending',
    desc: 'Bij bestellingen vanaf €50',
  },
  {
    icon: RefreshCcw,
    title: '30 dagen retour',
    desc: 'Moeiteloos retourneren',
  },
  {
    icon: Shield,
    title: 'Veilig betalen',
    desc: 'Visa, Mastercard, Bancontact',
  },
  {
    icon: Star,
    title: '4.9 / 5 sterren',
    desc: 'Meer dan 500 reviews',
  },
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-arvenzo-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-arvenzo-cream/10 flex items-center justify-center">
                <item.icon size={20} className="text-arvenzo-orange" />
              </div>
              <div>
                <div className="font-heading font-semibold text-arvenzo-cream text-sm">{item.title}</div>
                <div className="font-sans text-xs text-arvenzo-cream/60 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
