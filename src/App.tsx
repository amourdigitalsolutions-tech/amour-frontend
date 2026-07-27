import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChatRoom from './pages/ChatRoom';
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

export default function App() {
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const host = window.location.hostname;
    const parts = host.split('.');
    
    // Basic subdomain detection: (e.g. compliance.amourtruckinghub.com or compliance.localhost)
    if (parts.length >= 3 || (parts.length >= 2 && parts[1] === 'localhost')) {
      setSubdomain(parts[0]);
    }
  }, []);

  // 1. Compliance Subdomain Router
  if (subdomain === 'compliance') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><FleetOwnerDashboard /></DashboardLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // 2. Marketplace Subdomain Router
  if (subdomain === 'marketplace') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/truck/:id" element={<TruckDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // 3. Dedicated Jobs Subdomain Router (jobs.localhost or job.localhost)
  if (subdomain === 'jobs' || subdomain === 'job') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPortal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // 4. Chat Subdomain Router
  if (subdomain === 'chat') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatRoom />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // 5. Main / Default Router (Marketing & Auth & Dashboard & Jobs)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Role-Based Adaptive Dashboard Suite */}
        <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
        <Route path="/dashboard/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
        <Route path="/dashboard/driver" element={<DashboardLayout><DriverDashboard /></DashboardLayout>} />
        <Route path="/dashboard/fleet" element={<DashboardLayout><FleetOwnerDashboard /></DashboardLayout>} />
        <Route path="/dashboard/inventory" element={<DashboardLayout><TruckSellerDashboard /></DashboardLayout>} />
        <Route path="/dashboard/admin" element={<DashboardLayout><AdminDashboard /></DashboardLayout>} />
        
        <Route path="/jobs" element={<JobsPortal />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
