'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SortOption {
  value: string;
  label: string;
}

interface SortSelectorProps {
  options: SortOption[];
  currentSort: string;
  typeFilter: string;
}

export default function SortSelector({ options, currentSort, typeFilter }: SortSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (sortValue) {
      params.set('sort', sortValue);
    } else {
      params.delete('sort');
    }
    
    if (!typeFilter) {
      params.delete('type');
    }
    
    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-sans uppercase tracking-widest text-arvenzo-muted hidden sm:inline-block">
        Sorteren
      </span>
      <select
        value={currentSort}
        onChange={(e) => handleSort(e.target.value)}
        className="px-4 py-2.5 rounded-full border border-arvenzo-cream-dark bg-arvenzo-cream text-arvenzo-ink text-sm font-sans font-medium cursor-pointer transition-all hover:border-arvenzo-brown focus:outline-none focus:border-arvenzo-brown focus:ring-2 focus:ring-arvenzo-brown/20 appearance-none bg-no-repeat pr-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232e2818' d='M2 4l4 4 4-4z'/%3E%3C/svg%3E")`,
          backgroundPosition: 'right 12px center',
          paddingRight: '32px',
        }}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
