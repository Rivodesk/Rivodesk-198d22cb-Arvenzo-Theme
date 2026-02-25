'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, X, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/shopify';

export default function CartPage() {
  const { cart, isLoading, removeItem, updateItem } = useCart();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-arvenzo-light flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 rounded-full bg-arvenzo-cream-dark flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-arvenzo-muted" />
          </div>
          <h1 className="font-heading font-bold text-3xl text-arvenzo-dark mb-3">
            Je winkelwagen is leeg
          </h1>
          <p className="text-arvenzo-muted font-sans mb-8">
            Voeg producten toe aan je winkelwagen om verder te gaan.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-arvenzo-brown text-arvenzo-cream font-heading font-semibold px-8 py-4 rounded-xl hover:bg-arvenzo-brown-light transition-colors"
          >
            Bekijk collectie
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-arvenzo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/products"
            className="flex items-center gap-2 text-arvenzo-muted hover:text-arvenzo-dark transition-colors font-sans text-sm"
          >
            <ArrowLeft size={16} />
            Verder winkelen
          </Link>
          <h1 className="font-heading font-bold text-3xl text-arvenzo-dark">
            Winkelwagen ({cart.totalQuantity})
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.lineId}
                className="flex gap-5 bg-arvenzo-cream rounded-2xl p-5 border border-arvenzo-cream-dark"
              >
                {/* Image */}
                <Link href={`/products/${item.handle}`} className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-arvenzo-cream-dark">
                    {item.image && (
                      <Image
                        src={item.image.url}
                        alt={item.image.altText ?? item.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-1"
                      />
                    )}
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link href={`/products/${item.handle}`}>
                        <h3 className="font-heading font-semibold text-arvenzo-dark hover:text-arvenzo-brown transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-arvenzo-muted font-sans mt-0.5">
                        {item.selectedOptions.map((o) => o.value).join(' · ')}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.lineId)}
                      disabled={isLoading}
                      className="p-1.5 text-arvenzo-muted hover:text-arvenzo-dark rounded-lg hover:bg-arvenzo-cream-dark transition-all"
                      aria-label="Verwijderen"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-2 border border-arvenzo-cream-dark rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateItem(item.lineId, item.quantity - 1)}
                        disabled={isLoading}
                        className="p-2.5 text-arvenzo-muted hover:text-arvenzo-dark hover:bg-arvenzo-cream-dark transition-all disabled:opacity-40"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium text-arvenzo-dark text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateItem(item.lineId, item.quantity + 1)}
                        disabled={isLoading}
                        className="p-2.5 text-arvenzo-muted hover:text-arvenzo-dark hover:bg-arvenzo-cream-dark transition-all disabled:opacity-40"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span className="font-heading font-bold text-arvenzo-dark">
                      {formatPrice(item.price * item.quantity, item.currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-arvenzo-cream rounded-2xl p-6 border border-arvenzo-cream-dark sticky top-28">
              <h2 className="font-heading font-bold text-xl text-arvenzo-dark mb-5">
                Bestellingsoverzicht
              </h2>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-arvenzo-muted">Subtotaal</span>
                  <span className="text-arvenzo-dark font-medium">
                    {formatPrice(cart.subtotal, cart.currency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-arvenzo-muted">Verzending</span>
                  <span className="text-green-600 font-medium">
                    {cart.subtotal >= 50 ? 'Gratis' : formatPrice(4.99, cart.currency)}
                  </span>
                </div>
                {cart.subtotal < 50 && (
                  <p className="text-xs text-arvenzo-muted bg-arvenzo-cream-dark rounded-lg px-3 py-2 font-sans">
                    Voeg nog {formatPrice(50 - cart.subtotal, cart.currency)} toe voor gratis verzending
                  </p>
                )}
              </div>

              <div className="border-t border-arvenzo-cream-dark pt-4 mb-5">
                <div className="flex justify-between">
                  <span className="font-heading font-bold text-arvenzo-dark">Totaal</span>
                  <span className="font-heading font-bold text-xl text-arvenzo-dark">
                    {formatPrice(cart.subtotal >= 50 ? cart.subtotal : cart.subtotal + 4.99, cart.currency)}
                  </span>
                </div>
                <p className="text-xs text-arvenzo-muted mt-1 font-sans">Incl. BTW</p>
              </div>

              <a
                href={cart.checkoutUrl}
                className="w-full flex items-center justify-center gap-2 bg-arvenzo-brown text-arvenzo-cream font-heading font-bold py-4 rounded-xl hover:bg-arvenzo-brown-light active:scale-[0.98] transition-all text-base"
              >
                Afrekenen
                <ArrowRight size={18} />
              </a>

              <div className="mt-4 flex items-center justify-center gap-3 text-arvenzo-muted/60">
                <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><text x="0" y="12" fontSize="8">VISA</text></svg>
                <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><text x="0" y="12" fontSize="6">Maestro</text></svg>
                <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><text x="0" y="12" fontSize="5">Mastercard</text></svg>
                <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><text x="0" y="12" fontSize="5">Bancontact</text></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
