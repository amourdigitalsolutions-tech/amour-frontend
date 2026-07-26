import { Users, FileText, Activity, AlertCircle, CheckCircle2, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden border border-rose-900/30">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 text-xs px-3 py-1 rounded-full border border-rose-500/30">
            <Lock className="w-3.5 h-3.5" /> Platform Governance & Zero-Trust Core
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">System Administrator Console</h1>
          <p className="text-slate-300 text-sm max-w-xl">
            Monitor ZTA security logs, review user verification requests, and enforce federal logistics audit trails.
          </p>
        </div>
        <div className="relative z-10 flex gap-3">
          <Link 
            to="/dashboard/profile" 
            className="bg-white/10 text-white font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-white/20 transition-all border border-white/20"
          >
            Admin Credentials
          </Link>
        </div>
      </div>

      {/* Admin Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Registered Users</span>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-slate-900">1,248 Accounts</p>
          <span className="text-xs text-emerald-600 font-semibold">+42 New This Week</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Pending Approvals</span>
            <AlertCircle className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">5 Approvals</p>
          <span className="text-xs text-amber-600 font-medium">USDOT & CDL Verification</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Audit Log Status</span>
            <FileText className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">100% Immutable</p>
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Argon2 & JWT Validated
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">API Health</span>
            <Server className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900">99.98% Uptime</p>
          <span className="text-xs text-slate-500">Django + PostgreSQL</span>
        </div>
      </div>

      {/* User Management & Audit Log Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Account Governance Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Platform Accounts Overview</h2>
              <p className="text-xs text-slate-500">Role-Based Access Control (RBAC) user list.</p>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              ZTA Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">User Identifier</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Language</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold text-slate-800">+1 (555) 019-2834</td>
                  <td className="p-3 text-slate-600 font-semibold">Fleet Owner</td>
                  <td className="p-3 uppercase text-slate-500 font-mono">AM</td>
                  <td className="p-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span></td>
                  <td className="p-3"><button className="text-primary font-bold hover:underline">Manage</button></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">+1 (555) 048-9102</td>
                  <td className="p-3 text-slate-600 font-semibold">Driver</td>
                  <td className="p-3 uppercase text-slate-500 font-mono">EN</td>
                  <td className="p-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Active</span></td>
                  <td className="p-3"><button className="text-primary font-bold hover:underline">Manage</button></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">+1 (555) 077-4491</td>
                  <td className="p-3 text-slate-600 font-semibold">Truck Seller</td>
                  <td className="p-3 uppercase text-slate-500 font-mono">TI</td>
                  <td className="p-3"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold">Pending VIN</span></td>
                  <td className="p-3"><button className="text-primary font-bold hover:underline">Manage</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit Log Feed */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-rose-600" /> Security Audit Log
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span className="font-mono font-bold text-slate-600">JWT Token Refresh</span>
                <span>2 mins ago</span>
              </div>
              <p className="text-slate-700 font-medium">User +1 (555) 019-2834 requested token renewal.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span className="font-mono font-bold text-emerald-600">Lease Application Submitted</span>
                <span>14 mins ago</span>
              </div>
              <p className="text-slate-700 font-medium">Driver #4810 applied for Vehicle VIN #1XP4D49.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span className="font-mono font-bold text-indigo-600">Vehicle Created</span>
                <span>1 hour ago</span>
              </div>
              <p className="text-slate-700 font-medium">Seller added 2023 Kenworth KRC to Marketplace.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
