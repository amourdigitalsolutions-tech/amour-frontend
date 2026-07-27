import { Truck, ShieldCheck, DollarSign, AlertCircle, ArrowUpRight, CheckCircle2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DriverDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> CDL-A Verified Driver
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Driver Operational Portal</h1>
          <p className="text-slate-300 text-sm max-w-xl">
            Manage your active lease estimate, track compliance requirements, and access community load opportunities.
          </p>
        </div>
        <Link 
          to="/marketplace" 
          className="relative z-10 bg-white text-primary font-bold px-5 py-3 rounded-xl text-xs hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
        >
          Browse Marketplace Trucks
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Driver Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Active Lease Unit</span>
            <Truck className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xl font-bold text-slate-900">2023 Peterbilt 579</p>
          <div className="flex items-center text-xs text-emerald-600 font-semibold gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Lease Approved ($2,150/mo)
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">CDL & Medical Card</span>
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-xl font-bold text-slate-900">Valid (Class A)</p>
          <p className="text-xs text-slate-500">Expires: Oct 2027 (DOT Compliant)</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Est. Monthly Earnings</span>
            <DollarSign className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-xl font-bold text-slate-900">$8,450.00</p>
          <span className="text-xs text-slate-500">+12% vs last month</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">MVR & Safety Score</span>
            <FileText className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-xl font-bold text-slate-900">Clean Record</p>
          <span className="text-xs text-amber-600 font-medium">0 Violations / 3 Yrs</span>
        </div>
      </div>

      {/* Main Grid: Active Equipment Details & Quick Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Truck Lease Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" /> Active Lease Contract Status
            </h2>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
              In-Service
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ48pIuHicP_Slqw87Cmrw8OSXijTrVhkhcTAkccXiQZSpC6p06ejPI97aMS7doCrHnLhSeYFiwK8SrBfs_kNctOO5WqbEFPddTN0OI57cZiZX6O11qIq5zytgmgevXG6J41XxWctvmKxGluvMrVN89SVKFpK3DYmCly-sEHIcH2XX4GEKTuT0mIUh0LezIHHCNDe7yWjgMo5rchSmqkQYnoVNd0nkXaG4jci_oOUMhptzn65MVI0QcGBgWc5xq9rg3zYW6baPVk17" 
              alt="Peterbilt 579" 
              className="w-full sm:w-48 h-32 object-cover rounded-xl border border-slate-200"
            />
            <div className="space-y-2 flex-1">
              <h3 className="text-lg font-bold text-slate-900">2023 Peterbilt 579 Ultraloft</h3>
              <p className="text-xs text-slate-500">VIN: 1XP4D49X5KD294821 • Engine: PACCAR MX-13 455HP</p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Lease Term:</span>
                  <span className="font-semibold text-slate-700">36 Months (14 Left)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Monthly Rate:</span>
                  <span className="font-semibold text-slate-700">$2,150.00 / Mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
            <Link 
              to="/dashboard/profile" 
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              Update Driver CDL Info
            </Link>
            <Link 
              to="/marketplace" 
              className="px-4 py-2 bg-primary text-white hover:bg-primary-container rounded-lg text-xs font-semibold transition-colors"
            >
              View More Trucks
            </Link>
          </div>
        </div>

        {/* Compliance & Driver Wallet Status */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Driver Compliance
          </h2>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">DOT Physical Card</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Valid
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Drug & Alcohol Clearinghouse</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">ELD Logbook Sync</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Connected
              </span>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Annual Inspection Due Soon
            </p>
            <p className="text-[11px] leading-relaxed text-amber-700">
              Your vehicle DOT inspection expires in 28 days. Schedule an inspection at an authorized service hub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
