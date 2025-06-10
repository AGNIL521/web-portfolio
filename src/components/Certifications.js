import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Badges</h2>
      <div className="certifications-grid">
        <div className="certification-category">
          <h3>IT & Cybersecurity</h3>
          <ul>
            <li>CyberOps Associate – Cisco (Jun 2025)</li>
            <li>Red Hat System Administration I (RH124-RHA) – Red Hat (Apr 2025)</li>
            <li>Red Hat System Administration II (RH134-RHA) – Red Hat (Apr 2025)</li>
            <li>Security Operations Center in Practice – IBM (Apr 2025)</li>
            <li>Cybersecurity Fundamentals – IBM SkillsBuild (May 2025)</li>
            <li>English for IT 1 & 2 – Cisco (Dec 2024 & Jun 2025)</li>
          </ul>
        </div>

        <div className="certification-category">
          <h3>AI & Machine Learning</h3>
          <ul>
            <li>Artificial Intelligence Fundamentals – IBM SkillsBuild (Apr 2025)</li>
            <li>Deep Learning – Future Proof (Skill Badge)</li>
            <li>Machine Learning (ML) – Future Proof (Skill Badge)</li>
            <li>Natural Language Processing (NLP) – Future Proof (Skill Badge)</li>
            <li>Computer Vision – Future Proof (Skill Badge)</li>
          </ul>
        </div>

        <div className="certification-category">
          <h3>Blockchain & Emerging Tech</h3>
          <ul>
            <li>Blockchain – Understanding Its Uses and Applications – Linux Foundation (May 2025)</li>
            <li>Blockchain – Future Proof (Skill Badge)</li>
            <li>Ansible – Future Proof (Skill Badge)</li>
          </ul>
        </div>

        <div className="certification-category">
          <h3>Other Technical</h3>
          <ul>
            <li>Getting Started with Threat Intelligence and Hunting – IBM (Apr 2025)</li>
            <li>Linux – Future Proof (Skill Badge)</li>
            <li>Red Hat Enterprise Linux (RHEL) – Future Proof (Skill Badge)</li>
          </ul>
        </div>
      </div>
      
      <div className="credly-profile-link">
        <a 
          href="https://www.credly.com/users/ilyas-agnaou" 
          target="_blank" 
          rel="noopener noreferrer"
          className="certification-link"
        >
          View All Badges on Credly
        </a>
      </div>
    </section>
  );
};

export default Certifications;
