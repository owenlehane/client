import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication status on initial load
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');  // Store authentication status
    setIsAuthenticated(true);  // Update state
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');  // Clear the stored authentication status
    setIsAuthenticated(false);  // Update state to not authenticated
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

