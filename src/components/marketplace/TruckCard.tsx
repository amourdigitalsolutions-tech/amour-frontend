import { CheckCircle2, Heart, TrendingUp, Fuel, Calculator } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface TruckCardProps {
  key?: React.Key;
  id: string;
  image: string;
  title: string;
  mileage: string;
  fuelType: string;
  price: string;
  t: any;
}

export default function TruckCard({ id, image, title, mileage, fuelType, price, t }: TruckCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          alt="Truck Listing" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={image} 
        />
        <div className="absolute top-3 left-3 bg-green-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          {t['market-verified']}
        </div>
        <button className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-xs">
            <span className="block text-slate-400 font-medium mb-1">{t['market-mileage']}</span>
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
              {mileage}
            </div>
          </div>
          <div className="text-xs">
            <span className="block text-slate-400 font-medium mb-1">{t['market-fuel']}</span>
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <Fuel className="w-3.5 h-3.5 text-slate-400" />
              {fuelType}
            </div>
          </div>
        </div>
        
        <div className="text-2xl font-black text-primary pt-1">{price}</div>
        
        <div className="space-y-2 pt-2">
          <Link to={`/truck/${id}`} className="block w-full bg-primary text-white py-2.5 rounded-lg font-bold text-sm hover:bg-primary-container transition-colors cursor-pointer text-center">
            {t['market-view']}
          </Link>
          <button className="w-full border border-primary text-primary py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <Calculator className="w-4 h-4" />
            {t['market-estimate']}
          </button>
        </div>
      </div>
    </div>
  );
}
