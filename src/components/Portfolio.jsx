import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setDarkMode(theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const experience = [
    {
      company: "Shinkansen",
      position: "Software Engineer",
      period: "January 2024 - Present",
      location: "Remote - Peru",
      description: "Part of the development team at Shinkansen, a Chilean fintech that connects companies with the banking system to automate payment flows and treasury operations.",
      responsibilities: [
        "Support the development of Shinkansen's products and provide customer assistance",
        "Develop and maintain backend systems for payment automation",
        "Work with treasury management and banking integrations",
        "Collaborate with cross-functional teams in a startup environment"
      ],
      technologies: ["Elixir", "Phoenix", "Oban", "GCP", "Banking APIs"]
    },
    {
      company: "FractalUp",
      position: "Backend Developer Jr",
      period: "August 2022 - January 2024",
      location: "Remote - Peru",
      description: "Backend development team leader at FractalUp. Responsible for server administration and implementation of new platform services.",
      responsibilities: [
        "Led backend development team and managed platform services",
        "Tested and integrated third-party services including AWS Rekognition (AI), PayPal, Rapyd, and Izipay payment gateways",
        "Developed real-time chat functionality using GraphQL subscriptions with roles and permissions system",
        "Created automated processes for chat analytics and user engagement metrics",
        "Implemented machine learning integrations for image recognition and customer support",
        "Provided platform support and resolved performance issues"
      ],
      technologies: ["Elixir", "Phoenix", "Absinthe", "MySQL", "GraphQL", "AWS", "Payment APIs"]
    },
    {
      company: "Freelance",
      position: "E-Learning Professor",
      period: "January 2022 - August 2022",
      location: "Remote - Peru",
      description: "Virtual programming instructor teaching students and general public interested in programming.",
      responsibilities: [
        "Conducted virtual programming classes for beginners",
        "Assisted university students with academic exercises in various programming languages including C++ and Python",
        "Worked on SuperProf and Luteachers platforms",
        "Developed curriculum and teaching materials for programming fundamentals"
      ],
      technologies: ["Python", "C++", "Web Development", "Teaching"]
    }
  ];

  const projects = [
    {
      title: "Real-time Chat System",
      description: "GraphQL-based real-time chat with roles, permissions, and analytics dashboard. Implemented automated daily reports for user engagement metrics.",
      technologies: ["Elixir", "Phoenix", "GraphQL", "MySQL"],
      highlights: ["Real-time subscriptions", "Role-based permissions", "Analytics automation"]
    },
    {
      title: "ML-Powered Customer Support",
      description: "Integrated AWS Rekognition and LLMs for automated customer support with vector database for enhanced search capabilities.",
      technologies: ["Elixir", "AWS Rekognition", "Vector DB", "Cloudflare Workers"],
      highlights: ["Image recognition", "LLM integration", "Vector search"]
    },
    {
      title: "Payment Integration Platform",
      description: "Comprehensive payment processing system with multiple provider integrations and Lambda-based serverless architecture.",
      technologies: ["Elixir", "Phoenix", "AWS Lambda", "Payment APIs"],
      highlights: ["Multi-provider support", "Serverless functions", "Secure processing"]
    }
  ];

  const skills = [
    { name: "Elixir", level: 90, category: "Backend" },
    { name: "Phoenix", level: 85, category: "Framework" },
    { name: "GraphQL", level: 80, category: "API" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "GCP", level: 65, category: "Cloud" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "Git", level: 85, category: "DevOps" },
    { name: "Absinthe", level: 80, category: "Framework" },
    { name: "Express", level: 70, category: "Framework" }
  ];

  const softSkills = [
    "Leadership", "Problem Solving", "Abstract Thinking", "Flexibility", "Team Collaboration", "Adaptability"
  ];

  const education = [
    {
      institution: "Universidad Nacional Amazónica de Madre de Dios",
      degree: "Ingeniería en Sistemas e Informática",
      period: "2018 - 2023",
      location: "Madre de Dios, Peru"
    },
    {
      institution: "Academia de Ciencias de la Computación e Informática",
      degree: "Desarrollo Web FullStack (PERN)",
      period: "2022",
      location: "Online"
    }
  ];

  const languages = [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "B2 - Upper Intermediate" }
  ];

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <div className="nav-brand">
            <span className="logo" aria-label="Ismael Sanchez initials">IS</span>
          </div>
          <ul className="nav-links" role="list">
            <li><a href="#about" aria-label="Navigate to About section">About</a></li>
            <li><a href="#experience" aria-label="Navigate to Experience section">Experience</a></li>
            <li><a href="#projects" aria-label="Navigate to Projects section">Projects</a></li>
            <li><a href="#education" aria-label="Navigate to Education section">Education</a></li>
            <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
          </ul>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" role="banner">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ismael Sanchez</span>
            </h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-description">
              Software Engineer with experience in <strong>startups and technological innovation projects</strong>. Specialized in <strong>Elixir, Phoenix, and functional programming</strong>. My adaptability and rapid learning allow me to integrate effectively into dynamic work teams, contributing to company success from early project stages.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" aria-label="Navigate to contact section">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                Get in touch
              </a>
              <a href="https://www.linkedin.com/in/ismael-sanchez-pem" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" aria-label="Visit Ismael Sanchez LinkedIn profile (opens in new tab)">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about" aria-labelledby="about-heading">
        <div className="container">
          <h2 id="about-heading" className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Software Engineer with experience in startups and technological innovation projects. I specialize in backend development, with a focus on technologies like Elixir, Phoenix, and functional programming.
              </p>
              <p>
                My adaptability and rapid learning capacity allow me to integrate effectively into dynamic work teams, contributing to company success from the early stages of projects. My long-term goal is to advance towards leadership roles while continuing to develop my technical and academic skills with graduate studies.
              </p>
              <p>
                I'm passionate about collaboration and believe in the power of teamwork. I'm interested in remote opportunities that allow me to continue growing professionally and personally in the fast-paced tech industry.
              </p>
            </div>
            <div className="skills-section">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="technical-skills-grid" role="list" aria-label="Technical skills">
                {skills.map((skill, index) => (
                  <span key={index} className="tech-skill-tag">{skill.name}</span>
                ))}
              </div>
              
              <h3 className="skills-title">Soft Skills</h3>
              <div className="soft-skills-grid" role="list" aria-label="Soft skills">
                {softSkills.map((skill, index) => (
                  <span key={index} className="soft-skill-tag">{skill}</span>
                ))}
              </div>
              
              <h3 className="skills-title">Languages</h3>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience" aria-labelledby="experience-heading">
        <div className="container">
          <h2 id="experience-heading" className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="job-title">{job.position}</h3>
                    <div className="job-company">{job.company}</div>
                    <div className="job-period">
                      {job.period}
                      {job.location && <span className="job-location"> • {job.location}</span>}
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  {job.responsibilities && (
                    <ul className="job-responsibilities">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  )}
                  <div className="job-technologies">
                    {job.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education" aria-labelledby="education-heading">
        <div className="container">
          <h2 id="education-heading" className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">{edu.institution}</div>
                  <div className="education-period">
                    {edu.period} • {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-description">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="contact-methods">
              <a href="mailto:ismaelpsy.12@gmail.com" className="contact-item" aria-label="Send email to ismaelpsy.12@gmail.com">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>ismaelpsy.12@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/ismael-sanchez-pem" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Visit Ismael Sanchez LinkedIn profile (opens in new tab)">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>&copy; 2024 Ismael Sanchez. Built with Astro & React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;