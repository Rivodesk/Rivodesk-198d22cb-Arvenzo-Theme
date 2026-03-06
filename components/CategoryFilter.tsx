'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  types: string[];
  typeLabels: Record<string, string>;
  currentType: string;
  sortParam: string;
  totalCount: number;
  typeCount: Record<string, number>;
}

export default function CategoryFilter({
  types,
  typeLabels,
  currentType,
  sortParam,
  totalCount,
  typeCount,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (type) {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    
    if (!sortParam) {
      params.delete('sort');
    }
    
    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleTypeChange('')}
        className={`px-4 py-2.5 rounded-full border text-sm font-sans font-medium transition-all ${
          !currentType
            ? 'bg-arvenzo-ink text-arvenzo-cream border-arvenzo-ink'
            : 'border-arvenzo-cream-dark text-arvenzo-ink hover:bg-arvenzo-cream/50 hover:border-arvenzo-ink/40'
        }`}
      >
        Alles ({totalCount})
      </button>
      {types.map(type => (
        <button
          key={type}
          onClick={() => handleTypeChange(type)}
          className={`px-4 py-2.5 rounded-full border text-sm font-sans font-medium transition-all whitespace-nowrap ${
            currentType === type
              ? 'bg-arvenzo-ink text-arvenzo-cream border-arvenzo-ink'
              : 'border-arvenzo-cream-dark text-arvenzo-ink hover:bg-arvenzo-cream/50 hover:border-arvenzo-ink/40'
          }`}
        >
          {typeLabels[type] ?? type} ({typeCount[type] || 0})
        </button>
      ))}
    </div>
  );
}
