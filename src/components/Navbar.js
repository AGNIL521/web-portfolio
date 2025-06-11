import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'resume', 'projects', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__content">
          <a href="#home" className="navbar__logo">
            <FaTerminal className="navbar__logo-icon" />
            <span>Ilyass Agnaou</span>
            <span className="navbar__cursor">_</span>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className={`navbar__link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="navbar__link-text">{link.label}</span>
                  <span className="navbar__link-underline"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="navbar__mobile-toggle" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Mobile Menu Overlay */}
          <div className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
            <div className="navbar__mobile-menu" onClick={e => e.stopPropagation()}>
              <ul className="navbar__mobile-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`}
                      className={`navbar__mobile-link ${activeSection === link.id ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Border Bottom */}
      <div className="navbar__border">
        <div className="navbar__border-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
