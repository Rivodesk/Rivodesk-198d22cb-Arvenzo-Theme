import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decodeJwtPayload } from '@/lib/auth';
import { getCustomerByEmail, getOrdersByCustomerId, type AdminOrder } from '@/lib/shopifyAdmin';
import Link from 'next/link';

export const metadata = { title: 'Mijn bestellingen' };

const FINANCIAL_LABEL: Record<string, string> = {
  paid: 'Betaald', pending: 'In behandeling', refunded: 'Terugbetaald',
  partially_refunded: 'Gedeeltelijk terugbetaald', voided: 'Geannuleerd',
  authorized: 'Geautoriseerd', partially_paid: 'Gedeeltelijk betaald',
};
const FULFILLMENT_LABEL: Record<string, string> = {
  fulfilled: 'Verstuurd', unfulfilled: 'Nog niet verstuurd',
  partial: 'Gedeeltelijk verstuurd', restocked: 'Teruggestuurd',
};
const FINANCIAL_COLOR: Record<string, string> = {
  paid: 'bg-green-100 text-green-700', pending: 'bg-yellow-100 text-yellow-700',
  refunded: 'bg-red-100 text-red-600', voided: 'bg-red-100 text-red-600',
  authorized: 'bg-blue-100 text-blue-700',
};
const FULFILLMENT_COLOR: Record<string, string> = {
  fulfilled: 'bg-blue-100 text-blue-700', unfulfilled: 'bg-yellow-100 text-yellow-700',
  partial: 'bg-orange-100 text-orange-700',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' });
}
function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat('nl-BE', { style: 'currency', currency }).format(Number(amount));
}

export default async function OrdersPage() {
  const cookieStore = cookies();
  const idToken = cookieStore.get('arvenzo_id_token')?.value;
  if (!idToken) redirect('/api/auth/login');

  let email = '';
  try {
    const payload = decodeJwtPayload(idToken);
    email = (payload.email as string) ?? '';
  } catch { redirect('/api/auth/login'); }

  let orders: AdminOrder[] = [];
  try {
    const customer = await getCustomerByEmail(email);
    if (customer) orders = await getOrdersByCustomerId(customer.id);
  } catch (e) {
    console.error('Failed to fetch orders:', e);
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center">
        <p className="font-heading font-bold text-xl text-arvenzo-ink mb-2">Nog geen bestellingen</p>
        <p className="text-sm text-arvenzo-muted font-sans mb-6">Je hebt nog niets besteld bij Arvenzo.</p>
        <a href="/products" className="inline-block bg-arvenzo-brown text-arvenzo-cream font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-arvenzo-ink transition-colors">
          Shop nu
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {orders.map((order) => (
        <Link
          key={order.id}
          href={`/account/orders/${order.id}`}
          className="block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-arvenzo-cream-dark">
            <div>
              <span className="font-heading font-bold text-arvenzo-ink">{order.name}</span>
              <span className="ml-3 text-sm text-arvenzo-muted font-sans">{formatDate(order.created_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge status={order.financial_status} labels={FINANCIAL_LABEL} colors={FINANCIAL_COLOR} />
              {order.fulfillment_status && (
                <Badge status={order.fulfillment_status} labels={FULFILLMENT_LABEL} colors={FULFILLMENT_COLOR} />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-3.5">
            <p className="text-sm font-sans text-arvenzo-muted">
              {order.line_items.slice(0, 2).map((i) => i.title).join(', ')}
              {order.line_items.length > 2 && ` +${order.line_items.length - 2} meer`}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-sans font-semibold text-arvenzo-ink">
                {formatPrice(order.total_price, order.currency)}
              </span>
              <span className="text-arvenzo-muted group-hover:text-arvenzo-brown transition-colors">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Badge({ status, labels, colors }: {
  status: string;
  labels: Record<string, string>;
  colors: Record<string, string>;
}) {
  return (
    <span className={`text-[11px] font-sans font-semibold px-2.5 py-1 rounded-full ${colors[status] ?? 'bg-gray-100 text-gray-600'}`}>
      {labels[status] ?? status}
    </span>
  );
}
