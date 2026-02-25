import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-arvenzo-light flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-heading font-bold text-8xl text-arvenzo-brown/20">404</p>
        <h1 className="font-heading font-bold text-3xl text-arvenzo-dark mt-4">
          Pagina niet gevonden
        </h1>
        <p className="text-arvenzo-muted font-sans mt-3 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-arvenzo-brown text-arvenzo-cream font-heading font-semibold px-8 py-4 rounded-xl hover:bg-arvenzo-brown-light transition-colors"
        >
          <ArrowLeft size={18} />
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
