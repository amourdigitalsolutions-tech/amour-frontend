import React from 'react';

export function Card({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 border-b border-slate-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight text-slate-900 ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 border-t border-slate-100 bg-slate-50 flex items-center ${className}`}>
      {children}
    </div>
  );
}
