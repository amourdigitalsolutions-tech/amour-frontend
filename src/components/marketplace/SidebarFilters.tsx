import { Filter, ChevronDown } from 'lucide-react';

interface SidebarFiltersProps {
  t: any;
  filters: {
    make: string;
    minPrice: string;
    maxPrice: string;
    minYear: string;
    maxYear: string;
  };
  onChange: (key: string, value: string) => void;
}

export default function SidebarFilters({ t, filters, onChange }: SidebarFiltersProps) {
  return (
    <aside className="w-72 border-r border-slate-200 bg-white p-6 shrink-0 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 hidden lg:block">
      <div className="flex items-center gap-2 mb-6 text-primary font-bold text-lg">
        <Filter className="w-5 h-5" />
        <span>{t['market-filters']}</span>
      </div>

      {/* Filter Sections */}
      <div className="space-y-6">
        
        {/* Make */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-make']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <select 
            value={filters.make} 
            onChange={(e) => onChange('make', e.target.value)}
            className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary p-2 border"
          >
            <option value="">{t['market-all-makes']}</option>
            <option value="Peterbilt">Peterbilt</option>
            <option value="Kenworth">Kenworth</option>
            <option value="International">International</option>
            <option value="Freightliner">Freightliner</option>
            <option value="Volvo">Volvo</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-price-range']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <div className="flex gap-2">
            <input 
              value={filters.minPrice}
              onChange={(e) => onChange('minPrice', e.target.value)}
              className="w-1/2 border border-slate-200 rounded-lg text-xs p-2 focus:ring-1 focus:ring-primary focus:outline-none" 
              placeholder={t['market-min']} 
              type="number" 
            />
            <input 
              value={filters.maxPrice}
              onChange={(e) => onChange('maxPrice', e.target.value)}
              className="w-1/2 border border-slate-200 rounded-lg text-xs p-2 focus:ring-1 focus:ring-primary focus:outline-none" 
              placeholder={t['market-max']} 
              type="number" 
            />
          </div>
        </div>

        {/* Year */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-year']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <div className="flex gap-2">
            <input 
              value={filters.minYear}
              onChange={(e) => onChange('minYear', e.target.value)}
              className="w-1/2 border-slate-200 rounded-lg text-xs p-2 border focus:ring-primary focus:border-primary"
              placeholder={t['market-year-from']}
              type="number"
            />
            <input 
              value={filters.maxYear}
              onChange={(e) => onChange('maxYear', e.target.value)}
              className="w-1/2 border-slate-200 rounded-lg text-xs p-2 border focus:ring-primary focus:border-primary"
              placeholder={t['market-year-to']}
              type="number"
            />
          </div>
        </div>

      </div>
    </aside>
  );
}
