'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import clsx from 'clsx';

export default function Header() {
  const { totalQuantity, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-arvenzo-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        {/* Announcement Bar */}
        <div className="bg-arvenzo-brown text-arvenzo-cream text-xs text-center py-2 px-4 font-sans tracking-wide">
          Gratis verzending bij bestellingen vanaf €50 · Gedrukt in Duitsland
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="font-heading font-bold text-2xl text-arvenzo-brown tracking-tight group-hover:text-arvenzo-orange transition-colors">
                ARVENZO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="font-sans text-sm font-medium text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="font-sans text-sm font-medium text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                Collectie
              </Link>
              <Link
                href="/products?type=Hoodies"
                className="font-sans text-sm font-medium text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                Hoodies
              </Link>
              <Link
                href="/products?type=Sweatshirts"
                className="font-sans text-sm font-medium text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                Sweatshirts
              </Link>
              <Link
                href="/products?type=Drinkware"
                className="font-sans text-sm font-medium text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                Accessoires
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Zoeken"
                className="p-2 text-arvenzo-dark hover:text-arvenzo-brown transition-colors hidden md:block"
              >
                <Search size={20} />
              </button>

              <button
                onClick={openCart}
                aria-label={`Winkelwagen (${totalQuantity} items)`}
                className="relative p-2 text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                <ShoppingBag size={22} />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-arvenzo-brown text-arvenzo-cream text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalQuantity > 9 ? '9+' : totalQuantity}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
                className="md:hidden p-2 text-arvenzo-dark"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-[104px] bg-arvenzo-cream/98 backdrop-blur-md animate-fade-in md:hidden">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Collectie' },
              { href: '/products?type=Hoodies', label: 'Hoodies' },
              { href: '/products?type=Sweatshirts', label: 'Sweatshirts' },
              { href: '/products?type=Drinkware', label: 'Accessoires' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading font-semibold text-2xl text-arvenzo-dark hover:text-arvenzo-brown transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
