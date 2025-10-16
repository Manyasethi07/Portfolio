import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-nav">
            <a href="#about" onClick={() => scrollToSection('about')}>About Me</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
            <a href="#achievements" onClick={() => scrollToSection('achievements')}>Achievements</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; 2025 Manya Sethi | All Rights Reserved</p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/Manyasethi07" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/profile-manya/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:sethimanya2005@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
