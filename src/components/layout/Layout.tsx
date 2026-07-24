import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed overflow-x-hidden min-h-screen">
      
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[240px] bg-surface border-r border-outline-variant z-50 hidden md:flex flex-col gap-2 p-4">
        <div className="mb-8 px-2 flex flex-col">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsrM8uK4ra09zh2YA8Z710y8B99GcIq8F2-JWJMgPSb4gUSWeimYe30UnQOhXrDTSATy91j0NIutPRSS0aVrrf3VcPQnb9yvdcJB5519iTxryXjJgZWK8owJd_VkvW-RyiR-gWvLjBv56akY2DDUcCd5BbVXShPmM8E3MKdaJknImSWGCY4ccbvSoyShFQsdS4WNzpILt4m83dbDQUm5hOPgvEOups-Q7QPjt5vm4S2tlSAW1pYVmDaf9D4" 
              alt="Amour Trucking Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-headline-sm text-headline-sm font-bold text-primary">Amour Trucking</span>
          </Link>
        </div>
        
        <nav className="flex flex-col gap-2">
          {/* Active: Home */}
          <Link to="/dashboard" className="bg-primary-container text-on-primary-container font-bold rounded-lg flex items-center gap-3 px-4 py-3 transition-all duration-150 active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-body-md text-body-md">Home</span>
          </Link>
          <a href="http://compliance.localhost:5173" className="text-on-surface-variant hover:bg-surface-container-high flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-body-md text-body-md">Compliance</span>
          </a>
          <a href="http://marketplace.localhost:5173" className="text-on-surface-variant hover:bg-surface-container-high flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
            <span className="material-symbols-outlined">local_shipping</span>
            <span className="font-body-md text-body-md">Trucks</span>
          </a>
          <a href="#" className="text-on-surface-variant hover:bg-surface-container-high flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
            <span className="material-symbols-outlined">work</span>
            <span className="font-body-md text-body-md">Jobs</span>
          </a>
          <a href="http://chat.localhost:5173" className="text-on-surface-variant hover:bg-surface-container-high flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
            <span className="material-symbols-outlined">forum</span>
            <span className="font-body-md text-body-md">Chat</span>
          </a>
        </nav>

        <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">AT</div>
            <div>
              <p className="font-label-md text-label-md">Amour Hub</p>
              <p className="text-xs text-on-surface-variant">Premium Plan</p>
            </div>
          </div>
          <button className="w-full py-2 bg-primary text-white rounded-lg font-label-md hover:bg-opacity-90 transition-all">Support</button>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-240px)] h-16 bg-white border-b border-outline-variant shadow-sm z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 mr-4">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsrM8uK4ra09zh2YA8Z710y8B99GcIq8F2-JWJMgPSb4gUSWeimYe30UnQOhXrDTSATy91j0NIutPRSS0aVrrf3VcPQnb9yvdcJB5519iTxryXjJgZWK8owJd_VkvW-RyiR-gWvLjBv56akY2DDUcCd5BbVXShPmM8E3MKdaJknImSWGCY4ccbvSoyShFQsdS4WNzpILt4m83dbDQUm5hOPgvEOups-Q7QPjt5vm4S2tlSAW1pYVmDaf9D4" 
              alt="Amour Trucking Logo" 
              className="h-8 w-auto object-contain block md:hidden" 
            />
            <span className="font-headline-sm text-headline-sm font-bold text-primary hidden lg:block">Command Dashboard</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 bg-surface-container rounded-full p-1 border border-outline-variant">
            <button className="px-4 py-1.5 rounded-full font-label-md text-label-md bg-primary text-white transition-all">EN</button>
            <button className="px-4 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all">አማርኛ</button>
            <button className="px-4 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all">ትግርኛ</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-8 w-[1px] bg-outline-variant"></div>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all group">
            <span className="material-symbols-outlined group-hover:scale-110 duration-200">account_circle</span>
            <span className="font-label-md text-label-md hidden sm:block">My Account</span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-24 pb-32 md:pb-12 px-6 md:ml-[240px] max-w-7xl mx-auto">
        {children}
      </main>

    </div>
  );
}
