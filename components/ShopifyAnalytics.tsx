'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useShopifyCookies } from '@shopify/hydrogen-react';
import { trackPageView, getHasConsent } from '@/lib/analytics';

export default function ShopifyAnalytics() {
  const pathname = usePathname();

  // Zet Shopify tracking cookies (_shopify_y, _shopify_s)
  useShopifyCookies({ hasUserConsent: getHasConsent() });

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
