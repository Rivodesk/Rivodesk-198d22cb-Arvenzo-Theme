// Mock data used as fallback when Shopify API is not configured
// This mirrors the real Arvenzo product catalog

import type { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'gid://shopify/Product/10578832589143',
    title: 'Crescent Peak Hoodie',
    handle: 'crescent-peak-hoodie',
    description:
      'Limited edition unisex hoodie met een majestueuze maan boven een berglandschap – symbool voor avontuur en rust. 80% katoen, 20% polyester. Gedrukt in Duitsland.',
    descriptionHtml:
      '<p>Limited edition unisex hoodie met een <strong>majestueuze maan boven een berglandschap</strong> – symbool voor avontuur en rust.</p><ul><li>80% katoen, 20% polyester</li><li>Dubbele capuchon</li><li>Kangoeroe zak</li><li>Nauwsluitende afwerking</li><li>100% gedrukt in Duitsland</li></ul>',
    price: 39.94,
    compareAtPrice: 46.99,
    currency: 'EUR',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-unisex-hoodie-arctic-white-482-c070-2000x.png',
        altText: 'Crescent Peak Hoodie Arctic White voorkant',
        width: 2000,
        height: 2000,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-unisex-hoodie-deep-black-482-c070-2000x.png',
        altText: 'Crescent Peak Hoodie Deep Black',
        width: 2000,
        height: 2000,
      },
    ],
    options: [
      {
        name: 'Kleur',
        values: [
          'Arctic White',
          'Baby Pink',
          'Burgundy',
          'Bottle Green',
          'Deep Black',
          'Hot Chocolate',
          'Heather Grey',
          'Royal Blue',
          'Oxford Navy',
          'Steel Grey',
          'Airforce Blue',
        ],
      },
      {
        name: 'Maat',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1',
        title: 'Arctic White / M',
        price: { amount: '39.94', currencyCode: 'EUR' },
        compareAtPrice: { amount: '46.99', currencyCode: 'EUR' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Kleur', value: 'Arctic White' },
          { name: 'Maat', value: 'M' },
        ],
      },
      {
        id: 'gid://shopify/ProductVariant/2',
        title: 'Deep Black / M',
        price: { amount: '39.94', currencyCode: 'EUR' },
        compareAtPrice: { amount: '46.99', currencyCode: 'EUR' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Kleur', value: 'Deep Black' },
          { name: 'Maat', value: 'M' },
        ],
      },
    ],
    productType: 'Hoodies',
    vendor: 'Arvenzo',
    tags: ['limited-edition', 'hoodie', 'mountain'],
  },
  {
    id: 'gid://shopify/Product/10578832589144',
    title: 'Crescent Peak Sweatshirt',
    handle: 'crescent-peak-sweatshirt',
    description:
      'Klassiek sweatshirt met normale pasvorm en ingezette mouwen. 80% katoen, 20% polyester, 280g/m². Het perfecte dagelijkse comfortstuk.',
    descriptionHtml:
      '<p>Klassiek sweatshirt met <strong>normale pasvorm</strong> en ingezette mouwen.</p><ul><li>80% katoen, 20% polyester</li><li>280 g/m² kwaliteitsstof</li><li>Normale pasvorm</li><li>Ingezette mouwen</li><li>Ribboorden aan manchetten en onderkant</li></ul>',
    price: 31.44,
    compareAtPrice: 36.99,
    currency: 'EUR',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-sweatshirt-arctic-white-734-b8e4-2000x.png',
        altText: 'Crescent Peak Sweatshirt Arctic White',
        width: 2000,
        height: 2000,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-sweatshirt-heather-grey-734-b8e4-2000x.png',
        altText: 'Crescent Peak Sweatshirt Heather Grey',
        width: 2000,
        height: 2000,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-sweatshirt-burgundy-734-b8e4-2000x.png',
        altText: 'Crescent Peak Sweatshirt Burgundy',
        width: 2000,
        height: 2000,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-basic-sweatshirt-deep-black-734-b8e4-2000x.png',
        altText: 'Crescent Peak Sweatshirt Deep Black',
        width: 2000,
        height: 2000,
      },
    ],
    options: [
      {
        name: 'Kleur',
        values: [
          'Arctic White',
          'Burgundy',
          'Bottle Green',
          'Heather Grey',
          'Deep Black',
          'Airforce Blue',
          'Steel Grey',
          'Royal Blue',
        ],
      },
      {
        name: 'Maat',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/10',
        title: 'Arctic White / M',
        price: { amount: '31.44', currencyCode: 'EUR' },
        compareAtPrice: { amount: '36.99', currencyCode: 'EUR' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Kleur', value: 'Arctic White' },
          { name: 'Maat', value: 'M' },
        ],
      },
    ],
    productType: 'Sweatshirts',
    vendor: 'Arvenzo',
    tags: ['sweatshirt', 'mountain', 'comfort'],
  },
  {
    id: 'gid://shopify/Product/10578832589145',
    title: 'Crescent Peak Mug',
    handle: 'crescent-peak-mug',
    description:
      'Hoogglans witte keramische mok met fotodruk van de hoogste kwaliteit. Inhoud ~330ml. Vaatwasser- en magnetronbestendig.',
    descriptionHtml:
      '<p>Hoogglans witte keramische mok met <strong>fotodruk van de hoogste kwaliteit</strong>.</p><ul><li>Inhoud: ~330ml</li><li>Afmetingen: 96mm hoog × 80mm diameter</li><li>C-vormig handvat</li><li>Vaatwasserbestendig</li><li>Magnetronbestendig</li></ul>',
    price: 14.44,
    compareAtPrice: 16.99,
    currency: 'EUR',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0971/8543/1895/files/front-tasse-glossy-ffffff-1116x_d6aba563-be16-4735-8e7c-72fbccd35d42.png',
        altText: 'Crescent Peak Mug wit glanzend',
        width: 1116,
        height: 1116,
      },
    ],
    options: [
      {
        name: 'Kleur',
        values: ['White glossy'],
      },
      {
        name: 'Maat',
        values: ['330ml'],
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/20',
        title: 'White glossy / 330ml',
        price: { amount: '14.44', currencyCode: 'EUR' },
        compareAtPrice: { amount: '16.99', currencyCode: 'EUR' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Kleur', value: 'White glossy' },
          { name: 'Maat', value: '330ml' },
        ],
      },
    ],
    productType: 'Drinkware',
    vendor: 'Arvenzo',
    tags: ['mug', 'drinkware', 'gift'],
  },
];
