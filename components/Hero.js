import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Manya Sethi</span>
            </h1>
            <p className="hero-subtitle">Computer Science Engineering Student</p>
            <p className="hero-description">
              Passionate about technology and innovation, with a strong foundation in programming 
              and problem-solving. I love creating solutions that make a difference.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-icon">💻</div>
              <div className="card-text">Code</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovate</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🎯</div>
              <div className="card-text">Solve</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
