import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact Me</h2>
          <p>Feel free to reach out</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Palembang, Sumatera Selatan, Indonesia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>fahrirmdhn171006@gmail.com</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/PurpsCorps" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/m-fahri-ramadhan-088827261" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/pahriirm" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/_fahrirm" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${formStatus === 'sending' ? 'sending' : ''} ${formStatus === 'success' ? 'success' : ''}`}
                disabled={formStatus === 'sending' || formStatus === 'success'}
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;