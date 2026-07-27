import DriverDashboard from './DriverDashboard';
import FleetOwnerDashboard from './FleetOwnerDashboard';
import TruckSellerDashboard from './TruckSellerDashboard';
import AdminDashboard from './AdminDashboard';
import { useAuth } from '../../context/AuthContext';

export default function DashboardHome() {
  const { user } = useAuth();
  const role = user?.user_role || 'Driver';

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
