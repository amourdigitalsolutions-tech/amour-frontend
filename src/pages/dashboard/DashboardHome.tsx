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
      }
    });
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
