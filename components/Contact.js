import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      id: 1,
      type: "Email",
      value: "2220981.cse.coe@cgc.edu.in",
      link: "mailto:2220981.cse.coe@cgc.edu.in",
      icon: "📧",
      color: "#FF6B9D"
    },
    {
      id: 2,
      type: "LinkedIn",
      value: "profile-manya",
      link: "https://www.linkedin.com/in/profile-manya/",
      icon: "💼",
      color: "#0077B5"
    },
    {
      id: 3,
      type: "GitHub",
      value: "Manyasethi07",
      link: "https://github.com/Manyasethi07",
      icon: "🐙",
      color: "#333"
    },
    {
      id: 4,
      type: "LeetCode",
      value: "manyasethi07",
      link: "https://leetcode.com/u/manyasethi07",
      icon: "⚡",
      color: "#FFA116"
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content" ref={contactRef}>
          <div className="contact-intro">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <div 
                key={contact.id} 
                className="contact-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="contact-icon"
                  style={{ backgroundColor: contact.color }}
                >
                  {contact.icon}
                </div>
                
                <div className="contact-details">
                  <h4>{contact.type}</h4>
                  <a 
                    href={contact.link} 
                    target={contact.type !== "Email" ? "_blank" : "_self"}
                    rel={contact.type !== "Email" ? "noopener noreferrer" : ""}
                    className="contact-link"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-cta">
            <p>Ready to start a conversation?</p>
            <a 
              href="mailto:2220981.cse.coe@cgc.edu.in" 
              className="btn btn-primary"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
