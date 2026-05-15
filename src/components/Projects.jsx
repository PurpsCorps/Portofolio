import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import MagneticButton from './ui/MagneticButton';
import { projects } from '../data/portfolio';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rX = (y - rect.height / 2) / 12;
    const rY = (rect.width / 2 - x) / 12;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.03,1.03,1.03)`;
    cardRef.current.style.setProperty('--gx', x + 'px');
    cardRef.current.style.setProperty('--gy', y + 'px');
  };
  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <div ref={cardRef} className="glass-panel" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        data-hover style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.15s ease', position: 'relative', cursor: 'none' }}>
        <div style={{ position: 'absolute', width: 200, height: 200, background: `radial-gradient(circle, ${project.color}15, transparent 70%)`, left: 'var(--gx,50%)', top: 'var(--gy,50%)', transform: 'translate(-50%,-50%)', pointerEvents: 'none', borderRadius: '50%' }} />
        <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
        <div style={{ padding: '24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              <project.icon size={20} color={project.color} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-code)', fontSize: '1.05rem', fontWeight: 600 }}>{project.title}</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 18, minHeight: 72 }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {project.tech.map(t => <span key={t} className="tag" style={{ borderColor: project.color + '30', color: project.color }}>{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <MagneticButton href={project.link}>Live <FaExternalLinkAlt size={11} /></MagneticButton>
            <MagneticButton className="purple" href={project.github}>Code <FaGithub size={13} /></MagneticButton>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title glitch" data-hover>
            <span className="prefix">&gt;</span> Projects<span className="underscore">_</span>
          </h2>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
