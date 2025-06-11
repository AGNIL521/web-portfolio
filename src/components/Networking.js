import React from 'react';
import '../styles/Networking.css';

const Networking = () => {
  return (
    <section id="networking" className="networking-section">
      <div className="container">
        <h2 className="section-title">Networking Experience</h2>
        <div className="networking-content">
          <div className="networking-card">
            <h3>Professional Networking</h3>
            <ul className="networking-list">
              <li>Active member of local cybersecurity meetups and conferences</li>
              <li>Regular participant in Capture The Flag (CTF) competitions</li>
              <li>Engaged in online security communities (Reddit, Discord, etc.)</li>
              <li>Attended multiple cybersecurity workshops and training sessions</li>
            </ul>
          </div>
          
          <div className="networking-card">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Networking</h4>
                <ul>
                  <li>TCP/IP, DNS, DHCP, HTTP/HTTPS</li>
                  <li>VPN, Firewalls, IDS/IPS</li>
                  <li>Network scanning and analysis</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Security</h4>
                <ul>
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assessment</li>
                  <li>Security Auditing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="documents-section">
            <h3>Download Documents</h3>
            <div className="document-buttons">
              <a 
                href="/assets/ILYASS_AGNAOU-RESUME-ENG.pdf" 
                className="btn btn-primary"
                download="Ilyass_Agnaou_Resume.pdf"
              >
                Download Resume
              </a>
              <a 
                href="/assets/Edit Profile - Credly.pdf" 
                className="btn btn-secondary"
                download="Ilyass_Agnaou_Credly_Certificates.pdf"
              >
                Download Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Networking;
