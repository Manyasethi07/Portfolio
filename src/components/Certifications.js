import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "NPTEL Certificate in DBMS",
      year: "2025",
      icon: "fas fa-certificate",
      description: "Database Management Systems certification from NPTEL"
    },
    {
      id: 2,
      title: "Python Certification – Infosys Springboard",
      year: "2025",
      icon: "fab fa-python",
      description: "Python programming certification from Infosys"
    },
    {
      id: 3,
      title: "Training Completion Certificate – Grazitti Interactive",
      year: "2024",
      icon: "fas fa-graduation-cap",
      description: "Professional training completion certificate"
    },
    {
      id: 4,
      title: "Smart India Hackathon Participation – CGC Landran",
      year: "2023",
      icon: "fas fa-trophy",
      description: "National level hackathon participation certificate"
    },
    {
      id: 5,
      title: "Campus Ambassador – Smarted",
      year: "2023",
      icon: "fas fa-user-tie",
      description: "Campus ambassador program completion"
    }
  ];

  const activities = [
    {
      id: 1,
      title: "Won a bronze medal on Annual Sports meet",
      year: "2024",
      description: "Achieved bronze medal in the annual sports meet competition"
    },
    {
      id: 2,
      title: "Management team member of Science Day",
      year: "2022",
      description: "Served as a key member of the management team for Science Day event"
    },
    {
      id: 3,
      title: "Anchored major college Events Participation",
      year: "2023",
      description: "Successfully hosted and anchored various college events and ceremonies"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        {/* Certifications */}
        <div className="certifications-subsection">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-icon">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-description">{cert.description}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra & Co-Curricular Activities */}
        <div className="activities-subsection">
          <h3 className="subsection-title">Extra & Co-Curricular Activities</h3>
          <div className="activities-timeline">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-year">{activity.year}</div>
                <div className="activity-content">
                  <h4 className="activity-title">{activity.title}</h4>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
