import { MapPin, ShieldCheck, ArrowRight, Languages, Truck } from 'lucide-react';

export interface JobCardProps {
  id: string;
  title: string;
  companyName: string;
  runType: 'DEDICATED' | 'PORT' | 'REGIONAL' | 'OTR' | string;
  originCity: string;
  originState: string;
  destinationRouting: string;
  weeklyPayout: string | number;
  requiresCdlA: boolean;
  requiredLanguages?: string[];
  t: any;
  onApplyClick?: (id: string) => void;
}

export default function JobCard({
  id,
  title,
  companyName,
  runType,
  originCity,
  originState,
  destinationRouting,
  weeklyPayout,
  requiresCdlA,
  requiredLanguages = ['English', 'Amharic'],
  onApplyClick
}: JobCardProps) {

  const getRunTypeStyle = (type: string) => {
    switch (type.toUpperCase()) {
      case 'DEDICATED':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'PORT':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'REGIONAL':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const formattedPayout = typeof weeklyPayout === 'number' 
    ? `$${weeklyPayout.toLocaleString()}` 
    : weeklyPayout.startsWith('$') ? weeklyPayout : `$${parseFloat(weeklyPayout || '0').toLocaleString()}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 space-y-5 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getRunTypeStyle(runType)}`}>
            {runType} Run
          </span>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Carrier
          </span>
        </div>

        {/* Title & Company */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs font-semibold text-slate-500">{companyName || 'Amour Partner Carrier'}</p>
        </div>

        {/* Route Details */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>Origin: {originCity}, {originState}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 pl-6">
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{destinationRouting}</span>
          </div>
        </div>

        {/* Requirements & Languages */}
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          {requiresCdlA && (
            <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-slate-500" /> CDL-A Required
            </span>
          )}
          {requiredLanguages.map(lang => (
            <span key={lang} className="bg-primary/5 text-primary font-medium px-2 py-0.5 rounded-md flex items-center gap-1 border border-primary/10">
              <Languages className="w-3 h-3" /> {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Payout & Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Weekly Pay</span>
          <p className="text-xl font-bold text-slate-900">{formattedPayout} <span className="text-xs font-normal text-slate-500">/ wk</span></p>
        </div>

        <button
          onClick={() => onApplyClick ? onApplyClick(id) : null}
          className="bg-primary hover:bg-primary-container text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
