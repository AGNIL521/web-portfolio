import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaDownload } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiDownload } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Add animation class to hero content after component mounts
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
      heroContent.classList.add('animate-in');
    }

    // Cleanup function
    return () => {
      if (heroContent) {
        heroContent.classList.remove('animate-in');
      }
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* Animated background elements */}
      <div className="hero__bg-elements">
        <ParticlesBackground count={40} />
        <div className="hero__bg-grid">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="hero__grid-line"></div>
          ))}
        </div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__profile-container">
            <div className="hero__profile-cyber">
              <div className="hero__cyber-border">
                <svg viewBox="0 0 200 200" className="hero__cyber-svg">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#cyber-gradient-1)" strokeWidth="1" strokeDasharray="8 4" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#cyber-gradient-2)" strokeWidth="1" strokeDasharray="4 8" />
                  <rect x="70" y="70" width="60" height="60" fill="none" stroke="url(#cyber-gradient-1)" strokeWidth="1" rx="8" />
                </svg>
                <div className="hero__profile-img-container">
                  <img 
                    src={require('../assets/profile-placeholder.png')} 
                    alt="Ilyass Agnaou" 
                    className="hero__profile-img" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__greeting">Hi, I'm</span>
              <span className="hero__name">Ilyass Agnaou</span>
            </h1>
            
            <h2 className="hero__subtitle">
              <span className="hero__role">Cybersecurity Engineer</span>
              <span className="hero__divider">/</span>
              <span className="hero__role">Digital Trust Specialist</span>
            </h2>
            
            <p className="hero__description">
              Passionate about securing digital infrastructures through innovative cybersecurity solutions. 
              Specializing in vulnerability assessment, secure system design, and network defense strategies.
            </p>
            
            <div className="hero__cta-container">
              <a 
                href="/assets/ILYASS_AGNAOU-RESUME-ENG.pdf" 
                className="hero__cta btn--primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiFileText className="hero__cta-icon" />
                <span>View Resume</span>
              </a>
              <a 
                href="/assets/ILYASS_AGNAOU-RESUME-ENG.pdf" 
                className="hero__cta btn--outline"
                download="Ilyass_Agnaou_Resume.pdf"
              >
                <FiDownload className="hero__cta-icon" />
                <span>Download CV</span>
              </a>
              <a 
                href="/assets/Edit Profile - Credly.pdf" 
                className="hero__cta btn--outline"
                download="Ilyass_Agnaou_Credly_Certificates.pdf"
              >
                <FiDownload className="hero__cta-icon" />
                <span>Certificates</span>
              </a>
            </div>
            
            <div className="hero__social">
              <a 
                href="mailto:agnaouilyas4@gmail.com" 
                className="hero__social-link"
                aria-label="Email"
              >
                <FiMail className="hero__social-icon" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ilyass-agnaou" 
                className="hero__social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="hero__social-icon" />
              </a>
              <a 
                href="https://github.com/AGNIL521" 
                className="hero__social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub className="hero__social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG Gradients */}
      <svg width="0" height="0" className="hero__gradients">
        <defs>
          <linearGradient id="cyber-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f3ff" />
            <stop offset="100%" stopColor="#00ff5a" />
          </linearGradient>
          <linearGradient id="cyber-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00a8ff" />
            <stop offset="100%" stopColor="#00f3ff" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;
