import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import SkillCube from './three/SkillCube';
import ParticleMorph from './three/ParticleMorph';
import DraggableCard from './ui/DraggableCard';
import ScrollReveal from './ui/ScrollReveal';
import { skills } from '../data/portfolio';

const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export default function TechStack() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title glitch" data-hover>
            <span className="prefix">&gt;</span> Tech<span className="underscore">_</span>Stack
          </h2>
        </ScrollReveal>

        {/* 3D Objects Row — show only on non-touch devices */}
        {!isTouch && (
          <div className="responsive-grid-2 tech-3d-row">
            <ScrollReveal direction="left">
              <div className="glass-panel tech-3d-panel">
                <div className="tech-3d-canvas">
                  <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                      <SkillCube />
                      <OrbitControls enableZoom={false} enablePan={false} />
                    </Suspense>
                  </Canvas>
                </div>
                <div className="tech-3d-hint">
                  🖱️ Drag to rotate the cube
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="glass-panel tech-3d-panel">
                <div className="tech-3d-canvas">
                  <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <Suspense fallback={null}>
                      <ParticleMorph />
                      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Suspense>
                  </Canvas>
                </div>
                <div className="tech-3d-hint">
                  👆 Click to morph shape
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* Draggable skill cards */}
        <ScrollReveal>
          <p className="tech-drag-hint">
            {isTouch ? '📱 Tap to explore skills!' : '✋ Drag the cards around!'}
          </p>
        </ScrollReveal>

        <div className="tech-skills-grid">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.03} direction="scale">
              <DraggableCard>
                <motion.div
                  className="glass-panel tech-skill-card"
                  whileHover={{
                    borderColor: skill.color + '60',
                    boxShadow: `0 0 25px ${skill.color}20`,
                  }}
                >
                  <skill.icon size={28} color={skill.color} />
                  <span className="tech-skill-name">
                    {skill.name}
                  </span>
                  {/* Skill bar */}
                  <div className="tech-skill-bar-bg">
                    <motion.div
                      className="tech-skill-bar-fill"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                    />
                  </div>
                </motion.div>
              </DraggableCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .tech-3d-row { gap: 24px; margin-bottom: 60px; }
        .tech-3d-panel { padding: 0 !important; overflow: hidden; }
        .tech-3d-canvas { height: 280px; }
        .tech-3d-hint {
          padding: 12px 20px;
          border-top: 1px solid var(--glass-border);
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
        }
        .tech-drag-hint {
          font-family: var(--font-code);
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          text-align: center;
        }
        .tech-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 16px;
        }
        .tech-skill-card {
          text-align: center;
          padding: 20px 12px !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .tech-skill-name {
          font-family: var(--font-code);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .tech-skill-bar-bg {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
          overflow: hidden;
        }
        .tech-skill-bar-fill {
          height: 100%;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .tech-3d-canvas { height: 240px; }
          .tech-3d-row { margin-bottom: 48px; }
        }
        @media (max-width: 768px) {
          .tech-3d-canvas { height: 200px; }
          .tech-3d-row { margin-bottom: 36px; }
          .tech-3d-hint { font-size: 0.7rem; padding: 10px 16px; }
          .tech-skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 10px;
          }
          .tech-skill-card { padding: 14px 8px !important; gap: 8px; }
          .tech-skill-card svg { width: 22px; height: 22px; }
          .tech-skill-name { font-size: 0.65rem; }
          .tech-drag-hint { font-size: 0.72rem; }
        }
        @media (max-width: 480px) {
          .tech-skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          .tech-skill-card { padding: 12px 6px !important; gap: 6px; }
          .tech-skill-card svg { width: 20px; height: 20px; }
          .tech-skill-name { font-size: 0.6rem; }
        }
        @media (max-width: 400px) {
          .tech-skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .tech-skill-card { padding: 14px 10px !important; gap: 8px; }
          .tech-skill-card svg { width: 24px; height: 24px; }
          .tech-skill-name { font-size: 0.68rem; }
        }
      `}</style>
    </section>
  );
}
