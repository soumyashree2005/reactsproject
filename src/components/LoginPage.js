import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('ArtistS@gmail.com');
  const [password, setPassword] = useState('hello123');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <p>Welcome back !!</p>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <a href="#">Forget Password?</a>
        <button type="submit">Login</button>
        <p>Don't have an account yet? <a href="#">Sign up for free</a></p>
      </form>
    </div>
  );
}

export default LoginPage;
