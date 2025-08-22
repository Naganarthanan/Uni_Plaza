import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#1976d2' }}>Club Login System</h1>
      <p>Testing basic React app...</p>
      
      <div style={{ 
        margin: '40px auto', 
        maxWidth: '400px', 
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
      }}>
        <h2>Simple Login Form</h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label>Email:</label>
            <input 
              type="email" 
              placeholder="Enter email"
              style={{ 
                width: '100%', 
                padding: '8px', 
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="Enter password"
              style={{ 
                width: '100%', 
                padding: '8px', 
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
