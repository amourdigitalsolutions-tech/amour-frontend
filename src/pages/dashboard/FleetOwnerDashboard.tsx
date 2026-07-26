import { Truck, Users, FileText, TrendingUp, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FleetOwnerDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/30">
            <Truck className="w-3.5 h-3.5" /> Fleet Owner Management Portal
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Fleet Operations & Compliance</h1>
          <p className="text-slate-300 text-sm max-w-xl">
            Monitor USDOT/IFTA compliance, manage driver applications, and scale your power units.
          </p>
        </div>
        <div className="relative z-10 flex gap-3">
          <Link 
            to="/dashboard/profile" 
            className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-white/20 transition-all border border-white/20"
          >
            Fleet Profile Info
          </Link>
          <a 
            href="http://marketplace.localhost:5173" 
            className="bg-white text-primary font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Acquire New Trucks
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fleet KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Power Units</span>
            <Truck className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-slate-900">12 Trucks</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 10 Active / 2 Maintenance
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Assigned Drivers</span>
            <Users className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">10 Drivers</p>
          <span className="text-xs text-indigo-600 font-medium">4 New Lease Inquiries</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Monthly Revenue</span>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">$48,200.00</p>
          <span className="text-xs text-emerald-600 font-medium">+18.5% Growth</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">USDOT Audit Score</span>
            <ShieldAlert className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">98% Compliant</p>
          <span className="text-xs text-amber-600 font-medium">IFTA Q3 Due Soon</span>
        </div>
      </div>

      {/* Driver Lease Applicants Table & Fleet List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Driver Applicants Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Driver Lease Applicants</h2>
              <p className="text-xs text-slate-500">Vetted Ethiopian & Eritrean drivers applying for fleet leases.</p>
            </div>
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
              4 Applicants
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Driver Name</th>
                  <th className="p-3">CDL Class</th>
                  <th className="p-3">Experience</th>
                  <th className="p-3">Requested Vehicle</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold text-slate-800">Dawit Yilma</td>
                  <td className="p-3 text-slate-600">Class A (HazMat)</td>
                  <td className="p-3 text-slate-600">6 Years</td>
                  <td className="p-3 text-slate-600">2023 Peterbilt 579</td>
                  <td className="p-3">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1 rounded text-[11px]">
                      Approve Lease
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">Mulugeta Tadesse</td>
                  <td className="p-3 text-slate-600">Class A (Tanker)</td>
                  <td className="p-3 text-slate-600">4 Years</td>
                  <td className="p-3 text-slate-600">2023 Kenworth W900</td>
                  <td className="p-3">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1 rounded text-[11px]">
                      Approve Lease
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">Biniam Tekle</td>
                  <td className="p-3 text-slate-600">Class A</td>
                  <td className="p-3 text-slate-600">3 Years</td>
                  <td className="p-3 text-slate-600">2022 Freightliner Cascadia</td>
                  <td className="p-3">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1 rounded text-[11px]">
                      Approve Lease
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Compliance Tasks */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" /> Compliance Filing Checklist
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-700">Form 2290 Heavy Highway Tax</span>
              <span className="text-emerald-600 font-bold">Filed</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-700">IFTA Fuel Tax Filing (Q3)</span>
              <span className="text-amber-600 font-bold">Pending Review</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-700">BOC-3 Process Agent</span>
              <span className="text-emerald-600 font-bold">Active</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-700">UCR Registration 2026</span>
              <span className="text-emerald-600 font-bold">Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
