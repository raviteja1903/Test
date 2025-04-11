import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  

    if (!email || !password) {
      setError('Please fill both fields');
      return;
    }
    setError(''); 
    console.log('Logging in with:', { email, password, rememberMe });
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
              placeholder="Email"
              id="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}  
            />
            <label>Keep Me Logged In</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="login-options">
          <a href="#">Forgot Password</a> | <a href="#"> Register</a>
        </div>
        <div className="social-login">
          <span>Or Login Using:</span>
          <div className="social-icons">
            <button className="facebook">f</button>
            <button className="twitter">t</button>
            <button className="google">G</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
