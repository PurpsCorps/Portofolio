import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(n => document.querySelector(n.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 150) {
          setActive(navItems[i].name);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <a href="#home" className="nav-logo glitch" data-hover>
          &lt;fahri<span>/&gt;</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={active === item.name ? 'active' : ''}
                onClick={() => setOpen(false)}
                data-hover
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-toggle" onClick={() => setOpen(!open)} data-hover>
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
        </button>
      </div>
    </motion.nav>
  );
}
