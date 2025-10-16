import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "sethimanya2005@gmail.com",
      link: "mailto:sethimanya2005@gmail.com"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "profile-manya",
      link: "https://www.linkedin.com/in/profile-manya/"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "Manyasethi07",
      link: "https://github.com/Manyasethi07"
    },
    {
      icon: "fas fa-code",
      title: "LeetCode",
      value: "manyasethi07",
      link: "https://leetcode.com/u/manyasethi07"
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content" ref={contactRef}>
          <div className="contact-intro">
            <p>
              I'm always interested in new opportunities and collaborations. Feel free to reach out 
              if you'd like to discuss potential projects or just want to say hello!
            </p>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <a 
                    href={info.link} 
                    className="contact-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you for your message! I will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
