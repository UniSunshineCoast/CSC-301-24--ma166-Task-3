import React, { createContext, useState, useEffect } from 'react';

// Create a new context object
const AuthContext = createContext();

// AuthProvider component manages authentication state
export const AuthProvider = ({ children }) => {
  // State for isAdmin (default to value stored in localStorage or false if not present)
  const [isAdmin, setIsAdmin] = useState(() => {
    const storedAdminStatus = localStorage.getItem('isAdmin');
    return storedAdminStatus ? JSON.parse(storedAdminStatus) : false;
  });

  // State for isLoggedIn (default to value stored in localStorage or false if not present)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    return storedLoggedInStatus ? JSON.parse(storedLoggedInStatus) : false;
  });

  // useEffect hook to update localStorage whenever isAdmin state changes
  useEffect(() => {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [isAdmin]);

  // useEffect hook to update localStorage whenever isLoggedIn state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // Function to handle login action
  const login = (isAdminFlag) => {
    setIsAdmin(isAdminFlag); // Set isAdmin state based on isAdminFlag parameter
    setIsLoggedIn(true); // Set isLoggedIn state to true upon successful login
  };

  // Function to handle logout action
  const logout = () => {
    setIsAdmin(false); // Reset isAdmin state to false upon logout
    setIsLoggedIn(false); // Set isLoggedIn state to false upon logout
  };

  // Provide the AuthContext.Provider component with the value of isAdmin, isLoggedIn, login, and logout
  return (
    <AuthContext.Provider value={{ isAdmin, isLoggedIn, login, logout }}>
      {children} {/* Render the child components */}
    </AuthContext.Provider>
  );
};

export default AuthContext; // Export the AuthContext object
