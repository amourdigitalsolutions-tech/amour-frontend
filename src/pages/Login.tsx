import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Wallet, User, Lock, Eye, EyeOff, Smartphone } from 'lucide-react';
import type { LanguageCode, ViewState } from '../types';
import { translations } from '../constants/translations';
import { loginWithPhone } from '../services/auth';

export default function Login() {
  const [lang, setLang] = useState<LanguageCode>('en');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const onNavigate = (view: ViewState) => navigate(view === 'signup' ? '/signup' : '/login');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginWithPhone(phone, password);
      // Success! Navigate to dashboard
      navigate('/dashboard');
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

        {/* Language Toggle */}
        <nav className="absolute right-4 top-8 md:right-8">
          <div className="flex rounded-full border border-outline-variant bg-surface-container p-1">
            <button
              onClick={() => setLang('en')}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 ${
                lang === 'en' ? 'bg-primary text-white shadow-md hover:bg-primary-container hover:shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('am')}
              className={`font-ethiopic cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 ${
                lang === 'am' ? 'bg-primary text-white shadow-md hover:bg-primary-container hover:shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              አማርኛ
            </button>
            <button
              onClick={() => setLang('ti')}
              className={`font-ethiopic cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 ${
                lang === 'ti' ? 'bg-primary text-white shadow-md hover:bg-primary-container hover:shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              ትግርኛ
            </button>
          </div>
        </nav>

        {/* Login Form Container */}
        <div className="mt-24 flex w-full max-w-[400px] flex-col space-y-8 md:mt-8">
          <div className="space-y-2">
            <h2 className={`text-2xl font-bold text-primary md:text-3xl ${fontClass}`}>
              {t.welcome}
            </h2>
            <p className={`text-base text-on-surface-variant ${fontClass}`}>
              {t.subtext}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {t[error as keyof typeof t] || error}
              </div>
            )}
            {/* Identifier Field */}
            <div className="space-y-2">
              <label htmlFor="identifier" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                {t['label-identifier']}
              </label>
              <div className="relative flex">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                  <User className="h-5 w-5" />
                </div>
                <input
                  id="identifier"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.placeholder}
                  className={`block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-4 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container ${fontClass}`}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium text-on-surface ${fontClass}`}>
                  {t['label-password']}
                </label>
                <a href="#" className={`text-sm font-medium text-primary hover:underline ${fontClass}`}>
                  {t['forgot-pw']}
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-gray">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-outline-variant bg-white py-3 pl-10 pr-10 text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
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

            {/* Primary CTA */}
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container py-4 text-xl font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98] ${loading ? 'opacity-70' : ''} ${fontClass}`}
            >
              {loading ? 'Logging in...' : t['btn-enter']}
            </button>
          </form>

          {/* Alternate Actions */}
          <div className="flex flex-col space-y-6 pt-4">
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant" />
              <span className={`mx-4 flex-shrink text-xs font-medium uppercase tracking-widest text-on-surface-variant ${fontClass}`}>
                {t.or}
              </span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant py-3 text-sm font-medium transition-colors hover:bg-surface-container-low active:scale-[0.98]">
                <img
                  alt="Google"
                  className="h-5 w-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEq9Brp9Y1aZczq8Qx-a6jedEYD6FUW5DkdmBZNLZysuN4cGY2dQ2dMDJZ6H1wGQqDI8XMsurslP6hKO9OHKGDNy8RzA43y0ULetIWkWMQ3UZMqAbqsK29aamjEyIUylPB5vHfFbJlStU-z35789Nd3w532Wt9xv3Enb7QgiqmYbnTqwGkgM1MtAY99CQfwM4ype4jTs8FXRzDd6e_Cf1PtPJNBF6i1Y5VpsYw74T5gXTk-glkRayyfQ"
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant py-3 text-sm font-medium transition-colors hover:bg-surface-container-low active:scale-[0.98]">
                <Smartphone className="h-5 w-5 text-primary" />
                SMS Code
              </button>
            </div>

            <p className={`text-center text-sm text-on-surface-variant ${fontClass}`}>
              <span>{t['no-account']} </span>
              <button
                type="button" 
                onClick={() => onNavigate('signup')} 
                className="font-bold text-primary hover:underline"
              >
                {t['signup-link']}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto max-w-sm pt-12 text-center text-xs font-medium text-on-surface-variant">
          © 2024 Amour Trucking Hub. Secure Federal Compliance Portal. By logging in, you agree to our{' '}
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>
          .
        </div>
      </section>
    </main>
  );
}
