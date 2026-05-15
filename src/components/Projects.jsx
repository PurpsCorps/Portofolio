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
      <div ref={cardRef} className="glass-panel project-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} data-hover>
        <div className="project-glow" style={{ background: `radial-gradient(circle, ${project.color}15, transparent 70%)` }} />
        <div className="project-accent" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
        <div className="project-body">
          <div className="project-header">
            <div className="project-icon" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              <project.icon size={20} color={project.color} />
            </div>
            <h3 className="project-title">{project.title}</h3>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tech.map(t => <span key={t} className="tag" style={{ borderColor: project.color + '30', color: project.color }}>{t}</span>)}
          </div>
          <div className="project-links">
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
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
          gap: 24px;
        }
        .project-card {
          padding: 0 !important;
          overflow: hidden;
          transition: transform 0.15s ease;
          position: relative;
          cursor: none;
        }
        .project-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          left: var(--gx, 50%);
          top: var(--gy, 50%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          border-radius: 50%;
        }
        .project-accent { height: 3px; }
        .project-body { padding: 24px; position: relative; z-index: 1; }
        .project-header { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .project-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .project-title {
          font-family: var(--font-code);
          font-size: 1.05rem;
          font-weight: 600;
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.7;
          margin-bottom: 18px;
          min-height: 72px;
        }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
        .project-links { display: flex; gap: 10px; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .project-card { cursor: pointer; }
          .project-body { padding: 18px; }
          .project-title { font-size: 0.95rem; }
          .project-desc { font-size: 0.8rem; min-height: auto; margin-bottom: 14px; }
          .project-icon { width: 38px; height: 38px; border-radius: 10px; }
          .project-tags { gap: 5px; margin-bottom: 14px; }
          .project-links { gap: 8px; }
        }
        @media (max-width: 480px) {
          .projects-grid { gap: 14px; }
          .project-body { padding: 16px; }
          .project-header { gap: 10px; margin-bottom: 10px; }
          .project-icon { width: 34px; height: 34px; }
          .project-desc { font-size: 0.78rem; line-height: 1.6; margin-bottom: 12px; }
        }
      `}</style>
    </section>
  );
}
