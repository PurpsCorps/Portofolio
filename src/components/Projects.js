import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform (Game TopUp)',
      description: 'A full-stack e-commerce platform with payment processing, user authentication, and admin dashboard.',
      technologies: ['React', 'Laravel', 'MySQL', 'Filament'],
      imageUrl: 'images/project/e-commerse.png',
      githubLink: '#',
      liveLink: 'https://purpstopup.ddns.net/#'
    },
    {
      id: 2,
      title: 'Study Class Website',
      description: 'A website show lecture schedule & task deadline table also about the class.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      imageUrl: 'images/project/kelas.png',
      githubLink: '#',
      liveLink: 'http://sibilb24.ddns.net/'
    },
    {
      id: 3,
      title: 'E-commerce Windows Application',
      description: 'A windows apps e-commerce platform with payment processing, user authentication, and admin dashboard.',
      technologies: ['C#', 'MySQL'],
      imageUrl: 'images/project/apps.jpg',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'FiveM (GTA V) Roleplay Server',
      description: 'A server in GTA V game modifier called FiveM, Roleplay Genre.',
      technologies: ['Lua', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      imageUrl: 'images/project/fivem.png',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills.',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      imageUrl: 'images/project/porto.png',
      githubLink: 'https://github.com/PurpsCorps/Portofolio',
      liveLink: 'https://fahriramadhan.vercel.app/'
    }
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects</h2>
          <p>Check out some of my recent work</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              variants={itemVariants}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <img src={project.imageUrl} alt='error' className="project-img-placeholder"></img>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;