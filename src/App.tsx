import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Marketplace from './pages/Marketplace';
import TruckDetails from './pages/TruckDetails';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import ProfilePage from './pages/dashboard/ProfilePage';
import DriverDashboard from './pages/dashboard/DriverDashboard';
import FleetOwnerDashboard from './pages/dashboard/FleetOwnerDashboard';
import TruckSellerDashboard from './pages/dashboard/TruckSellerDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import JobsPortal from './pages/jobs/JobsPortal';

import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

export default function App() {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const host = window.location.hostname;
    const parts = host.split('.');
    
    // Explicit subdomain detection: only match known subdomains (e.g. marketplace, jobs, compliance)
    const validSubdomains = ['compliance', 'marketplace', 'jobs', 'job'];
    if (validSubdomains.includes(parts[0])) {
      setSubdomain(parts[0]);
    }
  }, []);

  // 1. Compliance Subdomain Router
  if (subdomain === 'compliance') {
    return (
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<ProtectedRoute allowedRoles={['Fleet Owner']}><DashboardLayout><FleetOwnerDashboard /></DashboardLayout></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    );
  }

  // 2. Marketplace Subdomain Router
  if (subdomain === 'marketplace') {
    return (
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Marketplace />} />
              <Route path="/truck/:id" element={<TruckDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    );
  }

  // 3. Dedicated Jobs Subdomain Router (jobs.localhost or job.localhost)
  if (subdomain === 'jobs' || subdomain === 'job') {
    return (
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<JobsPortal />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    );
  }

  // 4. Main / Default Router (Marketing & Auth & Dashboard & Jobs)
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Role-Based Adaptive Dashboard Suite (Protected & Role-Restricted) */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><DashboardHome /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute><DashboardLayout><ProfilePage /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/driver" element={<ProtectedRoute allowedRoles={['Driver']}><DashboardLayout><DriverDashboard /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/fleet" element={<ProtectedRoute allowedRoles={['Fleet Owner']}><DashboardLayout><FleetOwnerDashboard /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/inventory" element={<ProtectedRoute allowedRoles={['Truck Seller']}><DashboardLayout><TruckSellerDashboard /></DashboardLayout></ProtectedRoute>} />
            <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['Admin']}><DashboardLayout><AdminDashboard /></DashboardLayout></ProtectedRoute>} />
            
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/truck/:id" element={<TruckDetails />} />
            <Route path="/jobs" element={<JobsPortal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}
