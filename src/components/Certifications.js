import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-content" style={{ display: 'flex', justifyContent: 'center' }}>
        <a 
          href="https://www.credly.com/users/ilyas-agnaou" 
          target="_blank" 
          rel="noopener noreferrer"
          className="certification-category"
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '3rem',
            maxWidth: '500px',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>Verified Certifications</h3>
          <p style={{ color: '#caffd0', textAlign: 'center', marginBottom: '1.5rem' }}>
            View my verified badges and certifications on Credly
          </p>
          <div style={{ 
            background: '#00ff5a', 
            color: '#0d1a12', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            marginTop: '1rem'
          }}>
            View on Credly
          </div>
        </a>
      </div>
    </section>
  );
};

export default Certifications;
