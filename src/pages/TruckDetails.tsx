import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Fuel, Calculator, Truck, Calendar, Hash, Settings, ShieldCheck } from 'lucide-react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';

export default function TruckDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data mapping to our Django backend schema
  const truck = {
    id,
    make: 'Peterbilt',
    model: '579',
    year: 2023,
    vin: '1XP4D49X0NDXXXXXX',
    vehicle_type: 'Semi-Truck (Tractor)',
    price: '$145,000',
    mileage: '150,000',
    is_available: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ48pIuHicP_Slqw87Cmrw8OSXijTrVhkhcTAkccXiQZSpC6p06ejPI97aMS7doCrHnLhSeYFiwK8SrBfs_kNctOO5WqbEFPddTN0OI57cZiZX6O11qIq5zytgmgevXG6J41XxWctvmKxGluvMrVN89SVKFpK3DYmCly-sEHIcH2XX4GEKTuT0mIUh0LezIHHCNDe7yWjgMo5rchSmqkQYnoVNd0nkXaG4jci_oOUMhptzn65MVI0QcGBgWc5xq9rg3zYW6baPVk17',
    specs: {
      engine: 'Cummins ISX15',
      transmission: 'Eaton 13-Speed Manual',
      sleeper_size: '72" Ultracab',
      fuelType: 'Diesel',
      axle_config: '6x4',
      suspension: 'Air Ride'
    }
  };

  return (
    <div className="min-h-screen bg-surface font-inter text-slate-800 flex flex-col">
      <MarketplaceHeader />
      
      <main className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-8 flex-1">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
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
                  Available Now
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-6">Vehicle Specifications</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Year
                  </span>
                  <p className="font-semibold text-slate-700">{truck.year}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Truck className="w-4 h-4" /> Make & Model
                  </span>
                  <p className="font-semibold text-slate-700">{truck.make} {truck.model}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Hash className="w-4 h-4" /> VIN
                  </span>
                  <p className="font-semibold text-slate-700 font-mono text-sm">{truck.vin}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> Mileage
                  </span>
                  <p className="font-semibold text-slate-700">{truck.mileage} mi</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Fuel className="w-4 h-4" /> Fuel Type
                  </span>
                  <p className="font-semibold text-slate-700">{truck.specs.fuelType}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                    <Settings className="w-4 h-4" /> Engine
                  </span>
                  <p className="font-semibold text-slate-700">{truck.specs.engine}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
                 <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400">Transmission</span>
                  <p className="font-semibold text-slate-700">{truck.specs.transmission}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-medium text-slate-400">Sleeper</span>
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
                  Apply for Lease
                </button>
                <button className="w-full border-2 border-primary text-primary py-3.5 rounded-xl font-bold text-[15px] hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculate Estimate
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-400">
                  Estimated monthly payments from <span className="font-bold text-primary">$2,450/mo</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  *Based on 20% down, 48 months, 8.5% APR for highly qualified buyers. Excludes taxes and registration fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
