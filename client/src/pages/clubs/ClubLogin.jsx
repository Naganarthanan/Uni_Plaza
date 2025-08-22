import React, { useState } from 'react';

const ClubLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    
    // Simulate successful login
    if (onLoginSuccess) {
      onLoginSuccess({ email, clubName: 'Test Club' });
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#333', margin: '0 0 8px 0' }}>
            Club Login
          </h2>
          <p style={{ color: '#666', margin: '0', fontSize: '16px' }}>
            Access your club dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2d3a4a' }}>
              Email Address <span style={{ color: '#d32f2f' }}>*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #cfd8dc',
                borderRadius: '6px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your club email"
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#2d3a4a' }}>
              Password <span style={{ color: '#d32f2f' }}>*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #cfd8dc',
                borderRadius: '6px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#1976d2', textDecoration: 'none' }}>
              Forgot your password?
            </a>
          </p>
          <p style={{ margin: '0', color: '#666' }}>
            Need help? <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#1976d2', textDecoration: 'none' }}>Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubLogin;
