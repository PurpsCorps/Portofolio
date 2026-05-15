import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TerminalWindow from './ui/TerminalWindow';
import ScrollReveal from './ui/ScrollReveal';
import { stats, personalInfo } from '../data/portfolio';

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title glitch" data-hover>
            <span className="prefix">&gt;</span> About<span className="underscore">_</span>Me
          </h2>
        </ScrollReveal>

        <div className="responsive-grid-2">
          {/* Terminal */}
          <ScrollReveal direction="left">
            <TerminalWindow />
          </ScrollReveal>

          {/* Profile Photo */}
          <ScrollReveal direction="right">
            <div className="about-profile">
              <div className="about-photo-wrapper">
                <img 
                  src="/fahri-profile.png" 
                  alt="Fahri Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="about-location-badge">
                📍 {personalInfo.location}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="about-stats-grid">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass-panel about-stat-card"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
              >
                <div className="about-stat-value">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="about-stat-label">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .about-profile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          min-height: 300px;
        }
        .about-photo-wrapper {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--cyan);
          box-shadow: 0 0 30px rgba(0,240,255,0.3);
          flex-shrink: 0;
        }
        .about-location-badge {
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--green);
          background: rgba(0,0,0,0.75);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(0,255,136,0.4);
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }
        .about-stat-card {
          text-align: center;
          padding: 28px !important;
        }
        .about-stat-value {
          font-family: var(--font-code);
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--cyan), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-stat-label {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .about-stats-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px; }
          .about-stat-value { font-size: 2rem; }
          .about-photo-wrapper { width: 240px; height: 240px; }
        }
        @media (max-width: 768px) {
          .about-profile { min-height: auto; gap: 16px; }
          .about-photo-wrapper { width: 200px; height: 200px; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 40px; }
          .about-stat-card { padding: 20px !important; }
          .about-stat-value { font-size: 1.8rem; }
          .about-stat-label { font-size: 0.78rem; }
        }
        @media (max-width: 480px) {
          .about-photo-wrapper { width: 160px; height: 160px; }
          .about-location-badge { font-size: 0.68rem; padding: 5px 12px; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 32px; }
          .about-stat-card { padding: 16px !important; }
          .about-stat-value { font-size: 1.5rem; }
          .about-stat-label { font-size: 0.72rem; }
        }
      `}</style>
    </section>
  );
}
