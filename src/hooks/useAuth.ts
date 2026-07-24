import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Logic to check JWT tokens will go here
  }, []);

  return { isAuthenticated };
}
