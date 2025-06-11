import React, { useState } from 'react';
import { FaFileAlt, FaBriefcase, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import '../styles/CoverLetter.css';

const CoverLetter = () => {
  const [activeTab, setActiveTab] = useState('cover');
  
  // Sample job description - replace with actual job details
  const jobDescription = `
  About the Job (PwC SOC Analyst N1)
La cybersécurité chez PwC, c’est avant tout une aventure. Celle d’une équipe qui se construit depuis plus de dix ans, sur la base d'une légitimité acquise par un effort constant sur la compétence et la pertinence (qu’elle soit technologique ou non), sur une force de frappe à l’international...

Key Responsibilities:

Monitor and analyze real-time security alerts
Investigate suspicious activity and anomalies
Analyze logs from multiple sources
Document findings thoroughly
Record incident-related artifacts in client tracking systems

Profile Sought:

Bac +3 in Cybersecurity or related field
Minimum 1 year experience
Experience with SIEM tools (Sentinel, Splunk), EDR (Microsoft Defender, TrendMicro), NIDS, HIDS, SOAR
Knowledge of OS environments (Windows, macOS, Linux)
Networking knowledge (TCP, UDP, ICMP, BGP, MPLS)
Strong written and verbal communication skills
Fluency in English (written and spoken)

Certifications Preferred:

GIAC Certified Incident Handler (GCIH)
EC-Council’s Certified Incident Handler (ECIH)
Microsoft SC-200
`;

  // Sample cover letter - replace with your actual cover letter
  const coverLetter = `
  Ilyass Agnaou
  88 avenue lalla asmae
  Sale, Morocco
  agnaouilyas4@gmail.com
  +212 649 506 084
  
  
  Dear Hiring Manager,
I am writing to express my strong interest in the SOC Analyst Level 1 position at PwC au Maroc . As a student specializing in Cybersecurity and Digital Trust at ENSET, with hands-on experience in intrusion detection and network hardening, I am eager to contribute to your team’s mission of safeguarding digital infrastructures.
During my recent internship at DGAPR , I developed and implemented a real-time Intrusion Detection System (IDS) that monitored and analyzed network traffic for threats. This experience gave me practical exposure to threat detection, log analysis, and documentation of security events — all core components of a SOC analyst’s responsibilities.
I bring solid technical knowledge in:
SIEM tools : I’ve worked with Python-based logging frameworks and explored Splunk through personal projects.
Network Protocols : I understand TCP/IP, ICMP, DNS , and other foundational protocols critical for detecting malicious behavior.
Operating Systems : Proficient in Linux , with familiarity in Windows environments.
Tools : Experienced with Wireshark , Docker , Git , and Scapy for network scanning and packet analysis.
Additionally, I am currently preparing for the Microsoft SC-200 certification , and I am committed to continuing my professional development by obtaining GCIH or ECIH credentials to strengthen my incident handling capabilities.
What excites me most about PwC is its reputation as a leader in cybersecurity innovation and its commitment to building a collaborative, learning-driven culture. I would be honored to join such a forward-thinking team and contribute to protecting clients’ digital assets around the clock.
Thank you for considering my application. I look forward to the opportunity to further discuss how my background and enthusiasm align with the needs of your SOC team.
Sincerely,

Ilyass Agnaou
 Email: agnaouilyas4@gmail.com
 Phone: +212 649 605 084
LinkedIn: linkedin.com/in/ilyass-agnaou
 GitHub: github.com/ilyassagnaou

  `;

  return (
    <section id="cover-letter" className="cover-letter-section">
      <div className="container">
        <h2 className="section-title">Cover Letter & Job Application</h2>
        <div className="cover-letter-tabs">
          <button 
            className={`tab-btn ${activeTab === 'cover-letter' ? 'active' : ''}`}
            onClick={() => setActiveTab('cover-letter')}
          >
            Cover Letter
          </button>
          <button 
            className={`tab-btn ${activeTab === 'job-description' ? 'active' : ''}`}
            onClick={() => setActiveTab('job-description')}
          >
            Job Description
          </button>
        </div>
        
        <div className="cover-letter-content">
          {activeTab === 'cover-letter' ? (
            <div className="cover-letter">
              <div className="cover-letter-text">
                {coverLetter.split('\n').map((line, index) => (
                  <p key={index} className="cover-letter-line">
                    {line || <br />}
                  </p>
                ))}
              </div>
              <div className="cover-letter-actions">
                <a 
                  href="#" 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                >
                  Print or Save as PDF
                </a>
                <a 
                  href="#" 
                  className="btn btn-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    const blob = new Blob([coverLetter], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Ilyass_Agnaou_Cover_Letter.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }}
                >
                  Download as TXT
                </a>
              </div>
            </div>
          ) : (
            <div className="job-description">
              <div className="job-description-text">
                {jobDescription.split('\n').map((line, index) => (
                  <p key={index} className={line.trim() === '' ? 'job-line-spacing' : ''}>
                    {line || <br />}
                  </p>
                ))}
              </div>
              <div className="job-actions">
                <a 
                  href="mailto:recruitment@example.com?subject=Application for SOC Analyst N1 Position" 
                  className="btn btn-primary"
                >
                  Apply Now <FaExternalLinkAlt className="icon-right" />
                </a>
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    // Save job to localStorage or implement your save functionality
                    alert('Job saved for later!');
                  }}
                >
                  Save for Later
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
