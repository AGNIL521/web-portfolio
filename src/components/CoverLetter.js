import React, { useState, useRef, useEffect } from 'react';
import { FaFileAlt, FaBriefcase, FaExternalLinkAlt, FaDownload, FaPrint, FaFilePdf, FaFileAlt as FaFileText } from 'react-icons/fa';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import '../styles/CoverLetter.css';

// PDF Document Component
const MyDocument = ({ content }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>
          {content}
        </Text>
      </View>
    </Page>
  </Document>
);

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 40,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
  },
});

const CoverLetter = () => {
  const [activeTab, setActiveTab] = useState('cover-letter');
  const [isClient, setIsClient] = useState(false);
  const coverLetterRef = useRef(null);
  const jobDescriptionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrint = () => {
    const content = activeTab === 'cover-letter' ? coverLetter : jobDescription;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>${activeTab === 'cover-letter' ? 'Cover Letter' : 'Job Description'}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; white-space: pre-wrap; }
            @media print { 
              @page { margin: 1cm; }
              body { padding: 0; }
            }
          </style>
        </head>
        <body>${content.replace(/\n/g, '<br>')}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };
  
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
        <p className="section-subtitle">Tailored application materials for the SOC Analyst position at PwC</p>
        
        <div className="cover-letter-tabs">
          <button 
            className={`tab-btn ${activeTab === 'cover-letter' ? 'active' : ''}`}
            onClick={() => setActiveTab('cover-letter')}
            aria-selected={activeTab === 'cover-letter'}
            aria-controls="cover-letter-content"
          >
            <FaFileAlt className="tab-icon" /> Cover Letter
          </button>
          <button 
            className={`tab-btn ${activeTab === 'job-description' ? 'active' : ''}`}
            onClick={() => setActiveTab('job-description')}
            aria-selected={activeTab === 'job-description'}
            aria-controls="job-description-content"
          >
            <FaBriefcase className="tab-icon" /> Job Description
          </button>
        </div>
        
        <div className="tab-content">
          <div 
            id="cover-letter-content"
            role="tabpanel"
            aria-labelledby="cover-letter-tab"
            className={`tab-pane ${activeTab === 'cover-letter' ? 'active' : ''}`}
            ref={coverLetterRef}
          >
            <div className="document-content">
              <div className="document-text">
                {coverLetter.split('\n').map((line, index) => (
                  <p key={index} className={line.trim() === '' ? 'empty-line' : ''}>
                    {line || <br />}
                  </p>
                ))}
              </div>
              <div className="document-actions">
                <button 
                  className="btn btn-primary"
                  onClick={handlePrint}
                >
                  <FaPrint /> Print
                </button>
                {isClient && (
                  <PDFDownloadLink
                    document={<MyDocument content={coverLetter} />}
                    fileName="Ilyass_Agnaou_Cover_Letter.pdf" 
                    className="btn btn-secondary"
                  >
                    {({ blob, url, loading, error }) => (
                      <span>
                        {loading ? 'Generating PDF...' : <><FaFilePdf /> Save as PDF</>}
                      </span>
                    )}
                  </PDFDownloadLink>
                )}
                <button 
                  className="btn btn-outline"
                  onClick={() => {
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
                  <FaFileText /> Download as TXT
                </button>
              </div>
            </div>
          </div>

          <div 
            id="job-description-content"
            role="tabpanel"
            aria-labelledby="job-description-tab"
            className={`tab-pane ${activeTab === 'job-description' ? 'active' : ''}`}
            ref={jobDescriptionRef}
          >
            <div className="document-content">
              <div className="document-text">
                <h3 className="job-title">SOC Analyst N1 - PwC Morocco</h3>
                {jobDescription.split('\n').map((line, index) => (
                  <p key={index} className={line.trim() === '' ? 'empty-line' : ''}>
                    {line || <br />}
                  </p>
                ))}
              </div>
              <div className="document-actions">
                <a 
                  href="mailto:recruitment@pwc.ma?subject=Application for SOC Analyst N1 Position" 
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt /> Apply Now
                </a>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
                    const job = {
                      id: 'pwc-soc-analyst-2024',
                      title: 'SOC Analyst N1',
                      company: 'PwC Morocco',
                      date: new Date().toISOString(),
                      description: jobDescription
                    };
                    if (!savedJobs.some(j => j.id === job.id)) {
                      savedJobs.push(job);
                      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
                      alert('Job saved successfully!');
                    } else {
                      alert('This job is already saved.');
                    }
                  }}
                >
                  <FaDownload /> Save for Later
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    const blob = new Blob([jobDescription], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'PwC_SOC_Analyst_Job_Description.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }}
                >
                  <FaFileText /> Save as TXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
