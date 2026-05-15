import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingShapes from './three/FloatingShapes';
import MagneticButton from './ui/MagneticButton';
import { personalInfo } from '../data/portfolio';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const roles = personalInfo.roles;

const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setText(isDeleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const floatingElements = ['{ }', '< />', '//', '( )', '[ ]', '&&', '=>', '$ _'];

  return (
    <section id="home" className="section hero-section">
      {/* 3D Background — hidden on touch/mobile for performance */}
      {!isTouch && (
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ pointerEvents: 'auto' }}>
            <Suspense fallback={null}>
              <FloatingShapes />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Floating code elements — hidden via CSS on mobile */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="floating-element"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -10, 5, 0],
            rotate: [0, 5, -5, 3, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {el}
        </motion.div>
      ))}

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &gt; HELLO_WORLD.exe
          </motion.p>

          <motion.h1
            className="hero-heading"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Hi, I'm{' '}
            <span className="hero-name">
              {personalInfo.nickname}
            </span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span style={{ color: 'var(--purple)' }}>const</span>{' '}
            <span style={{ color: 'var(--cyan)' }}>role</span> ={' '}
            <span style={{ color: 'var(--green)' }}>"{text}"</span>
            <span className="terminal-cursor" />
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <MagneticButton href="#projects">
              View Projects <FaArrowRight />
            </MagneticButton>
            <MagneticButton className="purple" href="#contact">
              Contact Me <FaDownload />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-greeting {
          font-family: var(--font-code);
          color: var(--green);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .hero-heading {
          font-size: clamp(2.2rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .hero-name {
          background: linear-gradient(135deg, var(--cyan), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-role {
          font-family: var(--font-code);
          font-size: clamp(0.85rem, 2.5vw, 1.4rem);
          color: var(--text-secondary);
          margin-bottom: 24px;
          min-height: 32px;
        }
        .hero-bio {
          max-width: 520px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
          font-size: clamp(0.88rem, 2vw, 1rem);
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 70px; }
          .hero-greeting { font-size: 0.8rem; margin-bottom: 10px; }
          .hero-bio { margin-bottom: 28px; }
          .hero-buttons { gap: 12px; }
        }
        @media (max-width: 480px) {
          .hero-section { padding-top: 60px; min-height: calc(100dvh - 20px); }
          .hero-greeting { font-size: 0.75rem; }
          .hero-bio { margin-bottom: 24px; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .hero-buttons > div { width: 100%; }
          .hero-buttons .neon-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
