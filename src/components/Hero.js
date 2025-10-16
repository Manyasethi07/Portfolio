import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content-wrapper">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">MANYA SETHI</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science Engineering Student & Aspiring Developer
          </p>
          <p className="hero-description">
            Passionate about technology and innovation, with a strong foundation in programming and problem-solving.
          </p>
          
          {/* Social Icons - Above View My Work Button */}
          <div className="hero-social-icons">
            <a href="mailto:sethimanya2005@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/profile-manya/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Manyasethi07" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
          </div>
        </div>
        
        {/* Right Photo Section */}
        <div className="hero-photo-section">
          <div className="photo-container">
            <img src="/mPhoto.jpg" alt="Manya Sethi" className="profile-photo" />
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="floating-card card-2">
          <i className="fas fa-laptop-code"></i>
          <span>Develop</span>
        </div>
        <div className="floating-card card-3">
          <i className="fas fa-rocket"></i>
          <span>Launch</span>
        </div>
      </div>

      {/* Scroll Indicator - Moved to bottom */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
