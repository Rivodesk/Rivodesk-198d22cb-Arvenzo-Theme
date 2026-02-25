'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { Cart } from '@/lib/types';

interface CartContextValue {
  cart: Cart | null;
  isLoading: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  totalQuantity: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem('arvenzo-cart-id');
    if (savedCartId) {
      fetchCart(savedCartId);
    }
  }, []);

  async function fetchCart(cartId: string) {
    try {
      const res = await fetch(`/api/cart?cartId=${cartId}`);
      if (res.ok) {
        const data = await res.json();
        setCart(data.cart);
      }
    } catch {
      // Cart not found, ignore
      localStorage.removeItem('arvenzo-cart-id');
    }
  }

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    setIsLoading(true);
    try {
      const cartId = cart?.id ?? localStorage.getItem('arvenzo-cart-id') ?? null;
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add', cartId, variantId, quantity }),
      });
      const data = await res.json();
      setCart(data.cart);
      localStorage.setItem('arvenzo-cart-id', data.cart.id);
      setIsOpen(true);
    } catch (err) {
      console.error('Add to cart failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'remove', cartId: cart.id, lineId }),
      });
      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Remove from cart failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    if (!cart) return;
    if (quantity <= 0) {
      await removeItem(lineId);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update', cartId: cart.id, lineId, quantity }),
      });
      const data = await res.json();
      setCart(data.cart);
    } catch (err) {
      console.error('Update cart failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, [cart, removeItem]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateItem,
        totalQuantity: cart?.totalQuantity ?? 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
