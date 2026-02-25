import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'Arvenzo – Avontuur & Stijl',
    template: '%s | Arvenzo',
  },
  description:
    'Ontdek de Arvenzo collectie: premium hoodies, sweatshirts en accessoires met unieke berglandschap designs. Limited edition, gedrukt in Duitsland.',
  keywords: ['arvenzo', 'hoodie', 'sweatshirt', 'limited edition', 'mountain', 'belgisch merk'],
  authors: [{ name: 'Arvenzo', url: 'https://www.arvenzo.be' }],
  openGraph: {
    title: 'Arvenzo – Avontuur & Stijl',
    description: 'Premium limited edition streetwear met berglandschap designs.',
    url: 'https://www.arvenzo.be',
    siteName: 'Arvenzo',
    locale: 'nl_BE',
    type: 'website',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-unisex-hoodie-arctic-white-482-c070-2000x.png',
        width: 2000,
        height: 2000,
        alt: 'Arvenzo Crescent Peak Hoodie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvenzo – Avontuur & Stijl',
    description: 'Premium limited edition streetwear met berglandschap designs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
