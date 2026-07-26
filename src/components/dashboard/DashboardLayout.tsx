import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User as UserIcon, 
  Truck, 
  Briefcase, 
  FileText, 
  Bell, 
  LogOut, 
  Globe, 
  Search, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  Store,
  Users,
  Settings,
  PlusCircle,
  BarChart3,
  type LucideIcon
} from 'lucide-react';
import { getCurrentUser, logout } from '../../services/auth';
import { translations } from '../../constants/translations';
import type { LanguageCode } from '../../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [user, setUser] = useState<any>(null);
  const [activeRole, setActiveRole] = useState<string>('Driver');
  const [lang, setLang] = useState<LanguageCode>(() => (localStorage.getItem('lang') as LanguageCode) || 'en');
  const [langOpen, setLangOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const t = translations[lang] || translations.en;

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    getCurrentUser().then(data => {
      if (data) {
        setUser(data);
        setActiveRole(data.user_role || 'Driver');
      } else {
        // Mock fallback user for immediate dev preview
        const storedRole = localStorage.getItem('demo_role') || 'Driver';
        setUser({
          phone_number: '+1 (555) 019-2834',
          user_role: storedRole,
          full_name: storedRole === 'Fleet Owner' ? 'Tewodros Bekele' : storedRole === 'Truck Seller' ? 'Solomon Logistics Inc.' : storedRole === 'Admin' ? 'System Administrator' : 'Ermias Haile',
          email: 'user@amourtrucking.com'
        });
        setActiveRole(storedRole);
      }
    });
  }, []);

  const handleRoleChange = (newRole: string) => {
    setActiveRole(newRole);
    localStorage.setItem('demo_role', newRole);
    if (user) {
      setUser({ ...user, user_role: newRole });
    }
    setRoleMenuOpen(false);
  };

  const getNavLinks = (): NavItem[] => {
    const common = [
      { name: 'Dashboard Overview', path: '/dashboard', icon: LayoutDashboard },
      { name: 'My Profile', path: '/dashboard/profile', icon: UserIcon },
    ];

    if (activeRole === 'Driver') {
      return [
        ...common,
        { name: 'Lease & Equipment', path: '/dashboard/lease', icon: Truck, badge: 'Active' },
        { name: 'Job Applications', path: '/dashboard/applications', icon: Briefcase },
        { name: 'Compliance & CDL', path: '/dashboard/compliance', icon: ShieldCheck, badge: 'Verified' },
      ];
    } else if (activeRole === 'Fleet Owner') {
      return [
        ...common,
        { name: 'My Fleet Units', path: '/dashboard/fleet', icon: Truck, badge: '12 Units' },
        { name: 'Driver Applicants', path: '/dashboard/driver-requests', icon: Users, badge: '4 New' },
        { name: 'Post New Job', path: '/dashboard/post-job', icon: PlusCircle },
        { name: 'DOT & IFTA Filings', path: '/dashboard/compliance', icon: FileText },
      ];
    } else if (activeRole === 'Truck Seller') {
      return [
        ...common,
        { name: 'My Truck Listings', path: '/dashboard/inventory', icon: Store, badge: '8 Active' },
        { name: 'Add New Vehicle', path: '/dashboard/add-truck', icon: PlusCircle },
        { name: 'Buyer Inquiries', path: '/dashboard/inquiries', icon: Bell, badge: '3 Unread' },
        { name: 'Sales Analytics', path: '/dashboard/analytics', icon: BarChart3 },
      ];
    } else {
      // Admin
      return [
        ...common,
        { name: 'User Management', path: '/dashboard/users', icon: Users },
        { name: 'System Audit Logs', path: '/dashboard/audit', icon: FileText },
        { name: 'Platform Approvals', path: '/dashboard/approvals', icon: ShieldCheck, badge: '5 Pending' },
        { name: 'Global Settings', path: '/dashboard/settings', icon: Settings },
      ];
    }
  };

  const navLinks = getNavLinks();
  const fontClass = lang === 'am' || lang === 'ti' ? 'font-ethiopic' : 'font-inter';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 flex flex-col ${fontClass}`}>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-primary rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="Amour Logo" 
              className="h-9 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBja6gxy2Ajk_yIS4at-r-ox5VBde3waeWnR_HOr9qU6dtNgO3c2fyAU-ojWf7aKBaBiwqtAEtckorkOrxRmKN-ouugoiyea1og42H0dMEbm0kIQ7IAYnpOB-9Ih2nhsZgPG5VXm17jnPzwNQw-fVVZA4pGEmNmp01V7HenePu__Z6UHGZyyusjW5MjrIL1RZzlMf012SgY0sXNbng0POJCvcFenhIdEhUb50-1sr9SMTdUM5b0mseyzg" 
            />
            <span className="font-bold text-lg text-primary tracking-tight hidden sm:inline-block">
              Amour Trucking Hub
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder={t['market-search'] || "Search dashboard, loads, compliance..."}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right Action Icons & Role Switcher */}
        <div className="flex items-center gap-3">
          {/* Demo Role Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Role: {activeRole}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {roleMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Switch Persona Demo
                </div>
                {['Driver', 'Fleet Owner', 'Truck Seller', 'Admin'].map((r) => (
                  <button
                    key={r}
                    onClick={() => handleRoleChange(r)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between hover:bg-slate-50 cursor-pointer ${
                      activeRole === r ? 'text-primary font-bold bg-primary/5' : 'text-slate-700'
                    }`}
                  >
                    {r}
                    {activeRole === r && <ShieldCheck className="w-4 h-4 text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-primary p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50">
                {[
                  { code: 'en', name: 'English' },
                  { code: 'am', name: 'አማርኛ' },
                  { code: 'ti', name: 'ትግርኛ' }
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as LanguageCode); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-medium text-slate-700 cursor-pointer"
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>

          {/* User Avatar & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 transition-all cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs border border-primary/20">
                {user?.full_name ? user.full_name.charAt(0) : 'U'}
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900 truncate">{user?.full_name || 'Amour User'}</p>
                  <p className="text-[11px] text-slate-500 truncate">{user?.phone_number}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded">
                    {activeRole}
                  </span>
                </div>
                <Link
                  to="/dashboard/profile"
                  onClick={() => setUserDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  <UserIcon className="w-4 h-4 text-slate-400" />
                  View Profile & Target Fields
                </Link>
                <button
                  onClick={() => logout()}
                  className="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col justify-between
        `}>
          <div className="p-4 space-y-6 overflow-y-auto">
            {/* Persona Indicator Badge */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 rounded-xl border border-primary/20">
              <span className="text-[10px] font-bold tracking-wider text-primary uppercase block mb-0.5">
                Current Persona
              </span>
              <p className="text-sm font-bold text-slate-900">{activeRole} Portal</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {activeRole === 'Driver' && 'Leasing, Load Match & CDL Wallet'}
                {activeRole === 'Fleet Owner' && 'Fleet Management, Drivers & Compliance'}
                {activeRole === 'Truck Seller' && 'Truck Inventory, Leads & Financing'}
                {activeRole === 'Admin' && 'Platform Governance & Security Audits'}
              </p>
            </div>

            {/* Navigation Section */}
            <nav className="space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                Main Menu
              </p>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/20 font-bold' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{link.name}</span>
                    </div>
                    {link.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                ZTA Compliant
              </span>
              <span className="font-mono text-[10px]">v2.4</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
