import { Search, ChevronDown, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm font-inter">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center gap-3">
        <img 
          alt="Amour Trucking Hub Logo" 
          className="h-10 w-10 object-contain" 
          src="https://lh3.googleusercontent.com/aida/AP1WRLtHKjQ3AfztPKYiX_Gf1IaAyJ3T25Cz7aU5ZIMSS12_uG7L4_Sk2j7pClL-QiS0W3WZ8PjxT9HrYXw_DkW-OKEMc8HsYmplmxp6qw3zIqsfzDyfDIAx5cI-yfpXCueLYMpMzCBfQCXM8XTZXzbLWW_oPMxGQPMMl0nCAmQlNwsTuZXswG9WMBronOlBESpSHUn6GAkYTba3a3V8xAGqyAATwwmy7OPh1RKn8WD2DyeJ0_iNcpBHLovIiOTN"
        />
        <span className="text-xl font-bold text-primary tracking-tight">Amour Trucking Hub</span>
      </Link>

      {/* Central Search Bar */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </span>
          <input 
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm" 
            placeholder="Global Search" 
            type="text"
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
          <span>EN</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button className="text-slate-500 hover:text-primary relative cursor-pointer">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* User Profile */}
        <button className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden text-slate-500 hover:text-primary transition-colors cursor-pointer">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
