import { Filter, ChevronDown } from 'lucide-react';

interface SidebarFiltersProps {
  t: any;
}

export default function SidebarFilters({ t }: SidebarFiltersProps) {
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
          <select className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary p-2 border">
            <option>{t['market-all-makes']}</option>
            <option>Peterbilt</option>
            <option>Kenworth</option>
            <option>International</option>
          </select>
        </div>

        {/* Model */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-model']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <select className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary p-2 border">
            <option>{t['market-model']}</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-price-range']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <div className="flex gap-2">
            <input className="w-1/2 border border-slate-200 rounded-lg text-xs p-2 focus:ring-1 focus:ring-primary focus:outline-none" placeholder={t['market-min']} type="text" />
            <input className="w-1/2 border border-slate-200 rounded-lg text-xs p-2 focus:ring-1 focus:ring-primary focus:outline-none" placeholder={t['market-max']} type="text" />
          </div>
          <div className="relative h-1 bg-slate-200 rounded-full mt-4">
            <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
            <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
            <div className="absolute right-1/4 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-medium pt-1">
            <span>$10k</span>
            <span>$500k+</span>
          </div>
        </div>

        {/* Year */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-year']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <div className="flex gap-2">
            <select className="w-1/2 border-slate-200 rounded-lg text-xs p-2 border focus:ring-primary focus:border-primary">
              <option>2021</option>
            </select>
            <select className="w-1/2 border-slate-200 rounded-lg text-xs p-2 border focus:ring-primary focus:border-primary">
              <option>2023</option>
            </select>
          </div>
        </div>

        {/* Mileage */}
        <div className="space-y-3">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-mileage']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <span>0</span>
            <span>500k mi</span>
            <span>1M+</span>
          </div>
        </div>

        {/* Engine HP */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-engine-hp']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
          <select className="w-full border-slate-200 rounded-lg text-sm p-2 border focus:ring-primary focus:border-primary">
            <option>{t['market-all']}</option>
          </select>
        </div>

        {/* Axle Config */}
        <div className="space-y-2">
          <label className="flex items-center justify-between font-semibold text-sm text-slate-800">
            {t['market-axle']} <ChevronDown className="w-4 h-4 text-slate-400" />
          </label>
        </div>

      </div>
    </aside>
  );
}
