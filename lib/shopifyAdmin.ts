const ADMIN_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-07`;
const TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN!;

async function adminFetch(path: string) {
  const res = await fetch(`${ADMIN_URL}${path}`, {
    headers: {
      'X-Shopify-Access-Token': TOKEN,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Admin API ${res.status}: ${await res.text()}`);
  return res.json();
}

export interface AdminOrder {
  id: number;
  name: string;
  created_at: string;
  financial_status: string;
  fulfillment_status: string | null;
  total_price: string;
  currency: string;
  line_items: {
    title: string;
    quantity: number;
    price: string;
  }[];
}

export interface AdminCustomer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  default_address: {
    first_name: string;
    last_name: string;
    address1: string;
    address2: string | null;
    city: string;
    zip: string;
    country: string;
    province: string | null;
  } | null;
}

export async function getCustomerByEmail(email: string): Promise<AdminCustomer | null> {
  const data = await adminFetch(`/customers/search.json?query=email:${encodeURIComponent(email)}&limit=1`);
  return data.customers?.[0] ?? null;
}

export async function getOrdersByCustomerId(customerId: number): Promise<AdminOrder[]> {
  const data = await adminFetch(`/orders.json?customer_id=${customerId}&status=any&limit=20`);
  return data.orders ?? [];
}
