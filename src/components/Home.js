import React from 'react';
import { useAuth } from './AuthContext';

const Home = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    fetch('http://localhost:3001/auth/logout')
      .then(() => {
        logout();
        window.location.href = '/';
      })
      .catch(err => console.error('Logout failed', err));
  };

  const handleMatchmaking = () => {
    // You might want to add functionality here for what happens when the matchmaking button is clicked
    console.log('Matchmaking button clicked');
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <h1>Welcome Home</h1>
      <p>You are logged in with GitHub.</p>
      <button onClick={handleMatchmaking} className="button matchmaking-button">Find a Match</button>
    </div>
  );
};

export default Home;

