import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SI FEST 2025',
      description: '(Project Leader) Full-stack seminar selling ticket & competition platform with barcode scanner & admin dashboard, available with payment gateway QRIS and autoload. Intregated with Google Spreadsheet, Discord, Google Login.',
      technologies: ['PHP', 'Laravel', 'Tailwind', 'MySQL', 'Filament'],
      imageUrl: 'images/project/sifest2025.png',
      liveLink: 'https://sifestunsri.com/',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'HiLo Sarcopenia Ticket Selling',
      description: 'Full-stack selling ticket platform with barcode scanner & admin dashboard',
      technologies: ['Laravel', 'Tailwind', 'MySQL', 'Filament'],
      imageUrl: 'images/project/hilo.png',
      liveLink: 'https://hilo-sarcopenia.my.id/',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Hosting E-commerce Platform',
      description: 'Web hosting e-commerce with payment processing & client panel',
      technologies: ['React', 'Laravel', 'Tailwind', 'MySQL'],
      imageUrl: 'images/project/vector.png',
      liveLink: 'https://vector-hosting.com/',
      category: 'E-commerce'
    },
    {
      id: 4,
      title: 'Game TopUp Platform',
      description: 'Game top-up e-commerce with payment gateway integration',
      technologies: ['React', 'Laravel', 'MySQL', 'Filament'],
      imageUrl: 'images/project/e-commerse.png',
      liveLink: 'https://purpstopup.ddns.net/#',
      category: 'E-commerce'
    },
    {
      id: 5,
      title: 'Windows E-commerce App',
      description: 'Desktop e-commerce application with admin dashboard',
      technologies: ['C#', 'MySQL'],
      imageUrl: 'images/project/apps.jpg',
      category: 'Desktop App'
    },
    {
      id: 6,
      title: 'FiveM Roleplay Server',
      description: 'GTA V roleplay server with custom scripts',
      technologies: ['Lua', 'JavaScript', 'HTML5', 'MySQL'],
      imageUrl: 'images/project/fivem.png',
      category: 'Game Server'
    }
  ];

  const skills = [
    { name: 'Lua', level: 100, icon: '🎮' },
    { name: 'PHP', level: 80, icon: 'php', fa: true },
    { name: 'C#', level: 80, icon: '💻' },
    { name: 'C++', level: 75, icon: '⚡' },
    { name: 'Java', level: 70, icon: '🧩' },
    { name: 'Web Dev', level: 90, icon: '🌐' },
    { name: 'React', level: 85, icon: 'react', fa: true },
    { name: 'Node.js', level: 95, icon: 'node-js', fa: true },
    { name: 'Git', level: 90, icon: 'github', fa: true },
    { name: 'UI/UX', level: 65, icon: 'figma', fa: true },
  ];

  const getStyles = () => ({
    app: {
      background: darkMode
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
      minHeight: '100vh',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    backgroundAnimation: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    },
    particle: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      background: darkMode
        ? 'radial-gradient(circle, #60a5fa 0%, transparent 70%)'
        : 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
      borderRadius: '50%',
    },
    cursorFollower: {
      position: 'fixed',
      width: '40px',
      height: '40px',
      border: `2px solid ${darkMode ? '#60a5fa' : '#3b82f6'}`,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.5,
    },
    progressBar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: darkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(226, 232, 240, 0.5)',
      zIndex: 9999,
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
      transformOrigin: '0%',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 0',
      background: darkMode
        ? 'rgba(15, 23, 42, 0.8)'
        : 'rgba(248, 250, 252, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)'}`,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1,
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      gap: '30px',
    },
    navLink: {
      fontSize: '16px',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.3s',
      cursor: 'pointer',
    },
    themeToggle: {
      background: darkMode
        ? 'rgba(96, 165, 250, 0.1)'
        : 'rgba(59, 130, 246, 0.1)',
      border: 'none',
      borderRadius: '10px',
      width: '45px',
      height: '45px',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
    },
    heroContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
    },
    introText: {
      color: darkMode ? '#60a5fa' : '#3b82f6',
      fontSize: '20px',
      fontWeight: '500',
      marginBottom: '10px',
    },
    name: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '10px',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.2',
    },
    tagline: {
      fontSize: '48px',
      color: darkMode ? '#cbd5e1' : '#64748b',
      marginBottom: '20px',
      fontWeight: '600',
    },
    description: {
      fontSize: '18px',
      color: darkMode ? '#94a3b8' : '#64748b',
      maxWidth: '500px',
      marginBottom: '30px',
      lineHeight: '1.8',
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
    },
    primaryBtn: {
      padding: '15px 40px',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      color: '#fff',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    secondaryBtn: {
      padding: '15px 40px',
      background: 'transparent',
      color: darkMode ? '#60a5fa' : '#3b82f6',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      border: `2px solid ${darkMode ? '#60a5fa' : '#3b82f6'}`,
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    heroImage: {
      flex: '0 0 400px',
    },
    imageContainer: {
      position: 'relative',
      width: '400px',
      height: '400px',
    },
    imageGlow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '120%',
      height: '120%',
      background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
      filter: 'blur(40px)',
      zIndex: 0,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '30px',
      objectFit: 'cover',
      border: '4px solid rgba(96, 165, 250, 0.3)',
      boxShadow: '0 20px 60px rgba(96, 165, 250, 0.3)',
      position: 'relative',
      zIndex: 1,
    },
    section: {
      padding: '100px 0',
      position: 'relative',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    titleUnderline: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
      margin: '0 auto 20px',
      borderRadius: '2px',
    },
    sectionSubtitle: {
      color: darkMode ? '#94a3b8' : '#64748b',
      fontSize: '18px',
    },
    aboutContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
    },
    aboutImage: {
      flex: '0 0 400px',
    },
    aboutImageContainer: {
      width: '400px',
      height: '500px',
      borderRadius: '30px',
      overflow: 'hidden',
      border: '4px solid rgba(96, 165, 250, 0.2)',
      boxShadow: '0 20px 60px rgba(96, 165, 250, 0.2)',
    },
    aboutImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    aboutText: {
      flex: 1,
    },
    aboutParagraph: {
      fontSize: '18px',
      color: darkMode ? '#cbd5e1' : '#64748b',
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '40px',
    },
    statCard: {
      background: darkMode
        ? 'rgba(96, 165, 250, 0.1)'
        : 'rgba(59, 130, 246, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '20px',
      textAlign: 'center',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: darkMode ? '#60a5fa' : '#3b82f6',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '14px',
      color: darkMode ? '#94a3b8' : '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    skillCard: {
      background: darkMode
        ? 'rgba(96, 165, 250, 0.05)'
        : 'rgba(59, 130, 246, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '20px',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    skillIcon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
    skillIcon2: {
      marginTop: '65px',
      fontSize: '48px',
      marginBottom: '20px',
    },
    skillName: {
      fontSize: '20px',
      fontWeight: '600',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      marginBottom: '15px',
    },
    skillBarContainer: {
      width: '100%',
      height: '8px',
      background: darkMode
        ? 'rgba(15, 23, 42, 0.5)'
        : 'rgba(226, 232, 240, 0.8)',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '10px',
    },
    skillBar: {
      height: '100%',
      background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
      borderRadius: '10px',
      transition: 'width 1s ease',
    },
    skillLevel: {
      fontSize: '14px',
      color: darkMode ? '#60a5fa' : '#3b82f6',
      fontWeight: '600',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    projectCard: {
      background: darkMode
        ? 'rgba(96, 165, 250, 0.05)'
        : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: darkMode
        ? 'none'
        : '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
    projectImageWrapper: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s',
    },
    projectOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(96, 165, 250, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s',
    },
    projectLink: {
      width: '60px',
      height: '60px',
      background: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      textDecoration: 'none',
      transition: 'all 0.3s',
    },
    projectInfo: {
      padding: '25px',
    },
    projectCategory: {
      fontSize: '12px',
      color: darkMode ? '#60a5fa' : '#3b82f6',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '600',
    },
    projectTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      margin: '10px 0',
    },
    projectDescription: {
      fontSize: '14px',
      color: darkMode ? '#94a3b8' : '#64748b',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    techTag: {
      fontSize: '12px',
      padding: '6px 12px',
      background: darkMode
        ? 'rgba(96, 165, 250, 0.1)'
        : 'rgba(59, 130, 246, 0.1)',
      color: darkMode ? '#60a5fa' : '#3b82f6',
      borderRadius: '20px',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
    },
    contactContent: {
      display: 'flex',
      gap: '60px',
      alignItems: 'flex-start',
    },
    contactInfo: {
      flex: 1,
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '30px',
      padding: '20px',
      background: darkMode
        ? 'rgba(96, 165, 250, 0.05)'
        : 'rgba(59, 130, 246, 0.05)',
      borderRadius: '15px',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)'}`,
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    contactIcon: {
      fontSize: '32px',
      width: '60px',
      height: '60px',
      background: darkMode
        ? 'rgba(96, 165, 250, 0.1)'
        : 'rgba(59, 130, 246, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      marginBottom: '5px',
    },
    contactText: {
      fontSize: '14px',
      color: darkMode ? '#94a3b8' : '#64748b',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '40px',
    },
    socialLink: {
      width: '50px',
      height: '50px',
      background: darkMode
        ? 'rgba(96, 165, 250, 0.1)'
        : 'rgba(59, 130, 246, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      textDecoration: 'none',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
      transition: 'all 0.3s',
      color: darkMode ? '#f1f5f9' : '#1e293b',
    },
    contactFormWrapper: {
      flex: 1,
    },
    contactForm: {
      background: darkMode
        ? 'rgba(96, 165, 250, 0.05)'
        : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '20px',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
    },
    input: {
      width: '100%',
      padding: '15px 20px',
      marginBottom: '20px',
      background: darkMode
        ? 'rgba(15, 23, 42, 0.5)'
        : 'rgba(248, 250, 252, 0.9)',
      border: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(203, 213, 225, 0.5)'}`,
      borderRadius: '10px',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s',
      fontFamily: 'inherit',
    },
    submitBtn: {
      width: '100%',
      padding: '15px',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    footer: {
      padding: '40px 0',
      background: darkMode
        ? 'rgba(15, 23, 42, 0.8)'
        : 'rgba(248, 250, 252, 0.8)',
      borderTop: `1px solid ${darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(59, 130, 246, 0.1)'}`,
    },
    footerContent: {
      textAlign: 'center',
    },
    copyright: {
      color: darkMode ? '#94a3b8' : '#64748b',
      fontSize: '14px',
    },
  });

  const styles = getStyles();

  return (
    <div style={styles.app}>
      {/* Animated Background */}
      <div style={styles.backgroundAnimation}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cursor Follower */}
      <motion.div
        style={{
          ...styles.cursorFollower,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -20,
          y: -20,
        }}
      />

      {/* Progress Bar */}
      <div style={styles.progressBar}>
        <motion.div
          style={{
            ...styles.progressFill,
            scaleX: scrollYProgress,
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        style={styles.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <nav style={styles.nav}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    ...styles.navLink,
                    color: activeSection === item.toLowerCase()
                      ? (darkMode ? '#60a5fa' : '#3b82f6')
                      : (darkMode ? '#94a3b8' : '#64748b'),
                  }}
                  whileHover={{ scale: 1.1, color: darkMode ? '#60a5fa' : '#3b82f6' }}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.button
              style={styles.themeToggle}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '🌙' : '☀️'}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                style={styles.introText}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                style={styles.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                M. Fahri Ramadhan
              </motion.h1>
              <motion.h2
                style={styles.tagline}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full-Stack Developer
              </motion.h2>
              <motion.p
                style={styles.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I create exceptional digital experiences with modern technologies.
                Specialized in building scalable web applications and innovative solutions.
              </motion.p>
              <motion.div
                style={styles.ctaButtons}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  style={styles.primaryBtn}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(96, 165, 250, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  style={styles.secondaryBtn}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              style={styles.heroImage}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                style={styles.imageContainer}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div style={styles.imageGlow} />
                <img
                  src="images/fotoawal.jpg"
                  alt="Profile"
                  style={styles.profileImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.sectionTitle}>About Me</h2>
            <div style={styles.titleUnderline} />
          </motion.div>

          <div style={styles.aboutContent}>
            <motion.div
              style={styles.aboutImage}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={styles.aboutImageContainer}>
                <img
                  src="images/fotoakhir.jpg"
                  alt="About"
                  style={styles.aboutImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              style={styles.aboutText}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p style={styles.aboutParagraph}>
                Hello! I'm a passionate developer with expertise in web & app development.
                I create beautiful, functional, and user-friendly digital solutions.
              </motion.p>
              <motion.p style={styles.aboutParagraph}>
                With 5+ years of experience, I've worked on diverse projects from small business
                websites to complex enterprise applications. My focus is on clean code and
                intuitive user experiences.
              </motion.p>
              <motion.p style={styles.aboutParagraph}>
                When not coding, I explore new technologies, contribute to open-source,
                and share knowledge with the community.
              </motion.p>

              <motion.div style={styles.statsContainer}>
                {[
                  { number: '5+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Done' },
                  { number: '30+', label: 'Happy Clients' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    style={styles.statCard}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h3 style={styles.statNumber}>{stat.number}</h3>
                    <p style={styles.statLabel}>{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
            <div style={styles.titleUnderline} />
          </motion.div>

          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                style={styles.skillCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 40px rgba(96, 165, 250, 0.3)',
                }}
              >
                {skill.fa ?
                  <div style={styles.skillIcon2}>
                    <i className={`fab fa-${skill.icon} fa-lg`}></i>
                  </div>
                :
                  <div style={styles.skillIcon}>{skill.icon}</div>
                }
                <h3 style={styles.skillName}>{skill.name}</h3>
                <div style={styles.skillBarContainer}>
                  <motion.div
                    style={{
                      ...styles.skillBar,
                      width: `${skill.level}%`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span style={styles.skillLevel}>{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.sectionTitle}>Featured Projects</h2>
            <div style={styles.titleUnderline} />
            <p style={styles.sectionSubtitle}>Check out my recent work</p>
          </motion.div>

          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={styles.projectCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={styles.projectImageWrapper}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={styles.projectImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                  <motion.div
                    style={styles.projectOverlay}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.projectLink}
                      whileHover={{ scale: 1.2 }}
                    >
                      🔗
                    </motion.a>
                  </motion.div>
                </div>
                <div style={styles.projectInfo}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.projectTech}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.sectionTitle}>Get In Touch</h2>
            <div style={styles.titleUnderline} />
            <p style={styles.sectionSubtitle}>Let's create something amazing together</p>
          </motion.div>

          <div style={styles.contactContent}>
            <motion.div
              style={styles.contactInfo}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { icon: '📍', title: 'Location', text: 'Palembang, Indonesia' },
                { icon: '📧', title: 'Email', text: 'fahrirmdhn171006@gmail.com' },
                { icon: '💼', title: 'Work', text: 'Available for opportunities' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={styles.contactItem}
                  whileHover={{ x: 10 }}
                >
                  <div style={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <h3 style={styles.contactTitle}>{item.title}</h3>
                    <p style={styles.contactText}>{item.text}</p>
                  </div>
                </motion.div>
              ))}

              <div style={styles.socialLinks}>
                {[
                  { icon: 'github', url: 'https://github.com/PurpsCorps' },
                  { icon: 'linkedin', url: 'https://www.linkedin.com/in/m-fahri-ramadhan-088827261' },
                  { icon: 'twitter', url: 'https://x.com/pahriirm' },
                  { icon: 'instagram', url: 'https://instagram.com/_fahrirm' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={styles.contactFormWrapper}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form style={styles.contactForm}>
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  style={styles.input}
                  whileFocus={{ scale: 1.02, borderColor: '#60a5fa' }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  style={styles.input}
                  whileFocus={{ scale: 1.02, borderColor: '#60a5fa' }}
                />
                <motion.textarea
                  placeholder="Your Message"
                  style={{ ...styles.input, minHeight: '150px' }}
                  whileFocus={{ scale: 1.02, borderColor: '#60a5fa' }}
                />
                <motion.button
                  type="submit"
                  style={styles.submitBtn}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(96, 165, 250, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <motion.div
            style={styles.footerContent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p style={styles.copyright}>
              © 2025 M. Fahri Ramadhan. Crafted with 🧠
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;