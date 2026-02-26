import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decodeJwtPayload } from '@/lib/auth';
import { getCustomerByEmail } from '@/lib/shopifyAdmin';

export const metadata = { title: 'Mijn gegevens' };

const COUNTRY_NAMES: Record<string, string> = {
  Belgium: 'België', Netherlands: 'Nederland', France: 'Frankrijk',
  Germany: 'Duitsland', 'United Kingdom': 'Verenigd Koninkrijk',
  Luxembourg: 'Luxemburg', 'United States': 'Verenigde Staten',
};

export default async function AccountPage() {
  const cookieStore = cookies();
  const idToken = cookieStore.get('arvenzo_id_token')?.value;
  if (!idToken) redirect('/api/auth/login');

  let email = '';
  try {
    const payload = decodeJwtPayload(idToken);
    email = (payload.email as string) ?? '';
  } catch {
    redirect('/api/auth/login');
  }

  const customer = await getCustomerByEmail(email).catch(() => null);
  const addr = customer?.default_address ?? null;
  const fullName = [customer?.first_name, customer?.last_name].filter(Boolean).join(' ');

  return (
    <div className="grid gap-4">
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-arvenzo-cream-dark">
          <h2 className="font-heading font-bold text-lg text-arvenzo-ink">Persoonlijke gegevens</h2>
        </div>
        <dl className="divide-y divide-arvenzo-cream-dark">
          <Row label="Naam" value={fullName || '—'} />
          <Row label="E-mailadres" value={email || '—'} />
          <Row label="Telefoonnummer" value={customer?.phone ?? '—'} />
        </dl>
      </section>

      <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-arvenzo-cream-dark">
          <h2 className="font-heading font-bold text-lg text-arvenzo-ink">Standaard leveringsadres</h2>
        </div>
        {addr ? (
          <dl className="divide-y divide-arvenzo-cream-dark">
            <Row label="Naam" value={[addr.first_name, addr.last_name].filter(Boolean).join(' ') || '—'} />
            <Row label="Adres" value={[addr.address1, addr.address2].filter(Boolean).join(', ')} />
            <Row label="Stad" value={`${addr.zip} ${addr.city}`} />
            <Row label="Land" value={COUNTRY_NAMES[addr.country] ?? addr.country} />
          </dl>
        ) : (
          <p className="px-6 py-4 text-sm text-arvenzo-muted font-sans">Geen adres opgeslagen.</p>
        )}
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5 gap-4">
      <dt className="text-sm font-sans text-arvenzo-muted shrink-0 w-36">{label}</dt>
      <dd className="text-sm font-sans text-arvenzo-ink text-right">{value}</dd>
    </div>
  );
}
