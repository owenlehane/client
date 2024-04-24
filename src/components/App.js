import React from 'react';
import GitHubLogin from '/Users/owenlehane/my-app/client/src/components/GitHubLogin' 
import Home from '/Users/owenlehane/my-app/client/src/components/Home'
import { AuthProvider, useAuth } from './AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



// Private Route component adapted for v6
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <h1>Welcome to GitHub Auth Example</h1>
          <Routes>
            <Route path="/" element={<GitHubLogin />} />
            <Route path="/home" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }/>
            {/* Example of a redirected undefined route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


