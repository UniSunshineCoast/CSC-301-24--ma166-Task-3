import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';
import '../styles/Login.css';

// Login component for user authentication
const Login = () => {
  // State variables for username, password, error message, and navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Function to handle login attempt
  const handleLogin = async () => {
    // Check credentials and perform login based on username and password
    if (username === 'user' && password === 'password') {
      login(false); // Normal user login
      navigate('/home'); // Navigate to home page after successful login
    } else if (username === 'admin' && password === 'adminpassword') {
      login(true); // Admin login
      navigate('/home'); // Navigate to home page after successful login
    } else {
      setError('Invalid credentials'); // Set error message for invalid login attempt
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Display error message if there's any */}
      {error && <div className="error-message">{error}</div>}
      {/* Login form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
