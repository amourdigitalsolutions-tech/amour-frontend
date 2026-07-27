import { API_BASE_URL as BASE_URL } from './api';

export const loginWithPhone = async (phone: string, password: string) => {
  const response = await fetch(`${BASE_URL}/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone_number: phone, password }),
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const rawError = JSON.stringify(errorData || {});
    
    if (rawError.includes('No active account found')) {
      throw new Error('error-auth-failed');
    }
    throw new Error('error-generic');
  }
  
  const data = await response.json();
  // Store tokens in local storage for ZTA persistence
  localStorage.setItem('access_token', data.access);
  localStorage.setItem('refresh_token', data.refresh);
  return data;
};

export const registerUser = async (data: { phone: string, password: string, role: string, lang: string }) => {
  const response = await fetch(`${BASE_URL}/users/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone_number: data.phone,
      password: data.password,
      user_role: data.role,
      language_preference: data.lang,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const rawError = JSON.stringify(errorData || {});
    
    if (rawError.includes('already exists')) {
      throw new Error('error-phone-exists');
    } else if (rawError.includes('too short') || rawError.includes('8 characters')) {
      throw new Error('error-password-short');
    } else {
      throw new Error('error-generic');
    }
  }
  
  
  return response.json();
};

let currentUserPromise: Promise<any> | null = null;

export const getCurrentUser = async () => {
  const token = localStorage.getItem('access_token');
  if (!token) return null;

  // If a request is already in flight, return that promise
  if (currentUserPromise) {
    return currentUserPromise;
  }

  currentUserPromise = fetch(`${BASE_URL}/users/me/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      return null;
    }
    return response.json();
  }).finally(() => {
    // Clear the cached promise so next time it fetches fresh data
    currentUserPromise = null;
  });

  return currentUserPromise;
};

export const updateUserProfile = async (profileData: Record<string, any>) => {
  const token = localStorage.getItem('access_token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(profileData)
  });

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }
  return response.json();
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
};
