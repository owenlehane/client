import React from 'react';
import GitHubLogin from '/Users/owenlehane/my-app/client/src/components/GitHubLogin' 
import Home from '/Users/owenlehane/my-app/client/src/components/Home'
import { AuthProvider, useAuth } from './AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<GitHubLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;


