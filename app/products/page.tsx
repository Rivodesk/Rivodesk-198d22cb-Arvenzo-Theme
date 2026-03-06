import { getAllProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';
import SortSelector from '@/components/SortSelector';
import CategoryFilter from '@/components/CategoryFilter';
import type { Metadata } from 'next';
import type { Product } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Collectie | Arvenzo',
  description: 'Ontdek alle Arvenzo producten: hoodies, sweatshirts, shirts en mugs.',
  alternates: { canonical: 'https://www.arvenzo.be/products' },
};

export const revalidate = 300;

const TYPE_LABELS: Record<string, string> = {
  Hoodies: 'Hoodies',
  Sweatshirts: 'Sweatshirts',
  'Unisex-Shirts': 'Shirts',
  'TrinkgefÃ¤Ãe': 'Mugs',
};

const SORT_OPTIONS = [
  { value: '', label: 'Standaard' },
  { value: 'price-asc', label: 'Prijs: laag → hoog' },
  { value: 'price-desc', label: 'Prijs: hoog → laag' },
  { value: 'name-asc', label: 'Naam A → Z' },
];

function sortProducts(products: Product[], sort: string): Product[] {
  const arr = [...products];
  if (sort === 'price-asc') return arr.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') return arr.sort((a, b) => b.price - a.price);
  if (sort === 'name-asc') return arr.sort((a, b) => a.title.localeCompare(b.title, 'nl'));
  return arr;
}

interface Props {
  searchParams: { type?: string; sort?: string };
}

export default async function ProductsPage({ searchParams }: Props) {
  const allProducts = await getAllProducts();

  const typeFilter = searchParams.type ?? '';
  const sortParam = searchParams.sort ?? '';

  const filtered = typeFilter
    ? allProducts.filter(p => p.productType === typeFilter)
    : allProducts;

  const sorted = sortProducts(filtered, sortParam);
  const types = Array.from(new Set(allProducts.map(p => p.productType).filter(Boolean)));

  // Build type count map
  const typeCount: Record<string, number> = {};
  types.forEach(type => {
    typeCount[type] = allProducts.filter(p => p.productType === type).length;
  });

  return (
    <div className="min-h-screen bg-arvenzo-light">
      {/* Page header */}
      <div className="bg-arvenzo-ink pt-[96px] pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-arvenzo-orange text-[11px] font-sans font-medium uppercase tracking-[0.2em] mb-3">
            {sorted.length} producten
          </p>
          <h1 className="font-heading font-black text-5xl sm:text-6xl text-arvenzo-cream">
            {typeFilter ? (TYPE_LABELS[typeFilter] ?? typeFilter) : 'Alle producten'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        {/* Filter + sort bar */}
        <div className="flex flex-col gap-6 mb-10">
          {/* Category filter tabs */}
          <CategoryFilter
            types={types}
            typeLabels={TYPE_LABELS}
            currentType={typeFilter}
            sortParam={sortParam}
            totalCount={allProducts.length}
            typeCount={typeCount}
          />

          {/* Sort selector */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-[11px] font-sans uppercase tracking-widest text-arvenzo-muted sm:hidden">
              Sortering
            </div>
            <SortSelector
              options={SORT_OPTIONS}
              currentSort={sortParam}
              typeFilter={typeFilter}
            />
          </div>
        </div>

        {/* Product grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sorted.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="font-heading font-semibold text-2xl text-arvenzo-ink">Geen producten gevonden</p>
            <a href="/products" className="mt-4 inline-block text-arvenzo-brown hover:text-arvenzo-orange transition-colors font-sans">
              Bekijk alles →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
