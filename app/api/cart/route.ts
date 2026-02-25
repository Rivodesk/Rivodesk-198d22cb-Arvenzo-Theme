import { NextResponse } from 'next/server';
import {
  createCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  getCart,
} from '@/lib/shopify';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get('cartId');

  if (!cartId) {
    return NextResponse.json({ error: 'cartId required' }, { status: 400 });
  }

  try {
    const cart = await getCart(cartId);
    return NextResponse.json({ cart });
  } catch (err) {
    console.error('Get cart error:', err);
    return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { action, cartId, variantId, lineId, quantity } = body;

  try {
    let cart;

    switch (action) {
      case 'add':
        if (cartId) {
          cart = await addToCart(cartId, variantId, quantity ?? 1);
        } else {
          cart = await createCart(variantId, quantity ?? 1);
        }
        break;
      case 'remove':
        cart = await removeFromCart(cartId, lineId);
        break;
      case 'update':
        cart = await updateCartItem(cartId, lineId, quantity);
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({ cart });
  } catch (err) {
    console.error('Cart action error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Cart operation failed' },
      { status: 500 }
    );
  }
}
