import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, ArrowRight, Truck, ShieldCheck, Users, Building2, Building, Factory, Landmark, Terminal, Smile, ChevronDown, Check } from 'lucide-react';
import { translations } from '../constants/translations';
import type { LanguageCode } from '../types';
import { getCurrentUser } from '../services/auth';

function Header({ lang, setLang, t }: { lang: LanguageCode, setLang: (l: LanguageCode) => void, t: any }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    getCurrentUser().then(data => {
      if (data) setUser(data);
    });
  }, []);
  
  return (
    <header className="fixed top-0 left-0 w-full h-[64px] bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <img 
            alt="Amour Trucking Hub Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBja6gxy2Ajk_yIS4at-r-ox5VBde3waeWnR_HOr9qU6dtNgO3c2fyAU-ojWf7aKBaBiwqtAEtckorkOrxRmKN-ouugoiyea1og42H0dMEbm0kIQ7IAYnpOB-9Ih2nhsZgPG5VXm17jnPzwNQw-fVVZA4pGEmNmp01V7HenePu__Z6UHGZyyusjW5MjrIL1RZzlMf012SgY0sXNbng0POJCvcFenhIdEhUb50-1sr9SMTdUM5b0mseyzg" 
          />
        </div>

        {/* Actions (Right) */}
        <div className="flex items-center gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer active:scale-95 py-2 px-3 rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                <button onClick={() => { setLang('en'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                  English {lang === 'en' && <Check className="w-4 h-4 text-primary" />}
                </button>
                <button onClick={() => { setLang('am'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer font-ethiopic">
                  አማርኛ {lang === 'am' && <Check className="w-4 h-4 text-primary" />}
                </button>
                <button onClick={() => { setLang('ti'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer font-ethiopic">
                  ትግርኛ {lang === 'ti' && <Check className="w-4 h-4 text-primary" />}
                </button>
              </div>
            )}
          </div>

          {user ? (
            <>
              <a href="http://marketplace.localhost:5173" className="hidden sm:block text-primary text-sm font-medium hover:underline decoration-2 underline-offset-4 px-4 py-2 transition-all font-inter">
                Marketplace
              </a>
              <button onClick={() => navigate('/dashboard')} className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all font-inter cursor-pointer">
                Dashboard
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="hidden sm:block text-primary text-sm font-medium hover:underline decoration-2 underline-offset-4 px-4 py-2 transition-all font-inter cursor-pointer">
                {t['landing-login']}
              </button>
              <button onClick={() => navigate('/signup')} className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all font-inter cursor-pointer">
                {t['landing-join-waitlist']}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Hero({ t }: { t: any }) {
  const navigate = useNavigate();
  return (
    <section className="relative w-full overflow-hidden hero-gradient">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-4 md:px-8 mt-[64px]">
        {/* Content Left */}
        <div className="w-full md:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium">
            <BadgeCheck className="w-4 h-4 text-on-secondary-container" fill="currentColor" />
            <span className="font-inter">{t['hero-badge']}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-inter tracking-tight">
            {t['hero-title']}
          </h1>
          
          <p className="text-lg text-on-surface-variant max-w-xl font-inter leading-relaxed">
            {t['hero-subtitle']}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={() => navigate('/signup')} className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-primary/20 hover:bg-primary-container transition-all flex items-center justify-center gap-2 group font-inter">
              {t['landing-join-waitlist']}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center gap-4 px-4 py-2 bg-white/50 backdrop-blur rounded-lg border border-outline-variant">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-gray flex items-center justify-center text-[10px] text-white font-inter">MK</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] text-white font-inter">AS</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-inter">TD</div>
              </div>
              <span className="text-sm font-medium text-on-surface-variant font-inter">{t['hero-joined']}</span>
            </div>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
            <img 
              className="w-full h-[500px] object-cover" 
              alt="Professional East African truck driver in cab"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBwJrUYAxr9SgrnA1GLLtxI8qLXPjkVq4KaDGTPbEf4sCzzbksUTCOZtRCyE8CBa5PVVWflF_PyDh6lHtIuC1Hh8p5PUruxN9C87eDHw8kGpwX_mWehxTZ_JmRsJ4cB5-ulmK_nbPd9j_6yu2GtgShvz9QMgd-N_sbTRBlOa1BzCSMaWxi-QI4Y1kxdVlHWofHNX3ty-t3HcfsvhUS9oyx-4ntf66gx2SZvoALYB6nrhwN1Sx9m1jshw" 
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl shadow-lg border-l-4 border-secondary">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Truck className="w-6 h-6 text-secondary" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary font-inter">{t['hero-leasing-title']}</h4>
                  <p className="text-sm text-on-surface-variant font-inter">{t['hero-leasing-sub']}</p>
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
  );
}

function Features({ t }: { t: any }) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4 font-inter">{t['features-title']}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3 font-inter">{t['feat1-title']}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-inter">{t['feat1-desc']}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3 font-inter">{t['feat2-title']}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-inter">{t['feat2-desc']}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3 font-inter">{t['feat3-title']}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-inter">{t['feat3-desc']}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof({ t }: { t: any }) {
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-fixed-dim mb-10 font-inter">
          {t['proof-pre']}
        </p>
        <h3 className="text-3xl font-semibold mb-12 font-inter max-w-2xl mx-auto leading-tight">
          {t['proof-title']}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-12 opacity-80 text-primary-fixed-dim">
          <div className="flex flex-col items-center gap-2">
            <Building2 className="w-10 h-10" />
            <span className="text-xs font-medium font-inter">Atlanta, GA</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Building className="w-10 h-10" />
            <span className="text-xs font-medium font-inter">Dallas, TX</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Factory className="w-10 h-10" />
            <span className="text-xs font-medium font-inter">Seattle, WA</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Building2 className="w-10 h-10" />
            <span className="text-xs font-medium font-inter">Columbus, OH</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Landmark className="w-10 h-10" />
            <span className="text-xs font-medium font-inter">Washington, DC</span>
          </div>
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
    </section>
  );
}

function CTASection({ t }: { t: any }) {
  const navigate = useNavigate();
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center bg-surface-container-low rounded-3xl p-12 border border-outline-variant shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-6 font-inter tracking-tight">
            {t['cta-title']}
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 font-inter max-w-2xl mx-auto">
            {t['cta-desc']}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              className="w-full px-6 py-4 rounded-xl border border-outline focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-inter bg-white" 
              placeholder={t['placeholder-email']}
              type="email" 
            />
            <button onClick={() => navigate('/signup')} className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-sm font-medium whitespace-nowrap shadow-md hover:bg-primary/90 transition-all font-inter">
              {t['landing-join-waitlist']}
            </button>
          </div>
        </div>
        
        {/* Decorative Circle */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-16 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          <div className="max-w-xs">
            <img 
              alt="Amour Trucking Hub Footer Logo" 
              className="h-10 w-auto mb-6 grayscale opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBja6gxy2Ajk_yIS4at-r-ox5VBde3waeWnR_HOr9qU6dtNgO3c2fyAU-ojWf7aKBaBiwqtAEtckorkOrxRmKN-ouugoiyea1og42H0dMEbm0kIQ7IAYnpOB-9Ih2nhsZgPG5VXm17jnPzwNQw-fVVZA4pGEmNmp01V7HenePu__Z6UHGZyyusjW5MjrIL1RZzlMf012SgY0sXNbng0POJCvcFenhIdEhUb50-1sr9SMTdUM5b0mseyzg" 
            />
            <p className="text-sm text-on-surface-variant font-inter leading-relaxed">
              {t['footer-desc']}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary font-inter tracking-wide">{t['footer-sol']}</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-inter">
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-llc']}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-lease']}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-jobs']}</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary font-inter tracking-wide">{t['footer-comp']}</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-inter">
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-about']}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-contact']}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">{t['footer-support']}</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary font-inter tracking-wide">{t['footer-legal']}</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-inter">
                <li><a className="hover:text-primary transition-colors" href="#">{t['privacy-policy']}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">{t['terms-of-service']}</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-surface-variant font-inter">
            {t['footer-rights']}
          </p>
          <div className="flex items-center gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
              <Smile className="w-5 h-5" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
              <Users className="w-5 h-5" />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
              <Terminal className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const [lang, setLang] = useState<LanguageCode>('en');
  const t = translations[lang];
  const fontClass = lang === 'am' || lang === 'ti' ? 'font-ethiopic' : 'font-inter';

  return (
    <div className={`min-h-screen flex flex-col ${fontClass}`}>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <Features t={t} />
        <SocialProof t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
