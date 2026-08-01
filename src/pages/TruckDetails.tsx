import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Fuel, Calculator, Truck, Calendar, Hash, Settings, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import { useState, useEffect } from 'react';
import { translations } from '../constants/translations';
import { getVehicleDetails } from '../services/marketplace';

export default function TruckDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lang, setLang] = useState<'en'|'am'|'ti'>(() => (localStorage.getItem('lang') as any) || 'en');
  const t = translations[lang];

  const [truck, setTruck] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    if (!id) {
      setError('Invalid truck ID');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getVehicleDetails(id)
      .then(data => {
        const formatted = {
          id: data.id || id,
          make: data.make || 'Unknown',
          model: data.model || 'Model',
          year: data.year || new Date().getFullYear(),
          vin: data.vin || 'N/A',
          vehicle_type: data.vehicle_type || 'Semi-Truck (Tractor)',
          price: data.price ? `$${parseFloat(String(data.price)).toLocaleString()}` : '$0',
          mileage: data.mileage ? Number(data.mileage).toLocaleString() : '0',
          is_available: data.is_available !== undefined ? data.is_available : true,
          image: data.images && data.images.length > 0 ? data.images[0].image : 'https://placehold.co/800x500/png?text=No+Image+Available',
          specs: {
            engine: data.engine || data.specs?.engine || 'Standard Diesel Engine',
            transmission: data.transmission || data.specs?.transmission || 'Manual / Auto',
            sleeper_size: data.sleeper_size || data.specs?.sleeper_size || 'N/A',
            fuelType: data.fuel_type || data.specs?.fuelType || 'Diesel',
            axle_config: data.axle_config || data.specs?.axle_config || '6x4',
            suspension: data.suspension || data.specs?.suspension || 'Air Ride'
          }
        };
        setTruck(formatted);
      })
      .catch(err => {
        console.error(err);
        setError(t['market-fetch-error'] || 'Could not load vehicle details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, t]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-surface text-slate-800 flex flex-col ${lang === 'en' ? 'font-inter' : 'font-noto-sans-ethiopic'}`}>
        <MarketplaceHeader lang={lang} setLang={setLang} t={t} />
        <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm font-medium">Loading vehicle details...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error || !truck) {
    return (
      <div className={`min-h-screen bg-surface text-slate-800 flex flex-col ${lang === 'en' ? 'font-inter' : 'font-noto-sans-ethiopic'}`}>
        <MarketplaceHeader lang={lang} setLang={setLang} t={t} />
        <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-red-500 max-w-md text-center">
            <AlertCircle className="w-12 h-12" />
            <p className="font-semibold text-lg">{error || 'Vehicle not found'}</p>
            <button 
              onClick={() => navigate('/')} 
              className="mt-4 bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            >
              {t['market-back'] || 'Back to Marketplace'}
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-surface text-slate-800 flex flex-col ${lang === 'en' ? 'font-inter' : 'font-noto-sans-ethiopic'}`}>
      <MarketplaceHeader lang={lang} setLang={setLang} t={t} />
      
      <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-8 flex-1">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {t['market-back']}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column (Images & Details) */}
          <div className="lg:w-2/3 space-y-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-outline-variant bg-white">
              <img 
                src={truck.image} 
                alt={`${truck.year} ${truck.make} ${truck.model}`}
                className="w-full h-full object-cover"
              />
              {truck.is_available && (
                <div className="absolute top-4 left-4 bg-green-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4" />
                  {t['market-avail']}
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-6">{t['market-specs']}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {t['market-year']}
                  </span>
                  <p className="font-semibold text-slate-700">{truck.year}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Truck className="w-4 h-4" /> {t['market-make-model']}
                  </span>
                  <p className="font-semibold text-slate-700">{truck.make} {truck.model}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Hash className="w-4 h-4" /> {t['market-vin']}
                  </span>
                  <p className="font-semibold text-slate-700 font-mono text-sm">{truck.vin}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> {t['market-mileage']}
                  </span>
                  <p className="font-semibold text-slate-700">{truck.mileage} mi</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Fuel className="w-4 h-4" /> {t['market-fuel']}
                  </span>
                  <p className="font-semibold text-slate-700">{truck.specs.fuelType}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Settings className="w-4 h-4" /> {t['market-engine']}
                  </span>
                  <p className="font-semibold text-slate-700">{truck.specs.engine}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
                 <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400">{t['market-trans']}</span>
                  <p className="font-semibold text-slate-700">{truck.specs.transmission}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400">{t['market-sleeper']}</span>
                  <p className="font-semibold text-slate-700">{truck.specs.sleeper_size}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Pricing & CTA) */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant sticky top-[88px]">
              <h1 className="text-3xl font-black text-slate-800 mb-2">{truck.year} {truck.make} {truck.model}</h1>
              <p className="text-slate-500 font-medium mb-6">{truck.vehicle_type}</p>
              
              <div className="text-4xl font-bold text-primary mb-8 pb-8 border-b border-slate-100">
                {truck.price}
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-[15px] hover:bg-primary-container transition-colors shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  {t['market-apply']}
                </button>
                <button className="w-full border-2 border-primary text-primary py-3.5 rounded-xl font-bold text-[15px] hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center gap-2">
                  <Calculator className="w-5 h-5" />
                  {t['market-calc']}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-400">
                  {t['market-est-monthly']} <span className="font-bold text-primary">$2,450/mo</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {t['market-disclaimer']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
