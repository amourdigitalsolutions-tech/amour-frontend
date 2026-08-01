import { API_BASE_URL as BASE_URL } from './api';
import { fetchWithAuth } from './auth';

export const getVehicles = async (filters: Record<string, string> = {}) => {
  const response = await fetchWithAuth(`${BASE_URL}/marketplace/vehicles/`);

  if (!response.ok) {
    throw new Error('Failed to fetch vehicles');
  }
  const data = await response.json();
  let results = Array.isArray(data) ? data : (data.results || []);

  if (filters.make) {
    results = results.filter((v: any) => v.make?.toLowerCase().includes(filters.make.toLowerCase()));
  }
  if (filters.minPrice) {
    results = results.filter((v: any) => parseFloat(String(v.price || '0').replace(/[$,]/g, '')) >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    results = results.filter((v: any) => parseFloat(String(v.price || '0').replace(/[$,]/g, '')) <= Number(filters.maxPrice));
  }
  if (filters.minYear) {
    results = results.filter((v: any) => parseInt(String(v.year || '0'), 10) >= Number(filters.minYear));
  }
  if (filters.maxYear) {
    results = results.filter((v: any) => parseInt(String(v.year || '0'), 10) <= Number(filters.maxYear));
  }

  return Array.isArray(data) ? results : { ...data, results };
};

export const getVehicleDetails = async (id: string) => {
  const response = await fetchWithAuth(`${BASE_URL}/marketplace/vehicles/${id}/`);

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle details');
  }
  return response.json();
};
