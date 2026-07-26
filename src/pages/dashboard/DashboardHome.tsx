import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/auth';
import DriverDashboard from './DriverDashboard';
import FleetOwnerDashboard from './FleetOwnerDashboard';
import TruckSellerDashboard from './TruckSellerDashboard';
import AdminDashboard from './AdminDashboard';

export default function DashboardHome() {
  const [role, setRole] = useState<string>('Driver');

  useEffect(() => {
    getCurrentUser().then(user => {
      if (user && user.user_role) {
        setRole(user.user_role);
      } else {
        const demoRole = localStorage.getItem('demo_role') || 'Driver';
        setRole(demoRole);
      }
    });

    // Event listener to react when role switcher in layout is used
    const checkRole = () => {
      const demoRole = localStorage.getItem('demo_role') || 'Driver';
      setRole(demoRole);
    };

    window.addEventListener('storage', checkRole);
    const interval = setInterval(checkRole, 500);

    return () => {
      window.removeEventListener('storage', checkRole);
      clearInterval(interval);
    };
  }, []);

  if (role === 'Fleet Owner') {
    return <FleetOwnerDashboard />;
  }
  if (role === 'Truck Seller') {
    return <TruckSellerDashboard />;
  }
  if (role === 'Admin') {
    return <AdminDashboard />;
  }

  return <DriverDashboard />;
}
