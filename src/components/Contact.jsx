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
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-panel" style={{ maxWidth: 500, margin: '0 auto 40px', padding: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
                <FaEnvelope color="var(--cyan)" /> {personalInfo.email}
              </motion.a>
              <motion.div whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
                <FaMapMarkerAlt color="var(--green)" /> {personalInfo.location}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            {socialLinks.map((link, i) => (
              <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className="glass-panel" data-hover
                style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, textDecoration: 'none' }}
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
    </section>
  );
}
