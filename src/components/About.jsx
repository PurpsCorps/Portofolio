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
            <div style={{ height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
              <div style={{ 
                width: 280, height: 280, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid var(--cyan)', boxShadow: '0 0 30px rgba(0,240,255,0.3)'
              }}>
                <img 
                  src="/fahri-profile.png" 
                  alt="Fahri Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{
                fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--green)',
                background: 'rgba(0,0,0,0.75)', padding: '6px 14px', borderRadius: 20,
                border: '1px solid rgba(0,255,136,0.4)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
              }}>
                📍 {personalInfo.location}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 20, marginTop: 60 }}>
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass-panel"
                style={{ textAlign: 'center', padding: 28 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
              >
                <div style={{
                  fontFamily: 'var(--font-code)', fontSize: '2.5rem', fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: 8 }}>
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
