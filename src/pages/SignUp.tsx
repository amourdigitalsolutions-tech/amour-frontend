import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Wallet, ChevronDown, Check } from 'lucide-react';
import type { LanguageCode, ViewState } from '../types';
import { translations } from '../constants/translations';
import { registerUser } from '../services/auth';

export default function SignUp() {
  const [lang, setLang] = useState<LanguageCode>('en');
  const [langOpen, setLangOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const onNavigate = (view: ViewState) => navigate(view === 'signup' ? '/signup' : '/login');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await registerUser({ phone, password, role: 'Fleet Owner', lang });
      // Success! Navigate to login
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const t = translations[lang];
  const fontClass = lang === 'am' || lang === 'ti' ? 'font-ethiopic' : 'font-body';

  return (
    <main className="flex min-h-screen flex-col md:flex-row overflow-hidden bg-background">
      {/* Left Side: Visual/Brand Messaging */}
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-12 md:flex lg:w-7/12">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiJ4r9ZOsHC0XrPvtuxSpWhbYchOMvIPAVN7z7GlSwFC3Xcl3Bj0_uRoRSyVeHKfxQm5PSxII7c-V_yJL64Xu3LxSlQ0PDxf0_P0YyDUAtd9NHtff5bfEmvqAYrZuICh8yItbtSsELeHf-MOQuOfqcQCuRE0CpKGc3poKppYaQxL9PF8KBRU4UyUCc3WkvHrwGTF7UpEjwYwi8AGr7Gr6Y1AI_QPUqvfcVbPc5u9RnAcjIy0wpmG_YCA")',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        
        <div className="relative z-20 flex h-full flex-col justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 flex-col justify-center border-l border-white/30 pl-4">
              <span className="text-2xl font-semibold uppercase tracking-tight text-white">
                Amour Trucking Hub
              </span>
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white">
              Empowering East African Entrepreneurs.
            </h1>
            <p className="text-lg text-white/80">
              Streamline your fleet operations, ensure compliance, and unlock growth opportunities in the US trucking market.
            </p>
          </div>
          <div className="flex items-center space-x-8 text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6" />
              <span className="text-sm font-medium">Federal Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              <span className="text-sm font-medium">Financial Clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Authentication Form */}
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-y-auto bg-surface px-4 py-12 md:px-16 lg:px-24">
        {/* Mobile Header */}
        <div className="absolute left-4 top-8 flex items-center space-x-2 md:hidden">
          <img
            alt="Amour Trucking Hub"
            className="h-8 w-auto"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgcng9IjgiIGZpbGw9IiNlOGVhZWQiLz48cGF0aCBkPSJNMTcwIDEzMCBsMzAgNDAgbDIwLTE1IGw0MCA1NSBIMTQweiIgZmlsbD0iI2JkYzFjNiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTgiIGZpbGw9IiNiZGMxYzYiLz48L3N2Zz4="
          />
          <span className="text-xl font-bold text-primary">Amour Hub</span>
        </div>

        {/* Language Toggle Dropdown */}
        <div className="absolute right-4 top-8 md:right-8 z-30">
          <div className="relative">
            <button 
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer active:scale-95 py-2 px-3 rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                <button type="button" onClick={() => { setLang('en'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                  English {lang === 'en' && <Check className="w-4 h-4 text-primary" />}
                </button>
                <button type="button" onClick={() => { setLang('am'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer font-ethiopic">
                  አማርኛ {lang === 'am' && <Check className="w-4 h-4 text-primary" />}
                </button>
                <button type="button" onClick={() => { setLang('ti'); setLangOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between cursor-pointer font-ethiopic">
                  ትግርኛ {lang === 'ti' && <Check className="w-4 h-4 text-primary" />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Signup Form Container */}
        <div className="mt-24 flex w-full max-w-[400px] flex-col space-y-8 md:mt-12">
          
          <div className="space-y-2">
            <h2 className={`text-2xl font-bold text-primary md:text-3xl ${fontClass}`}>
              {t['create-account']}
            </h2>
            <p className={`text-base text-on-surface-variant ${fontClass}`}>
              {t['signup-subtext']}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {t[error as keyof typeof t] || error}
              </div>
            )}
            <div className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="full_name" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                  {t['label-fullname']}
                </label>
                <div className="relative flex">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    id="full_name"
                    type="text"
                    placeholder={t['placeholder-fullname']}
                    className={`block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container ${fontClass}`}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                  {t['label-phone']}
                </label>
                <div className="relative flex">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t['placeholder-phone']}
                    className={`block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container ${fontClass}`}
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                  {t['label-email']}
                </label>
                <div className="relative flex">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder={t['placeholder-email']}
                    className={`block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container ${fontClass}`}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                  {t['label-password']}
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t['placeholder-password']}
                    className={`block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-10 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container ${fontClass}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-gray hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-start gap-3 py-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-outline text-primary focus:ring-primary focus:ring-offset-0"
              />
              <label htmlFor="terms" className={`text-sm text-on-surface-variant leading-tight ${fontClass}`}>
                {t['agree-terms']}{' '}
                <a href="#" className="font-medium text-primary hover:underline">
                  {t['terms-of-service']}
                </a>{' '}
                {t.and}{' '}
                <a href="#" className="font-medium text-primary hover:underline">
                  {t['privacy-policy']}
                </a>
                .
              </label>
            </div>

            {/* Primary Action */}
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container py-4 text-xl font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98] ${loading ? 'opacity-70' : ''} ${fontClass}`}
            >
              <span>{loading ? 'Creating Account...' : t['btn-create']}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Login Redirect */}
          <div className="mt-6 flex flex-col space-y-6 border-t border-outline-variant/30 pt-6">
            <p className={`text-center text-sm text-on-surface-variant ${fontClass}`}>
              {t['already-have-account']}{' '}
              <button
                type="button"
                onClick={() => onNavigate('signin')}
                className="font-bold text-primary hover:underline px-1"
              >
                {t['login-link']}
              </button>
            </p>

            {/* Security Badges */}
            <div className="flex justify-center items-center gap-6 opacity-60">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">{t['ssl-encrypted']}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">{t['secure-portal']}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-auto max-w-sm pt-12 pb-6 text-center text-xs font-medium text-on-surface-variant">
          {t['footer-text']}
        </div>
      </section>
    </main>
  );
}
