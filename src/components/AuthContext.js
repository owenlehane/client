import React, { createContext, useState, useContext } from 'react';

// Create a context for the authentication state
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Provider component that wraps your app and makes an auth object available to any child component that calls useAuth().
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
