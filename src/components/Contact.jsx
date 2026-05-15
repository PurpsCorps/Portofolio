import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import MagneticButton from './ui/MagneticButton';
import { personalInfo, socialLinks } from '../data/portfolio';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="section-title glitch" data-hover>
            <span className="prefix">&gt;</span> Contact<span className="underscore">_</span>Me
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="contact-intro">
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-panel contact-info-panel">
            <div className="contact-info-list">
              <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ x: 5 }}
                className="contact-info-item">
                <FaEnvelope color="var(--cyan)" /> <span>{personalInfo.email}</span>
              </motion.a>
              <motion.div whileHover={{ x: 5 }}
                className="contact-info-item">
                <FaMapMarkerAlt color="var(--green)" /> <span>{personalInfo.location}</span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="contact-socials">
            {socialLinks.map((link, i) => (
              <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className="glass-panel contact-social-btn" data-hover
                whileHover={{ scale: 1.15, borderColor: link.color + '60', boxShadow: `0 0 25px ${link.color}30` }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
                <link.icon size={22} color={link.color} />
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .contact-intro {
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-size: clamp(0.85rem, 2vw, 1rem);
        }
        .contact-info-panel {
          max-width: 500px;
          margin: 0 auto 40px;
          padding: 32px !important;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-family: var(--font-code);
          font-size: 0.85rem;
        }
        .contact-info-item span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .contact-socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .contact-social-btn {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          text-decoration: none;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .contact-intro { margin-bottom: 28px; }
          .contact-info-panel { padding: 24px !important; margin-bottom: 28px; }
          .contact-info-item { font-size: 0.78rem; gap: 10px; }
          .contact-social-btn { width: 52px; height: 52px; border-radius: 14px; }
          .contact-socials { gap: 12px; }
        }
        @media (max-width: 480px) {
          .contact-intro { margin-bottom: 24px; }
          .contact-info-panel { padding: 18px !important; margin-bottom: 24px; }
          .contact-info-item { font-size: 0.72rem; gap: 8px; }
          .contact-social-btn { width: 48px; height: 48px; border-radius: 12px; }
          .contact-socials { gap: 10px; }
        }
      `}</style>
    </section>
  );
}
