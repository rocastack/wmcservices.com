import React from 'react';
import { LinkedIn3DIcon, Instagram3DIcon, Facebook3DIcon } from '../icons/Icons';

export const Footer = ({ t, handleNavClick, setIsModalOpen }) => {
  return (
    <footer className="saas-premium-footer">
      <div className="container footer-inner-grid">

        {/* Columna 1: Branding e Identidad */}
        <div className="footer-brand-column">
          <div className="footer-logo-wrapper">
            <img src="/logo.webp" alt="WMC Logo" className="footer-mini-logo" width="32" height="32" loading="lazy" />
            <span className="footer-brand-name">WMC SERVICES</span>
          </div>
          <p className="footer-brand-desc">
            {t.footer.brandDesc}
          </p>
        </div>

        {/* Columna 2: Navegación Interna */}
        <div className="footer-links-column">
          <h5 className="footer-column-title">{t.footer.company}</h5>
          <ul className="footer-navigation-list">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
            <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t.nav.services}</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.nav.contact}</a></li>
            <li><a href="#careers-banner" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>{t.nav.careers}</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes / Legal Micro */}
        <div className="footer-links-column">
          <h5 className="footer-column-title">{t.footer.connect}</h5>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', paddingBottom: '30px' }}>
            <LinkedIn3DIcon />
            <Instagram3DIcon />
            <Facebook3DIcon />
          </div>
        </div>

      </div>

      {/* Cierre de Copyright y Créditos */}
      <div className="container footer-credits-bar">
        <div className="footer-copyright-micro">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <span className="credits-divider" style={{ margin: '0 10px', opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            {t.footer.developedBy} <a href="mailto:rocastack@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>rocastack@gmail.com</a>
          </span>
        </div>
        <div className="credits-right">
          <a href="#privacy" className="legal-link-footer">{t.footer.privacy}</a>
          <span className="credits-divider">·</span>
          <a href="#terms" className="legal-link-footer">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
};
