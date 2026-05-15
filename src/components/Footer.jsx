import { personalInfo, socialLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <a href="#home" className="nav-logo glitch" data-hover style={{ textDecoration: 'none' }}>
            &lt;fahri<span>/&gt;</span>
          </a>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: 8, fontFamily: 'var(--font-code)' }}>
            © 2025 {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = link.color}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              data-hover>
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
