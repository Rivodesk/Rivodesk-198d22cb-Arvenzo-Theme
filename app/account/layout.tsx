import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decodeJwtPayload } from '@/lib/auth';
import { AccountNav } from './AccountNav';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const idToken = cookieStore.get('arvenzo_id_token')?.value;
  if (!idToken) redirect('/api/auth/login');

  let initials = '?';
  let fullName = '';

  try {
    const p = decodeJwtPayload(idToken);
    const first = (p.given_name ?? p.first_name ?? '') as string;
    const last = (p.family_name ?? p.last_name ?? '') as string;
    const email = (p.email ?? '') as string;
    initials = [first[0], last[0]].filter(Boolean).join('').toUpperCase() || email[0]?.toUpperCase() || '?';
    fullName = [first, last].filter(Boolean).join(' ') || email;
  } catch {
    redirect('/api/auth/login');
  }

  return (
    <div className="min-h-screen bg-arvenzo-cream pt-[96px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pt-6">
          <div className="w-14 h-14 rounded-full bg-arvenzo-brown text-arvenzo-cream flex items-center justify-center text-xl font-heading font-bold shrink-0">
            {initials}
          </div>
          <div>
            <h1 className="font-heading font-black text-2xl text-arvenzo-ink">{fullName}</h1>
            <a
              href="/api/auth/logout"
              className="text-sm font-sans text-red-500 hover:text-red-700 transition-colors"
            >
              Uitloggen
            </a>
          </div>
        </div>

        <AccountNav />
        {children}
      </div>
    </div>
  );
}
