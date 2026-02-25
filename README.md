# Arvenzo Shop

Professionele Shopify Storefront webshop voor [Arvenzo](https://www.arvenzo.be) — gebouwd met Next.js 14, Tailwind CSS en de Shopify Storefront API.

## ✨ Features

- **Next.js 14 App Router** — server components, streaming & revalidation
- **Shopify Storefront API** — volledige GraphQL integratie
- **Winkelwagen** — slide-in drawer, real-time updates, localStorage persistentie
- **Producten** — gallery, kleur- & maatselectie, quick add
- **Responsive** — mobile-first design
- **SEO** — metadata, Open Graph, structured data
- **Belgisch** — Dutch language, EUR pricing, Bancontact support
- **Mock data** — werkt zonder Shopify-configuratie voor preview

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **API:** Shopify Storefront API (GraphQL)

## 🚀 Snel starten

### 1. Installeer dependencies

```bash
npm install
```

### 2. Configureer Shopify

Kopieer `.env.example` naar `.env.local`:

```bash
cp .env.example .env.local
```

Vul je Shopify-gegevens in:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=jouw-winkel.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=jouw_token
```

**Waar vind je deze?**
Shopify Admin → Settings → Apps and sales channels → Develop apps → Create an app → Configure Storefront API scopes

Benodigde scopes:
- `unauthenticated_read_product_listings`
- `unauthenticated_write_checkouts`
- `unauthenticated_read_checkouts`

### 3. Start de dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

> **Geen Shopify?** De winkel werkt ook zonder configuratie via ingebouwde mock data.

## 📁 Projectstructuur

```
arvenzo-shop/
├── app/
│   ├── api/cart/        # Cart API routes
│   ├── cart/            # Winkelwagen pagina
│   ├── products/        # Producten overzicht + detail
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigatie + cart icoon
│   ├── Footer.tsx       # Footer
│   ├── CartDrawer.tsx   # Slide-in winkelwagen
│   ├── ProductCard.tsx  # Product kaart
│   ├── ProductGallery.tsx
│   ├── VariantSelector.tsx
│   ├── AddToCart.tsx
│   ├── Hero.tsx
│   ├── FeaturedProducts.tsx
│   ├── BrandStory.tsx
│   ├── TrustBar.tsx
│   ├── Reviews.tsx
│   └── Newsletter.tsx
├── context/
│   └── CartContext.tsx  # Cart state management
├── lib/
│   ├── shopify.ts       # API client
│   ├── queries.ts       # GraphQL queries
│   ├── types.ts         # TypeScript types
│   └── mock-data.ts     # Fallback data
└── .env.example
```

## 🎨 Design

Brand kleuren:
- **Bruin** `#5D2B09` — primaire kleur
- **Crème** `#F7F1ED` — achtergrond
- **Oranje** `#D78650` — accent
- **Donker** `#1A0A02` — tekst

Fonts: **Barlow** (headings) + **Inter** (body)

## 🌐 Deployen

### Vercel (aanbevolen)

```bash
npm i -g vercel
vercel
```

Voeg de env variabelen toe in het Vercel dashboard.

### Andere platforms

```bash
npm run build
npm start
```

## 📄 Licentie

Privé project voor Arvenzo. Alle rechten voorbehouden.
