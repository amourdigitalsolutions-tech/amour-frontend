const BASE_URL = 'http://127.0.0.1:8000/api';

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
