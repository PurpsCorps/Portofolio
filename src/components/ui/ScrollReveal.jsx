import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  const variants = {
    up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  };

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
