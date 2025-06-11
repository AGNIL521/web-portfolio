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
          <strong>Intern - Cybersecurity, DGAPR</strong> (Aug 2024 – Sep 2024, Rabat)<br />
          <ul>
            <li>Developed an Intrusion Prevention and Detection System (IPS/IDS) to detect, analyze, and block cyber threats in real-time.</li>
            <li>Implemented network security measures: firewall configuration, access controls, and monitoring tools to protect against internal and external threats.</li>
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
      <h3>Technical Skills</h3>
      <ul className="resume__skills">
        <li>C/C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Linux</li>
        <li>Docker</li>
        <li>Git/GitHub</li>
        <li>Wireshark</li>
        <li>Cloud Security</li>
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
      </ul>
    </div>
    <div className="resume__section">
      <h3>Cybersecurity</h3>
      <ul className="resume__skills">
        <li>IDS</li>
        <li>Threat Management</li>
        <li>Network Hardening</li>
        <li>Firewalls</li>
        <li>Access Controls</li>
      </ul>
    </div>
    <div className="resume__actions">
      <a 
        href={`${process.env.PUBLIC_URL}/assets/ILYASS_AGNAOU-RESUME-ENG.pdf`}
        download="ILYASS_AGNAOU-RESUME-ENG.pdf"
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
