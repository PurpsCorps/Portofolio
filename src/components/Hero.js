import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="intro-text">Hi, my name is</p>
          <h1 className="name">M. Fahri Ramadhan</h1>
          <h2 className="tagline">I build things for the web</h2>
          <p className="description">
            I'm a back-end developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image-container">
            <img src='images/foto.png' alt='error' className="profile-image"></img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;