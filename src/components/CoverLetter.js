import React, { useState } from 'react';
import { FaFileAlt, FaBriefcase, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import '../styles/CoverLetter.css';

const CoverLetter = () => {
  const [activeTab, setActiveTab] = useState('cover');
  
  // Sample job description - replace with actual job details
  const jobDescription = `
  Position: Junior Cybersecurity Analyst
  Company: TechSecure Solutions
  
  About the Role:
  We are seeking a passionate Junior Cybersecurity Analyst to join our team. You will be responsible for monitoring security access, conducting security assessments, and implementing security measures to protect our systems and data.
  
  Key Responsibilities:
  - Monitor security access and perform security assessments
  - Analyze security breaches to identify the root cause
  - Implement and maintain security protocols and procedures
  - Stay up-to-date with the latest security trends and technologies
  - Respond to security incidents and provide post-incident analysis
  
  Requirements:
  - Bachelor's degree in Computer Science or related field
  - Knowledge of cybersecurity frameworks and risk management
  - Familiarity with security technologies and tools
  - Strong problem-solving and analytical skills
  `;

  // Sample cover letter - replace with your actual cover letter
  const coverLetter = `
  [Your Name]
  [Your Address]
  [City, State, ZIP Code]
  [Your Email]
  [Your Phone Number]
  [Date]
  
  Hiring Manager
  TechSecure Solutions
  [Company Address]
  [City, State, ZIP Code]
  
  Dear Hiring Manager,
  
  I am excited to apply for the Junior Cybersecurity Analyst position at TechSecure Solutions. With a strong foundation in cybersecurity principles and hands-on experience in security analysis, I am eager to contribute to your team's mission of protecting critical systems and data.
  
  In my academic journey, I have developed expertise in network security, vulnerability assessment, and incident response. My participation in cybersecurity competitions and hands-on projects has honed my ability to identify and mitigate security threats effectively.
  
  I am particularly drawn to TechSecure Solutions' commitment to innovation in cybersecurity. I am excited about the opportunity to work with your team and contribute my skills in threat analysis and security implementation.
  
  I would welcome the opportunity to discuss how my background and skills align with your needs. Thank you for your time and consideration. I look forward to the possibility of contributing to your team.
  
  Sincerely,
  [Your Name]
  `;

  return (
    <section className="cover-letter section" id="cover-letter">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="text-gradient">Cover Letter</span> & Job Application
          </h2>
          <p className="section__subtitle">
            My application materials for the position I'm pursuing
          </p>
        </div>

        <div className="cover-letter__tabs">
          <button 
            className={`cover-letter__tab ${activeTab === 'cover' ? 'active' : ''}`}
            onClick={() => setActiveTab('cover')}
          >
            <FaFileAlt className="tab-icon" /> Cover Letter
          </button>
          <button 
            className={`cover-letter__tab ${activeTab === 'job' ? 'active' : ''}`}
            onClick={() => setActiveTab('job')}
          >
            <FaBriefcase className="tab-icon" /> Job Description
          </button>
          <a 
            href="/path-to-your-resume.pdf" 
            className="cover-letter__tab download-btn"
            download
          >
            <FaDownload className="tab-icon" /> Download PDF
          </a>
        </div>

        <div className="cover-letter__content">
          {activeTab === 'cover' ? (
            <div className="cover-letter__text">
              <h3>Cover Letter</h3>
              <div className="content-box">
                <pre>{coverLetter}</pre>
              </div>
            </div>
          ) : (
            <div className="job-description">
              <h3>Job Description</h3>
              <div className="content-box">
                <pre>{jobDescription}</pre>
              </div>
              <div className="apply-actions">
                <a 
                  href="#" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now <FaExternalLinkAlt className="icon-right" />
                </a>
                <button className="btn btn-outline">
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
