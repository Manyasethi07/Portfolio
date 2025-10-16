import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Manyasethi07",
      icon: "🐙",
      color: "#333"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/profile-manya/",
      icon: "💼",
      color: "#0077B5"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/manyasethi07",
      icon: "⚡",
      color: "#FFA116"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Manya Sethi. All Rights Reserved.</p>
          </div>
          
          <div className="footer-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ '--hover-color': social.color }}
                title={social.name}
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>Built with ❤️ using React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
