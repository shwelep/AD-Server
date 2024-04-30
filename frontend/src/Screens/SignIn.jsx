import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) { // Check for non-200 status codes
        throw new Error(`Login failed with status: ${response.status}`);
      }

      const data = await response.json(); // Parse response as JSON

      // Handle successful login (e.g., store token, redirect, etc.)
      console.log('Login successful:', data); // Log for debugging
      navigate('/dashboard'); // Navigate to dashboard programmatically
    } catch (error) {
      console.error('An error occurred during login:', error);
      // Handle login errors (e.g., display error message)
    }

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Login</button>
        <p>Don't have an account? <Link to={"/sign-up"}>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default SignIn
