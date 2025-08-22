import React, { useState } from 'react';
import ClubLogin from '../ClubLogin';
import ClubDashboard from '../ClubDashboard';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentClub, setCurrentClub] = useState(null);

  const handleLoginSuccess = (clubData) => {
    console.log('Login successful:', clubData);
    setIsAuthenticated(true);
    setCurrentClub(clubData);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    setIsAuthenticated(false);
    setCurrentClub(null);
  };

  console.log('ProtectedRoute render:', { isAuthenticated, currentClub });

  if (!isAuthenticated) {
    return <ClubLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <ClubDashboard currentClub={currentClub} onLogout={handleLogout} />;
};

export default ProtectedRoute;
