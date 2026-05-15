import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: 'inline-block' }}
    >
      <Tag
        ref={ref}
        className={`neon-btn ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        style={{ transition: 'transform 0.2s ease, color 0.3s, box-shadow 0.3s' }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
