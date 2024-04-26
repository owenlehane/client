import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Pages.css';

const GitHubLogin = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = () => {
      window.location.href = 'http://localhost:3001/auth/github';
    };

    return (
        
        <div className="container">
      <h2>Welcome to Our App</h2>
      <button onClick={handleLogin} className="button">
        <i className="fab fa-github"></i> Log in with GitHub
      </button>
      <footer>
  <div class="footer-content">
    <p>Created by:</p>
    <p>Owen Lehane</p>
    <p>Stephen Manning</p>
    <p>© 2024 Chess Makers. All rights reserved.</p>
    <div class="social-links">
      <a href="https://www.facebook.com/company" target="_blank">Facebook</a>
      | <a href="https://www.twitter.com/company" target="_blank">Twitter</a>
      | <a href="https://www.instagram.com/company" target="_blank">Instagram</a>
    </div>
  </div>
</footer>

    </div>
    );
};

export default GitHubLogin;

