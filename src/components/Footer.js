import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} Ilyass Agnaou. All rights reserved.
    </div>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/ilyass-agnaou" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/AGNIL521" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
