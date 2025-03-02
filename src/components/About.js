import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-img-container">
              <img src='images/foto2.jpg' alt='error' className="about-img"></img>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Hello! I'm a passionate developer with a strong background in web & app development.
              I enjoy creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <p>
              With 5+ years of experience in the field, I've worked on a variety of projects
              ranging from small business websites to complex enterprise applications.
              My focus is on writing clean, efficient code and creating intuitive user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;