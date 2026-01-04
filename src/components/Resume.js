import React from 'react';
import '../styles/Resume.css';

const Resume = () => (
  <section className="resume" id="resume">
    <h2>Resume</h2>
    <div className="resume__section">
      <h3>Education</h3>
      <ul>
        <li>
          <strong>Cycle d’Ingénieur, ENSET – Université Hassan II</strong> (Sep 2023 – Jul 2026)<br />
          Specialization: Cybersecurity and Digital Trust
        </li>
        <li>
          <strong>CPGE Technologie et Science Industrielles, CPGE Salmane El Farissi</strong> (Sep 2021 – Jul 2023)<br />
          Preparatory Classes for Engineering Schools (TSI)
        </li>
      </ul>
    </div>
    <div className="resume__section">
      <h3>Work Experience</h3>
      <ul>
        <li>
          <strong>Cloud Security Architecture Intern, Barid Al Maghrib (Rabat)</strong> (July 2025 – Sept 2025)<br />
          <ul>
            <li>Designed and implemented a cloud security architecture for hosting services.</li>
            <li>Developed three specific architectures: Backup VM Hosting (isolated), Web/App Hosting (segmented), and Bastion Hosting (secure access).</li>
            <li>Integrated firewalls, access controls, and supervision tools.</li>
          </ul>
        </li>
        <li>
          <strong>Cybersecurity Intern, DGAPR (Rabat)</strong> (Aug 2024 – Sept 2024)<br />
          <ul>
            <li>Developed a real-time IDS/IPS system to detect and block threats.</li>
            <li>Implemented network security measures including firewall configuration and access control.</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="resume__section">
      <h3>Languages</h3>
      <ul className="resume__skills">
        <li>Arabic (Native)</li>
        <li>English (Fluent)</li>
        <li>French (Fluent)</li>
      </ul>
    </div>
    <div className="resume__section">
      <h3>Skills</h3>
      <ul className="resume__skills">
        <li>CyberOps (Cisco)</li>
        <li>Linux Administration (Red Hat)</li>
        <li>Blockchain</li>
        <li>AI Fundamentals</li>
        <li>Threat Intelligence</li>
        <li>SOC Operations</li>
        <li>Network Security</li>
        <li>English for IT</li>
      </ul>
    </div>
    <div className="resume__actions">
      <a 
        href="/web-portfolio/assets/ILYASS_AGNAOU_RESUME_ENG.pdf"
        download="Ilyass_Agnaou_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <i className="fas fa-download"></i> Download Full Resume (PDF)
      </a>
    </div>
  </section>
);

export default Resume;
