import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={() => handleNavClick('home')}>
            PORTFOLIO
          </a>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#certifications" 
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={() => handleNavClick('certifications')}
            >
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => handleNavClick('education')}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#achievements" 
              className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
              onClick={() => handleNavClick('achievements')}
            >
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
