import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import SkillCube from './three/SkillCube';
import ParticleMorph from './three/ParticleMorph';
import DraggableCard from './ui/DraggableCard';
import ScrollReveal from './ui/ScrollReveal';
import { skills } from '../data/portfolio';

export default function TechStack() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title glitch" data-hover>
            <span className="prefix">&gt;</span> Tech<span className="underscore">_</span>Stack
          </h2>
        </ScrollReveal>

        {/* 3D Objects Row */}
        <div className="responsive-grid-2" style={{ gap: 24, marginBottom: 60 }}>
          <ScrollReveal direction="left">
            <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 280 }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <SkillCube />
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Suspense>
                </Canvas>
              </div>
              <div style={{
                padding: '12px 20px', borderTop: '1px solid var(--glass-border)',
                fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--text-secondary)',
                textAlign: 'center',
              }}>
                🖱️ Drag to rotate the cube
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 280 }}>
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ParticleMorph />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                  </Suspense>
                </Canvas>
              </div>
              <div style={{
                padding: '12px 20px', borderTop: '1px solid var(--glass-border)',
                fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--text-secondary)',
                textAlign: 'center',
              }}>
                👆 Click to morph shape
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Draggable skill cards */}
        <ScrollReveal>
          <p style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
            ✋ Drag the cards around!
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 16 }}>
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.03} direction="scale">
              <DraggableCard>
                <motion.div
                  className="glass-panel"
                  style={{
                    textAlign: 'center', padding: '20px 12px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  }}
                  whileHover={{
                    borderColor: skill.color + '60',
                    boxShadow: `0 0 25px ${skill.color}20`,
                  }}
                >
                  <skill.icon size={28} color={skill.color} />
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {skill.name}
                  </span>
                  {/* Skill bar */}
                  <div style={{
                    width: '100%', height: 3, background: 'rgba(255,255,255,0.05)',
                    borderRadius: 2, overflow: 'hidden',
                  }}>
                    <motion.div
                      style={{ height: '100%', background: skill.color, borderRadius: 2 }}
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
    </section>
  );
}
