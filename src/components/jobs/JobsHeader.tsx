import { useState, useEffect } from 'react';
import { Search, ChevronDown, Bell, LogOut, Check, Globe } from 'lucide-react';
import { getCurrentUser, logout } from '../../services/auth';
import type { LanguageCode } from '../../types';

interface JobsHeaderProps {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function JobsHeader({ lang, setLang, searchTerm, setSearchTerm }: JobsHeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getCurrentUser().then(data => {
      if (data) setUser(data);
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-sm">
      {/* Brand & Logo */}
      <a href="http://localhost:5173" className="flex items-center gap-3">
        <img 
          alt="Amour Jobs Logo" 
          className="h-10 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBja6gxy2Ajk_yIS4at-r-ox5VBde3waeWnR_HOr9qU6dtNgO3c2fyAU-ojWf7aKBaBiwqtAEtckorkOrxRmKN-ouugoiyea1og42H0dMEbm0kIQ7IAYnpOB-9Ih2nhsZgPG5VXm17jnPzwNQw-fVVZA4pGEmNmp01V7HenePu__Z6UHGZyyusjW5MjrIL1RZzlMf012SgY0sXNbng0POJCvcFenhIdEhUb50-1sr9SMTdUM5b0mseyzg" 
        />
        <div>
          <span className="text-lg font-bold text-primary tracking-tight block leading-none">Amour Recruitment</span>
          <span className="text-[10px] font-semibold text-emerald-600 tracking-wide uppercase">Driver Job Network</span>
        </div>
      </a>

      {/* Central Search Bar */}
      <div className="flex-1 max-w-lg mx-6 hidden sm:block">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by route, city, state, or company..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            <span>{lang.toUpperCase()}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50">
              {[
                { code: 'en', name: 'English' },
                { code: 'am', name: 'አማርኛ' },
                { code: 'ti', name: 'ትግርኛ' }
              ].map(l => (
                <button 
                  key={l.code}
                  onClick={() => { setLang(l.code as LanguageCode); setLangOpen(false); }} 
                  className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 flex items-center justify-between font-semibold text-slate-700 cursor-pointer"
                >
                  {l.name} {lang === l.code && <Check className="w-3.5 h-3.5 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User State */}
        {user ? (
          <div className="flex items-center gap-3">
            <button className="text-slate-500 hover:text-primary relative p-1.5 cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button>
            <a href="http://localhost:5173/dashboard" className="text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-all">
              {user.phone_number}
            </a>
            <button onClick={() => logout()} className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer" title="Log Out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a href="http://localhost:5173/login" className="text-xs font-bold text-primary hover:underline px-3 py-2">
              Log In
            </a>
            <a href="http://localhost:5173/signup" className="text-xs font-bold bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-container shadow-sm transition-all">
              Sign Up
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
