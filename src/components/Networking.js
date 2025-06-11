import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaCertificate, FaUsers, FaLaptopCode, FaUserShield } from 'react-icons/fa';
import '../styles/Networking.css';

const Networking = () => {
  return (
    <section id="networking" className="networking-section">
      <div className="container">
        <h2 className="section-title">Networking & Community</h2>
        <p className="section-subtitle">Connecting with professionals and contributing to the tech community</p>
        
        <div className="networking-grid">
          {/* Professional Communities */}
          <div className="networking-card">
            <div className="card-icon">
              <FaUsers />
            </div>
            <h3>Professional Communities</h3>
            <ul className="networking-list">
              <li>
                <strong>Credly Certification Network</strong>
                <p>Active member showcasing cybersecurity and IT certifications</p>
              </li>
              <li>
                <strong>IBM SkillsBuild Community</strong>
                <p>Participant in advanced cybersecurity training programs</p>
              </li>
              <li>
                <strong>Cisco Networking Academy</strong>
                <p>Engaged in network security courses and challenges</p>
              </li>
              <li>
                <strong>OWASP Local Chapter</strong>
                <p>Regular attendee of web application security meetups</p>
              </li>
            </ul>
          </div>
          
          {/* Certifications & Learning */}
          <div className="networking-card">
            <div className="card-icon">
              <FaCertificate />
            </div>
            <h3>Certifications & Learning</h3>
            <div className="certifications-grid">
              <div className="certification-category">
                <h4>Cybersecurity</h4>
                <ul>
                  <li>IBM Cybersecurity Analyst Professional</li>
                  <li>Cisco Cybersecurity Essentials</li>
                  <li>CompTIA Security+ (In Progress)</li>
                </ul>
              </div>
              <div className="certification-category">
                <h4>Networking</h4>
                <ul>
                  <li>Cisco CCNA (Pursuing)</li>
                  <li>Network+ Fundamentals</li>
                  <li>Cloud Security Principles</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Open Source & Projects */}
          <div className="networking-card">
            <div className="card-icon">
              <FaLaptopCode />
            </div>
            <h3>Open Source & Projects</h3>
            <ul className="networking-list">
              <li>
                <strong>GitHub Contributions</strong>
                <p>Active contributor to security-related open source projects</p>
              </li>
              <li>
                <strong>Personal Projects</strong>
                <p>Developing cybersecurity tools and educational content</p>
              </li>
              <li>
                <strong>Bug Bounty Programs</strong>
                <p>Participant in various security testing initiatives</p>
              </li>
            </ul>
          </div>
          
          {/* Professional Socials */}
          <div className="networking-card">
            <div className="card-icon">
              <FaUserShield />
            </div>
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/your-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a 
                href="https://github.com/your-github" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://twitter.com/your-twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <FaTwitter /> Twitter
              </a>
              <a 
                href="https://www.credly.com/users/your-credly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link credly"
              >
                <FaCertificate /> Credly Profile
              </a>
            </div>
            
            <div className="documents-section">
              <h4>Download Documents</h4>
              <div className="document-buttons">
                <a 
                  href="/assets/ILYASS_AGNAOU-RESUME-ENG.pdf" 
                  className="btn btn-primary"
                  download="Ilyass_Agnaou_Resume.pdf"
                >
                  <FaCertificate /> Download Resume
                </a>
                <a 
                  href="/assets/Edit Profile - Credly.pdf" 
                  className="btn btn-secondary"
                  download="Ilyass_Agnaou_Credly_Certificates.pdf"
                >
                  <FaCertificate /> Download Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Networking;
