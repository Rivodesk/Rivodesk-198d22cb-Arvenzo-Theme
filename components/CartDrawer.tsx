'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/shopify';

export default function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, removeItem, updateItem } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-arvenzo-dark/40 backdrop-blur-sm animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-arvenzo-cream shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-arvenzo-cream-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-arvenzo-brown" />
            <h2 className="font-heading font-bold text-lg text-arvenzo-dark">
              Winkelwagen
              {cart && cart.totalQuantity > 0 && (
                <span className="ml-2 text-sm font-normal text-arvenzo-muted">
                  ({cart.totalQuantity})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-arvenzo-muted hover:text-arvenzo-dark transition-colors rounded-full hover:bg-arvenzo-cream-dark"
            aria-label="Winkelwagen sluiten"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!cart || cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <div className="w-20 h-20 rounded-full bg-arvenzo-cream-dark flex items-center justify-center">
                <ShoppingBag size={32} className="text-arvenzo-muted" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-arvenzo-dark text-lg">
                  Je winkelwagen is leeg
                </h3>
                <p className="text-sm text-arvenzo-muted mt-1 font-sans">
                  Voeg producten toe om verder te gaan
                </p>
              </div>
              <Link
                href="/products"
                onClick={closeCart}
                className="mt-2 inline-flex items-center gap-2 bg-arvenzo-brown text-arvenzo-cream px-6 py-3 rounded-xl text-sm font-medium hover:bg-arvenzo-brown-light transition-colors"
              >
                Bekijk collectie
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.items.map((item) => (
                <div key={item.lineId} className="flex gap-4 group">
                  {/* Image */}
                  <Link
                    href={`/products/${item.handle}`}
                    onClick={closeCart}
                    className="flex-shrink-0 w-20 h-20 bg-arvenzo-cream-dark rounded-xl overflow-hidden"
                  >
                    {item.image && (
                      <Image
                        src={item.image.url}
                        alt={item.image.altText ?? item.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1"
                      />
                    )}
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          href={`/products/${item.handle}`}
                          onClick={closeCart}
                          className="font-heading font-semibold text-sm text-arvenzo-dark hover:text-arvenzo-brown transition-colors leading-tight block"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-arvenzo-muted mt-0.5 font-sans">
                          {item.selectedOptions.map((o) => o.value).join(' · ')}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="p-1 text-arvenzo-muted hover:text-arvenzo-dark transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Verwijderen"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-arvenzo-cream-dark rounded-lg">
                        <button
                          onClick={() => updateItem(item.lineId, item.quantity - 1)}
                          disabled={isLoading}
                          className="p-1.5 text-arvenzo-muted hover:text-arvenzo-dark transition-colors disabled:opacity-40"
                          aria-label="Minder"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-arvenzo-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateItem(item.lineId, item.quantity + 1)}
                          disabled={isLoading}
                          className="p-1.5 text-arvenzo-muted hover:text-arvenzo-dark transition-colors disabled:opacity-40"
                          aria-label="Meer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <span className="font-sans font-semibold text-sm text-arvenzo-dark">
                        {formatPrice(item.price * item.quantity, item.currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && cart.items.length > 0 && (
          <div className="border-t border-arvenzo-cream-dark px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-arvenzo-muted">Subtotaal</span>
              <span className="font-heading font-bold text-arvenzo-dark">
                {formatPrice(cart.subtotal, cart.currency)}
              </span>
            </div>
            <p className="text-xs text-arvenzo-muted font-sans">
              Verzending & belastingen worden berekend bij het afrekenen.
            </p>
            <a
              href={cart.checkoutUrl}
              className="w-full flex items-center justify-center gap-2 bg-arvenzo-brown text-arvenzo-cream font-heading font-semibold py-4 rounded-xl hover:bg-arvenzo-brown-light active:scale-[0.98] transition-all text-base"
            >
              Afrekenen
              <ArrowRight size={18} />
            </a>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-arvenzo-muted hover:text-arvenzo-dark transition-colors font-sans"
            >
              Verder winkelen
            </button>
          </div>
        )}
      </div>
    </>
  );
}
