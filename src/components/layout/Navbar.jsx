import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { LanguageSwitch } from '../ui/LanguageSwitch';

export const Navbar = ({
  t,
  lang,
  isScrolled,
  isNavHidden,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavClick,
  toggleLang,
  scrollToTop
}) => {
  return (
    <div className={`navbar-wrapper ${isNavHidden ? 'nav-hidden' : ''}`}>
      <nav className={`pill-navbar ${isScrolled ? 'glass-nav scrolled' : 'transparent-nav'}`} style={{ position: 'relative' }}>
        {/* Corner Logo (Bigger, aligned with margin) */}
        <div className={`nav-logo corner-logo ${isScrolled ? 'hidden' : ''}`} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src="/logo.webp" alt="WMC Logo" className="logo-img hero-logo-size" />
        </div>

        <div className={`nav-logo ${!isScrolled ? 'invisible' : ''}`} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src="/logo.webp" alt="WMC Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
        </div>

        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.nav.about}</a></li>
          <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>{t.nav.services}</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>{t.nav.contact}</a></li>
          <li><a href="#careers-banner" onClick={(e) => handleNavClick(e, 'careers-banner')}>{t.nav.careers}</a></li>
        </ul>

        <div className="nav-actions">
          <LanguageSwitch isEnglish={lang === 'en'} toggleLang={toggleLang} />
        </div>

        <button
          className={`mobile-menu-btn ${!isScrolled ? 'text-white' : ''}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-card">

          {/* Header of mobile menu */}
          <div className="mobile-menu-header">
            <div className="nav-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <img src="/logo.webp" alt="WMC Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                {t.nav.about}
                <ChevronRight size={16} className="link-chevron" />
              </a>
            </li>
            <li>
              <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>
                {t.nav.services}
                <ChevronRight size={16} className="link-chevron" />
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>
                {t.nav.contact}
                <ChevronRight size={16} className="link-chevron" />
              </a>
            </li>
            <li>
              <a href="#careers-banner" onClick={(e) => handleNavClick(e, 'careers-banner')}>
                {t.nav.careers}
                <ChevronRight size={16} className="link-chevron" />
              </a>
            </li>
          </ul>

          <div className="mobile-menu-divider"></div>

          {/* Language Switch */}
          <div className="mobile-lang-wrapper">
            <LanguageSwitch isEnglish={lang === 'en'} toggleLang={toggleLang} />
          </div>

        </div>
      </div>
    </div>
  );
};
