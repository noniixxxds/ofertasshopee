
import React from 'react';
import { Filters, ScreenSize, OS, PriceRange } from '../types';

interface FilterSectionProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, setFilters }) => {
  const toggleFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? null : value
    }));
  };

  const sizes: { label: string; value: ScreenSize }[] = [
    { label: '32"', value: '32' },
    { label: '43"', value: '43' },
    { label: '50"', value: '50' },
    { label: '55"+', value: '55+' },
  ];

  const priceRanges: { label: string; value: PriceRange }[] = [
    { label: 'Até R$ 1.000', value: 'under1000' },
    { label: 'R$ 1k a 1.5k', value: '1000to1500' },
    { label: 'R$ 1.5k a 2.5k', value: '1500to2500' },
    { label: 'Acima de R$ 2.5k', value: 'above2500' },
  ];

  const systems: OS[] = ['Android TV', 'Google TV', 'Roku TV'];

  const highlights: { label: string; value: Filters['highlight'] }[] = [
    { label: 'Mais vendidas', value: 'bestSeller' },
    { label: 'Custo-benefício', value: 'bestValue' },
    { label: 'Melhores avaliadas', value: 'topRated' },
  ];

  return (
    <div className="bg-white border-y border-gray-100 shadow-sm sticky top-0 z-40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        {/* Sizes */}
        <div className="flex items-center space-x-2 whitespace-nowrap scrollbar-hide overflow-x-auto pb-1">
          <span className="text-xs font-bold text-gray-500 uppercase min-w-[60px]">Tela:</span>
          {sizes.map(s => (
            <button
              key={s.value}
              onClick={() => toggleFilter('size', s.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filters.size === s.value
                  ? 'bg-shopee-orange text-white border-shopee-orange shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Price Ranges */}
        <div className="flex items-center space-x-2 whitespace-nowrap scrollbar-hide overflow-x-auto pb-1">
          <span className="text-xs font-bold text-gray-500 uppercase min-w-[60px]">Preço:</span>
          {priceRanges.map(p => (
            <button
              key={p.value}
              onClick={() => toggleFilter('price', p.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filters.price === p.value
                  ? 'bg-shopee-orange text-white border-shopee-orange shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Highlights & Systems */}
        <div className="flex items-center space-x-2 whitespace-nowrap scrollbar-hide overflow-x-auto pb-1">
          <span className="text-xs font-bold text-gray-500 uppercase min-w-[60px]">Extras:</span>
          {highlights.map(h => (
            <button
              key={h.value!}
              onClick={() => toggleFilter('highlight', h.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filters.highlight === h.value
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {h.label}
            </button>
          ))}
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          {systems.map(sys => (
            <button
              key={sys}
              onClick={() => toggleFilter('os', sys)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filters.os === sys
                  ? 'bg-gray-800 text-white border-gray-800 shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {sys}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
