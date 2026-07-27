import { API_BASE_URL as BASE_URL } from './api';

export const getVehicles = async () => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}/marketplace/vehicles/`, {
    headers
  });

  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

export const getVehicleDetails = async (id: string) => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}/marketplace/vehicles/${id}/`, {
    headers
  });

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle details');
  }
  return response.json();
};
