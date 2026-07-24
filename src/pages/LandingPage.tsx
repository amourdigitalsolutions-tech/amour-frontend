import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Header / TopNavBar Segment */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <img 
              alt="Amour Trucking Hub Logo" 
              className="h-10 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBja6gxy2Ajk_yIS4at-r-ox5VBde3waeWnR_HOr9qU6dtNgO3c2fyAU-ojWf7aKBaBiwqtAEtckorkOrxRmKN-ouugoiyea1og42H0dMEbm0kIQ7IAYnpOB-9Ih2nhsZgPG5VXm17jnPzwNQw-fVVZA4pGEmNmp01V7HenePu__Z6UHGZyyusjW5MjrIL1RZzlMf012SgY0sXNbng0POJCvcFenhIdEhUb50-1sr9SMTdUM5b0mseyzg"
            />
          </div>
          {/* Language Toggle (Center) */}
          <nav className="hidden md:flex items-center bg-surface-container rounded-full p-1 border border-outline-variant">
            <button className="px-4 py-1.5 rounded-full bg-primary text-white font-label-md text-label-md transition-all">EN</button>
            <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-high font-ethiopic-label text-ethiopic-label transition-all">አማርኛ</button>
            <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-high font-ethiopic-label text-ethiopic-label transition-all">ትግርኛ</button>
          </nav>
          {/* Actions (Right) */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4 px-4 py-2 transition-all">
              Log In
            </Link>
            <Link to="/signup" className="bg-primary text-white px-6 py-2.5 rounded-lg font-label-md text-label-md shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
              Join the Waitlist
            </Link>
            {/* Mobile Language Trigger */}
            <button className="md:hidden p-2 text-on-surface-variant">
              <span className="material-symbols-outlined">language</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-4 md:px-8">
            {/* Content Left */}
            <div className="w-full md:w-1/2 space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span>Official Partner for US Interstate Logistics</span>
              </div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                The All-in-One Gateway to Owning Your Trucking Fleet.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Simplified LLCs, fair truck financing, and trusted driver recruiting. We bridge the gap between compliance and community for East African entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup" className="bg-primary text-white px-10 py-4 rounded-xl font-label-md text-headline-sm shadow-xl shadow-primary/20 hover:bg-primary-container transition-all flex items-center justify-center gap-2 group">
                  Join the Waitlist
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <div className="flex items-center gap-4 px-4 py-2 bg-white/50 backdrop-blur rounded-lg border border-outline-variant">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-gray flex items-center justify-center text-[10px] text-white">MK</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] text-white">AS</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white">TD</div>
                  </div>
                  <span className="text-body-sm font-label-sm text-on-surface-variant">Joined by 400+ owners</span>
                </div>
              </div>
            </div>
            {/* Image Right */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-[500px] object-cover" 
                  alt="Professional East African truck driver in cab" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBwJrUYAxr9SgrnA1GLLtxI8qLXPjkVq4KaDGTPbEf4sCzzbksUTCOZtRCyE8CBa5PVVWflF_PyDh6lHtIuC1Hh8p5PUruxN9C87eDHw8kGpwX_mWehxTZ_JmRsJ4cB5-ulmK_nbPd9j_6yu2GtgShvz9QMgd-N_sbTRBlOa1BzCSMaWxi-QI4Y1kxdVlHWofHNX3ty-t3HcfsvhUS9oyx-4ntf66gx2SZvoALYB6nrhwN1Sx9m1jshw" 
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl shadow-lg border-l-4 border-secondary bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-primary">Leasing Approved</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Fair terms for new owner-operators.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Built for the Modern Carrier</h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[32px]">shield</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Automated Federal Compliance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Navigate USDOT, MC numbers, and IFTA filings without the headache. We handle the paperwork so you can focus on the road.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[32px]">local_shipping</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Fair Equipment Leasing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Access top-tier freightliners and Volvos through our community-first financing models with no hidden fees or predatory rates.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-tertiary-container/10 text-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[32px]">groups</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Verified Driver Network</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Hire from a pre-vetted pool of experienced CDL drivers. We verify MVRs and past employment so you don't have to.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 text-center bg-surface-container border-t border-outline-variant">
        <p className="text-label-sm text-on-surface-variant opacity-70">© 2024 Amour Trucking Hub. All federal logistics regulations maintained.</p>
      </footer>
    </div>
  );
}
