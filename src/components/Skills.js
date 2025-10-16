import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "C++", icon: "fas fa-code" },
        { name: "C", icon: "fas fa-code" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "fas fa-globe",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", icon: "fas fa-database" },
        { name: "DBMS", icon: "fas fa-server" }
      ]
    },
    {
      title: "Computer Science",
      icon: "fas fa-brain",
      skills: [
        { name: "DSA", icon: "fas fa-brain" },
        { name: "Networks", icon: "fas fa-network-wired" },
        { name: "Cyber Security", icon: "fas fa-shield-alt" },
        { name: "OS", icon: "fas fa-desktop" }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skills-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
