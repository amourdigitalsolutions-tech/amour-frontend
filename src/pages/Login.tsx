import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden bg-background text-on-surface font-body-md">
      {/* Left Side: Visual/Brand Messaging */}
      <section className="hidden md:flex relative md:w-1/2 lg:w-7/12 bg-primary overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiJ4r9ZOsHC0XrPvtuxSpWhbYchOMvIPAVN7z7GlSwFC3Xcl3Bj0_uRoRSyVeHKfxQm5PSxII7c-V_yJL64Xu3LxSlQ0PDxf0_P0YyDUAtd9NHtff5bfEmvqAYrZuICh8yItbtSsELeHf-MOQuOfqcQCuRE0CpKGc3poKppYaQxL9PF8KBRU4UyUCc3WkvHrwGTF7UpEjwYwi8AGr7Gr6Y1AI_QPUqvfcVbPc5u9RnAcjIy0wpmG_YCA')" }}
        ></div>
        {/* Overlay and Logo */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
        <div className="relative z-20 flex flex-col justify-between p-12 h-full">
          <div className="flex items-center space-x-4">
            <img 
              alt="Amour Trucking Hub Logo" 
              className="h-16 w-auto brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsrM8uK4ra09zh2YA8Z710y8B99GcIq8F2-JWJMgPSb4gUSWeimYe30UnQOhXrDTSATy91j0NIutPRSS0aVrrf3VcPQnb9yvdcJB5519iTxryXjJgZWK8owJd_VkvW-RyiR-gWvLjBv56akY2DDUcCd5BbVXShPmM8E3MKdaJknImSWGCY4ccbvSoyShFQsdS4WNzpILt4m83dbDQUm5hOPgvEOups-Q7QPjt5vm4S2tlSAW1pYVmDaf9D4"
            />
            <div className="border-l border-white/30 pl-4 h-12 flex flex-col justify-center">
              <span className="text-white font-headline-md text-headline-md tracking-tight uppercase">Amour Trucking Hub</span>
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="text-white font-headline-lg text-headline-lg mb-4">Empowering East African Entrepreneurs.</h1>
            <p className="text-white/80 font-body-lg text-body-lg">
              Streamline your fleet operations, ensure compliance, and unlock growth opportunities in the US trucking market.
            </p>
          </div>
          <div className="flex items-center space-x-8 text-white/60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">security</span>
              <span className="font-label-md text-label-md">Federal Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-label-md text-label-md">Financial Clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Authentication Form */}
      <section className="flex-1 flex flex-col items-center justify-center bg-surface px-4 md:px-16 lg:px-24 py-12 relative overflow-y-auto">
        {/* Mobile Header (Logo Only) */}
        <div className="md:hidden absolute top-8 left-4 flex items-center space-x-2">
          <img 
            alt="Amour Trucking Hub" 
            className="h-8 w-auto" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLsrM8uK4ra09zh2YA8Z710y8B99GcIq8F2-JWJMgPSb4gUSWeimYe30UnQOhXrDTSATy91j0NIutPRSS0aVrrf3VcPQnb9yvdcJB5519iTxryXjJgZWK8owJd_VkvW-RyiR-gWvLjBv56akY2DDUcCd5BbVXShPmM8E3MKdaJknImSWGCY4ccbvSoyShFQsdS4WNzpILt4m83dbDQUm5hOPgvEOups-Q7QPjt5vm4S2tlSAW1pYVmDaf9D4"
          />
          <span className="font-headline-sm text-headline-sm text-primary font-bold">Amour Hub</span>
        </div>

        {/* Language Toggle */}
        <nav className="absolute top-8 right-8">
          <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant">
            <button className="px-4 py-1.5 rounded-full text-label-md font-label-md transition-all duration-200 bg-primary text-white">EN</button>
            <button className="px-4 py-1.5 rounded-full text-label-md font-label-md transition-all duration-200 text-on-surface-variant hover:text-primary">አማርኛ</button>
            <button className="px-4 py-1.5 rounded-full text-label-md font-label-md transition-all duration-200 text-on-surface-variant hover:text-primary">ትግርኛ</button>
          </div>
        </nav>

        {/* Login Form Container */}
        <div className="w-full max-w-[400px] flex flex-col space-y-8 mt-12 md:mt-0">
          <div className="space-y-2">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Welcome back</h2>
            <p className="text-on-surface-variant font-body-md text-body-md">Enter your credentials to access your dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label className="font-label-md text-label-md text-on-surface block" htmlFor="identifier">Phone Number or Email</label>
              <div className="relative flex">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-gray">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md text-body-md outline-none" 
                  id="identifier" 
                  placeholder="+1 (555) 000-0000" 
                  type="text" 
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface block" htmlFor="password">Password</label>
                <a className="text-primary font-label-md text-label-md hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-gray">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-10 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md text-body-md outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? 'text' : 'password'}
                />
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-gray hover:text-primary transition-colors" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <button 
              className="w-full bg-primary-container text-white py-4 rounded-lg font-headline-sm text-headline-sm shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
              type="submit"
            >
              Enter Dashboard
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          <div className="flex flex-col space-y-6 pt-4">
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-4 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md bg-white">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEq9Brp9Y1aZczq8Qx-a6jedEYD6FUW5DkdmBZNLZysuN4cGY2dQ2dMDJZ6H1wGQqDI8XMsurslP6hKO9OHKGDNy8RzA43y0ULetIWkWMQ3UZMqAbqsK29aamjEyIUylPB5vHfFbJlStU-z35789Nd3w532Wt9xv3Enb7QgiqmYbnTqwGkgM1MtAY99CQfwM4ype4jTs8FXRzDd6e_Cf1PtPJNBF6i1Y5VpsYw74T5gXTk-glkRayyfQ" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md bg-white">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>phone_iphone</span>
                SMS Code
              </button>
            </div>
            
            <p className="text-center text-on-surface-variant font-body-sm text-body-sm">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
