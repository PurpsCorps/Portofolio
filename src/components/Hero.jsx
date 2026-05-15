import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingShapes from './three/FloatingShapes';
import MagneticButton from './ui/MagneticButton';
import { personalInfo } from '../data/portfolio';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const roles = personalInfo.roles;

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

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
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
      {/* 3D Background */}
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

      {/* Floating code elements */}
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

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            style={{ fontFamily: 'var(--font-code)', color: 'var(--green)', fontSize: '0.9rem', marginBottom: 12 }}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            &gt; HELLO_WORLD.exe
          </motion.p>

          <motion.h1
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Hi, I'm{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {personalInfo.nickname}
            </span>
          </motion.h1>

          <motion.div
            style={{ fontFamily: 'var(--font-code)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--text-secondary)', marginBottom: 24, height: 36 }}
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
            style={{ maxWidth: 520, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36, fontSize: '1rem' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
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
    </section>
  );
}
