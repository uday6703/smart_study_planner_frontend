import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
  }}>
    <div style={{
      background: '#fff',
      borderRadius: '18px',
      boxShadow: '0 6px 32px rgba(25, 118, 210, 0.10)',
      padding: '48px 36px 36px 36px',
      maxWidth: '420px',
      width: '100%',
      textAlign: 'center',
      animation: 'fadeIn 0.7s',
    }}>
      <h1 style={{
        color: '#1976d2',
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '18px',
        letterSpacing: '1px',
      }}>Smart Study Planner</h1>
      <p style={{
        color: '#333',
        fontSize: '1.15rem',
        marginBottom: '32px',
      }}>
        Divide your study time smartly among subjects!<br />
        <span style={{ color: '#1976d2', fontWeight: 500 }}>Plan. Focus. Succeed.</span>
      </p>
      <Link to="/dashboard">
        <button style={{
          background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '14px 36px',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
          cursor: 'pointer',
          transition: 'background 0.2s, transform 0.1s',
          marginBottom: '4px',
        }}
        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1565c0 60%, #1976d2 100%)'}
        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)'}
        >
          Create Plan
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
