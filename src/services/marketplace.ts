import { API_BASE_URL as BASE_URL } from './api';
import { fetchWithAuth } from './auth';

export const getVehicles = async (filters: Record<string, string> = {}) => {
  const query = new URLSearchParams(filters).toString();
  const url = query ? `${BASE_URL}/marketplace/vehicles/?${query}` : `${BASE_URL}/marketplace/vehicles/`;
  
  const response = await fetchWithAuth(url);

  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  return response.json();
};

export const getVehicleDetails = async (id: string) => {
  const response = await fetchWithAuth(`${BASE_URL}/marketplace/vehicles/${id}/`);

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle details');
  }
  return response.json();
};
