import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <p>You are logged in with GitHub.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

//Simple home page with logout
const handleLogout = () => {
  fetch('http://localhost:3001/auth/logout')
    .then(() => {
      window.location.href = '/';
    })
    .catch(err => console.error('Logout failed', err));
};




export default Home;
