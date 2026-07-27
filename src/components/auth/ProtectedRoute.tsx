import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { translations } from '../../constants/translations';
import type { LanguageCode } from '../../types';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  const lang = (localStorage.getItem('lang') as LanguageCode) || 'en';
  const t = translations[lang] || translations.en;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 text-primary">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm font-semibold animate-pulse">{t['authenticating'] || 'Authenticating...'}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user.user_role && !allowedRoles.includes(user.user_role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
