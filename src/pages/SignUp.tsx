import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full h-16 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            alt="Amour Trucking Hub Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLsrM8uK4ra09zh2YA8Z710y8B99GcIq8F2-JWJMgPSb4gUSWeimYe30UnQOhXrDTSATy91j0NIutPRSS0aVrrf3VcPQnb9yvdcJB5519iTxryXjJgZWK8owJd_VkvW-RyiR-gWvLjBv56akY2DDUcCd5BbVXShPmM8E3MKdaJknImSWGCY4ccbvSoyShFQsdS4WNzpILt4m83dbDQUm5hOPgvEOups-Q7QPjt5vm4S2tlSAW1pYVmDaf9D4"
          />
          <span className="font-headline-sm text-headline-sm text-primary hidden md:block">Amour Trucking Hub</span>
        </div>
        {/* Language Toggle */}
        <div className="bg-surface-container-high rounded-full p-1 flex items-center shadow-sm">
          <button className="px-4 py-1.5 rounded-full bg-primary text-white text-label-sm font-label-sm transition-all">EN</button>
          <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-highest font-ethiopic-label text-ethiopic-label transition-all">አማርኛ</button>
          <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-highest font-ethiopic-label text-ethiopic-label transition-all">ትግርኛ</button>
        </div>
      </header>

      {/* Main Registration Container */}
      <main className="flex-grow flex items-center justify-center w-full px-4 py-12 md:py-20">
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-lg border border-outline-variant/30 p-8 md:p-10 transition-transform duration-300 hover:shadow-xl">
          {/* Branding/Trust Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-primary-container/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <h1 className="text-headline-md font-headline-md text-primary mb-2">Create Your Account</h1>
            <p className="text-on-surface-variant text-body-sm font-body-sm">Secure registration for federal compliance and fleet management.</p>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-opacity-50 rounded-lg">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1.5" htmlFor="full_name">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-gray text-[20px]">person</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline bg-white focus:border-primary focus:ring-0 text-body-md transition-colors placeholder:text-outline-variant outline-none" 
                    id="full_name" 
                    placeholder="Enter your full legal name" 
                    type="text" 
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-opacity-50 rounded-lg">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1.5" htmlFor="phone">Phone Number</label>
                <div className="relative flex">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-slate-gray text-[20px]">call</span>
                  </div>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline bg-white focus:border-primary focus:ring-0 text-body-md transition-colors placeholder:text-outline-variant outline-none" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000" 
                    type="tel" 
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-opacity-50 rounded-lg">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1.5" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-gray text-[20px]">mail</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline bg-white focus:border-primary focus:ring-0 text-body-md transition-colors placeholder:text-outline-variant outline-none" 
                    id="email" 
                    placeholder="name@company.com" 
                    type="email" 
                  />
                </div>
              </div>

              {/* Password */}
              <div className="focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-opacity-50 rounded-lg">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1.5" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-gray text-[20px]">lock</span>
                  <input 
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-outline bg-white focus:border-primary focus:ring-0 text-body-md transition-colors placeholder:text-outline-variant outline-none" 
                    id="password" 
                    placeholder="Min. 8 characters" 
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-gray hover:text-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-start gap-3 mt-4">
              <input className="mt-1 h-4 w-4 rounded border-outline text-primary focus:ring-primary focus:ring-offset-0" id="terms" type="checkbox" />
              <label className="text-body-sm text-on-surface-variant leading-tight" htmlFor="terms">
                I agree to the <a className="text-primary font-medium hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-medium hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            {/* Primary Action */}
            <button className="w-full bg-primary-container text-white py-4 rounded-lg font-headline-sm text-headline-sm shadow-md hover:bg-primary transition-all active:scale-[0.98] flex justify-center items-center gap-2 mt-6" type="submit">
              <span>Create Account</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          {/* Login Redirect */}
          <div className="mt-8 text-center pt-6 border-t border-outline-variant/30">
            <p className="text-body-sm text-on-surface-variant">
              Already have an account? 
              <Link to="/login" className="text-primary font-semibold hover:underline px-1">Log in</Link>
            </p>
          </div>

          {/* Security Badges */}
          <div className="mt-8 flex justify-center items-center gap-6 opacity-60">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">lock_person</span>
              <span className="text-label-sm font-label-sm uppercase tracking-wider">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-label-sm font-label-sm uppercase tracking-wider">Secure Portal</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center">
        <p className="text-label-sm text-on-surface-variant opacity-70">© 2024 Amour Trucking Hub. All federal logistics regulations maintained. Built for the East African diaspora.</p>
      </footer>
    </div>
  );
}
