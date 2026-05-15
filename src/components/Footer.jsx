import { personalInfo, socialLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#home" className="nav-logo glitch" data-hover style={{ textDecoration: 'none' }}>
            &lt;fahri<span>/&gt;</span>
          </a>
          <p className="footer-copy">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="footer-socials">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
              className="footer-social-link"
              onMouseEnter={(e) => e.currentTarget.style.color = link.color}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              data-hover>
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--glass-border);
          padding: 40px 0;
          position: relative;
          z-index: 1;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-copy {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin-top: 8px;
          font-family: var(--font-code);
        }
        .footer-socials {
          display: flex;
          gap: 16px;
        }
        .footer-social-link {
          color: var(--text-secondary);
          transition: color 0.3s;
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .site-footer { padding: 28px 0; }
          .footer-inner {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .footer-left { display: flex; flex-direction: column; align-items: center; }
          .footer-copy { font-size: 0.72rem; }
          .footer-socials { gap: 20px; }
        }
        @media (max-width: 480px) {
          .site-footer { padding: 24px 0; }
          .footer-copy { font-size: 0.68rem; }
        }
      `}</style>
    </footer>
  );
}
