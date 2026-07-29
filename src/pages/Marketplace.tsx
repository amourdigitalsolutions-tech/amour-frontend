import { useState, useEffect } from 'react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import SidebarFilters from '../components/marketplace/SidebarFilters';
import TruckCard from '../components/marketplace/TruckCard';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { translations } from '../constants/translations';
import { getVehicles } from '../services/marketplace';

export default function Marketplace() {
  const [lang, setLang] = useState<'en'|'am'|'ti'>(() => (localStorage.getItem('lang') as any) || 'en');
  const [trucks, setTrucks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter state
  const [filters, setFilters] = useState({
    make: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: ''
  });

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Clean up empty filters
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== '')
    );
    
    getVehicles(activeFilters)
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        const formatted = results.map((v: any) => ({
          id: v.id,
          title: `${v.year} ${v.make} ${v.model}`,
          image: v.images && v.images.length > 0 ? v.images[0].image : 'https://placehold.co/600x400/png?text=No+Image',
          mileage: `${v.mileage || 0} mi`,
          fuelType: v.fuel_type || 'Diesel',
          price: `$${parseFloat(v.price || 0).toLocaleString()}`
        }));
        setTrucks(formatted);
      })
      .catch(err => {
        console.error(err);
        setError(t['market-fetch-error']);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`min-h-screen bg-surface text-slate-800 flex flex-col ${lang === 'en' ? 'font-inter' : 'font-noto-sans-ethiopic'}`}>
      <MarketplaceHeader lang={lang} setLang={setLang} t={t} />
      
      <main className="flex flex-1 overflow-hidden">
        <SidebarFilters t={t} filters={filters} onChange={handleFilterChange} />
        
        <section className="flex-1 p-6 overflow-y-auto">
          {/* Grid Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-slate-600 font-medium">{t['market-showing']}</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500">{t['market-sort']}</span>
              <div className="relative">
                <select className="appearance-none border border-slate-200 rounded-lg text-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary bg-white cursor-pointer outline-none">
                  <option>{t['market-sort-newest']}</option>
                  <option>{t['market-sort-high']}</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Marketplace Grid */}
          {loading ? (
            <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
              <p>{error}</p>
            </div>
          ) : trucks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <p>{t['market-no-results']}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
              {trucks.map((truck) => (
                <TruckCard 
                  key={truck.id}
                  id={truck.id}
                  title={truck.title}
                  image={truck.image}
                  mileage={truck.mileage}
                  fuelType={truck.fuelType}
                  price={truck.price}
                  t={t}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
