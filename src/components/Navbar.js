import React, { useState, useEffect, useRef } from 'react';
import { FaTerminal } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'resume', 'projects', 'certifications', 'achievements', 'cover-letter', 'hidden-job-market', 'contact'];
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
    setIsMobileMenuOpen(prev => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && 
          menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when a link is clicked
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
    { id: 'cover-letter', label: 'Cover Letter' },
    { id: 'hidden-job-market', label: 'Hidden Job Market' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      ref={navbarRef}
      aria-label="Main navigation"
    >
      <div className="container navbar__content">
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className="navbar__logo"
          onClick={() => {
            setActiveSection('home');
            closeMobileMenu();
          }}
          aria-label="Go to home"
        >
          <FaTerminal className="navbar__logo-icon" />
          <span>Ilyass Agnaou</span>
          <span className="navbar__cursor">_</span>
        </Link>
        
        <button 
          ref={menuButtonRef}
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        
        <ul 
          id="main-navigation"
          className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--open' : ''}`}
          role="navigation"
        >
          {navLinks.map((link) => (
            <li key={link.id} className="navbar__nav-item">
              <Link
                to={link.id}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                className={`navbar__nav-link ${activeSection === link.id ? 'navbar__nav-link--active' : ''}`}
                onClick={() => {
                  setActiveSection(link.id);
                  closeMobileMenu();
                }}
                activeClass="navbar__nav-link--active"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
