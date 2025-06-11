import React from 'react';
import '../styles/HiddenJobMarket.css';
import { FaLinkedin, FaGithub, FaTwitter, FaUserFriends, FaBuilding, FaUserTie } from 'react-icons/fa';

const HiddenJobMarket = () => {
  return (
    <section id="hidden-job-market" className="hidden-job-market">
      <div className="container">
        <h2 className="section-title">Hidden Job Market</h2>
        <p className="section-subtitle">Accessing unadvertised opportunities through strategic networking</p>
        
        <div className="hidden-job-content">
          <div className="strategy-cards">
            <div className="strategy-card">
              <div className="strategy-icon">
                <FaLinkedin />
              </div>
              <h3>Leverage LinkedIn</h3>
              <p>Optimize your profile with cybersecurity keywords and engage with industry content to increase visibility.</p>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View My Profile
              </a>
            </div>

            <div className="strategy-card">
              <div className="strategy-icon">
                <FaUserFriends />
              </div>
              <h3>Informational Interviews</h3>
              <p>Connect with professionals in target companies for insights and potential referrals.</p>
              <button className="btn btn-outline">
                Request Introduction
              </button>
            </div>

            <div className="strategy-card">
              <div className="strategy-icon">
                <FaBuilding />
              </div>
              <h3>Target Companies</h3>
              <p>Research and engage with companies that align with your cybersecurity career goals.</p>
              <button className="btn btn-outline">
                View My Target List
              </button>
            </div>
          </div>

          <div className="networking-tips">
            <h3>Networking Tips</h3>
            <ul>
              <li>Attend cybersecurity meetups and conferences</li>
              <li>Participate in online security communities</li>
              <li>Contribute to open-source security projects</li>
              <li>Follow up with new connections within 24 hours</li>
              <li>Offer value before asking for assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenJobMarket;
