import React from 'react';
import '../styles/Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__content">
      <div className="hero__profile-cyber">
        <img src={require('../assets/profile-placeholder.png')} alt="Profile" className="hero__profile-img" />
        <div className="hero__cyber-bg">
          <svg viewBox="0 0 120 120" width="100" height="100" className="hero__cyber-svg">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#00ffea" strokeWidth="2" strokeDasharray="8 4" />
            <circle cx="60" cy="60" r="40" fill="none" stroke="#0077ff" strokeWidth="1.5" strokeDasharray="4 6" />
            <rect x="45" y="45" width="30" height="30" fill="none" stroke="#00ffea" strokeWidth="1" rx="8" />
          </svg>
        </div>
      </div>
      <h1>Ilyass Agnaou</h1>
      <h2>Cybersecurity Engineer — Student in Cybersecurity and Digital Trust</h2>
      <p>Cybersecurity-focused Computer Engineering student passionate about secure system design, vulnerability detection, and network defense. Motivated to protect digital infrastructures and contribute to innovative cybersecurity projects.</p>
      <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        <a href="/assets/resume.pdf" className="hero__cta" target="_blank" rel="noopener noreferrer">View Resume</a>
        <a href="/assets/resume.pdf" className="hero__cta" download>Download Resume</a>
      </div>
      <div style={{ marginTop: '1.2rem', display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:agnaouilyas4@gmail.com">agnaouilyas4@gmail.com</a>
        <a href="https://www.linkedin.com/in/ilyass-agnaou" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/AGNIL521" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </section>
);

export default Hero;
