import { Store, PlusCircle, DollarSign, ArrowUpRight, CheckCircle2, Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TruckSellerDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">
            <Store className="w-3.5 h-3.5" /> Truck Seller & Dealership Portal
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Marketplace Inventory & Sales Leads</h1>
          <p className="text-slate-300 text-sm max-w-xl">
            Manage your commercial truck listings, review buyer inquiries, and calculate lease-to-own estimates.
          </p>
        </div>
        <div className="relative z-10 flex gap-3">
          <Link 
            to="/dashboard/profile" 
            className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-white/20 transition-all border border-white/20"
          >
            Dealer Profile
          </Link>
          <Link 
            to="/marketplace" 
            className="bg-white text-primary font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Go to Live Marketplace
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Seller KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Active Inventory</span>
            <Store className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-slate-900">8 Vehicles Listed</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> All Verified & VIN Checked
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Buyer Inquiries</span>
            <MessageSquare className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">14 Leads</p>
          <span className="text-xs text-indigo-600 font-medium">3 Pending Financing Review</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Views (30 Days)</span>
            <Eye className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">2,480 Views</p>
          <span className="text-xs text-emerald-600 font-medium">+24% Impression Rate</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Sales Volume</span>
            <DollarSign className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">$420,000.00</p>
          <span className="text-xs text-slate-500">3 Vehicles Sold / Leased</span>
        </div>
      </div>

      {/* Seller Inventory Management Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Listed Vehicles & Lease Status</h2>
            <p className="text-xs text-slate-500">Manage your active trucks visible to buyers on the marketplace.</p>
          </div>
          <Link
            to="/marketplace"
            className="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            Add New Listing
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Vehicle Details</th>
                <th className="p-3">Price</th>
                <th className="p-3">Mileage</th>
                <th className="p-3">Lease Option</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3 font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-[10px]">
                    TRK-01
                  </div>
                  <div>
                    <span>2023 Peterbilt 579</span>
                    <span className="block text-[11px] text-slate-400 font-normal">PACCAR MX-13 • 455 HP</span>
                  </div>
                </td>
                <td className="p-3 font-bold text-slate-900">$145,000</td>
                <td className="p-3 text-slate-600">150,000 mi</td>
                <td className="p-3 text-emerald-600 font-semibold">Available ($2,150/mo)</td>
                <td className="p-3">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span>
                </td>
                <td className="p-3">
                  <button className="text-primary font-bold hover:underline">Edit Listing</button>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-[10px]">
                    TRK-02
                  </div>
                  <div>
                    <span>2023 Kenworth KRC</span>
                    <span className="block text-[11px] text-slate-400 font-normal">Cummins X15 • 500 HP</span>
                  </div>
                </td>
                <td className="p-3 font-bold text-slate-900">$145,000</td>
                <td className="p-3 text-slate-600">150,000 mi</td>
                <td className="p-3 text-emerald-600 font-semibold">Available ($2,150/mo)</td>
                <td className="p-3">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span>
                </td>
                <td className="p-3">
                  <button className="text-primary font-bold hover:underline">Edit Listing</button>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-[10px]">
                    TRK-03
                  </div>
                  <div>
                    <span>2023 International NFT</span>
                    <span className="block text-[11px] text-slate-400 font-normal">A26 Engine • 450 HP</span>
                  </div>
                </td>
                <td className="p-3 font-bold text-slate-900">$145,000</td>
                <td className="p-3 text-slate-600">130,000 mi</td>
                <td className="p-3 text-emerald-600 font-semibold">Available ($2,150/mo)</td>
                <td className="p-3">
                  <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold">In Negotiation</span>
                </td>
                <td className="p-3">
                  <button className="text-primary font-bold hover:underline">Edit Listing</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
