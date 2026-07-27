import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth';
import { Loader2 } from 'lucide-react';

export default function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) {
  const [authStatus, setAuthStatus] = useState<{ isAuth: boolean | null, role: string | null }>({ isAuth: null, role: null });
  const location = useLocation();

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        if (user) {
          setAuthStatus({ isAuth: true, role: user.user_role });
        } else {
          setAuthStatus({ isAuth: false, role: null });
        }
      })
      .catch(() => {
        setAuthStatus({ isAuth: false, role: null });
      });
  }, []);

  if (authStatus.isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 text-primary">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm font-semibold animate-pulse">Authenticating...</p>
        </div>
      </div>
    );
  }

  if (!authStatus.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && authStatus.role && !allowedRoles.includes(authStatus.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
