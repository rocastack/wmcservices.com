import React, { useState, useRef, useEffect } from 'react';
import { WhatsappIcon } from './components/icons/Icons';
import { translations } from './data/translations';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Metrics } from './components/sections/Metrics';
import { Profile } from './components/sections/Profile';
import { Proposal } from './components/sections/Proposal';
import { Contact } from './components/sections/Contact';
import { CareersModal } from './components/modals/CareersModal';
import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
  const [formState, setFormState] = useState('idle');
  const [lang, setLang] = useState('es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const handleNavClick = (e, targetId, tab = null) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start = null;

      const easeInOutCubic = (time, begin, change, duration) => {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time + begin;
        return change / 2 * ((time -= 2) * time * time + 2) + begin;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    const formData = new FormData(e.target);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setFormState('success'))
      .catch((error) => {
        console.error(error);
        setFormState('idle');
      });
  };

  const handleCareersSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    const formData = new FormData(e.target);
    fetch('/', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        setFormState('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setFormState('idle');
          setUploadedFileName("");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setFormState('idle');
      });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-blue"></div>
      <div className="ambient-glow glow-gold"></div>

      <Navbar 
        t={t}
        lang={lang}
        isScrolled={isScrolled}
        isNavHidden={isNavHidden}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavClick={handleNavClick}
        toggleLang={toggleLang}
        scrollToTop={scrollToTop}
      />

      <Hero t={t} handleNavClick={handleNavClick} />
      <Metrics t={t} />
      <Profile t={t} />
      <Proposal t={t} />
      <Contact t={t} formState={formState} handleContactSubmit={handleContactSubmit} setIsModalOpen={setIsModalOpen} />
      <CareersModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        t={t}
        formState={formState}
        handleCareersSubmit={handleCareersSubmit}
        uploadedFileName={uploadedFileName}
        setUploadedFileName={setUploadedFileName}
      />
      <Footer t={t} handleNavClick={handleNavClick} setIsModalOpen={setIsModalOpen} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=584245937012&text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios.&type=phone_number&app_absent=0"
        className="floating-whatsapp"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon size={32} />
      </a>
    </div>
  );
}

export default App;
