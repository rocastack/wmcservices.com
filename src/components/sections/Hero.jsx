import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

export const Hero = ({ t, handleNavClick }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force play for iOS Safari
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((e) => console.log('Video autoplay failed:', e));
    }
  }, []);

  return (
    <header className="hero jadoo-layout">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        className="hero-video-bg"
      >
        <source src="/video.webm" type="video/webm" />
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
      <div className="container hero-grid single-column">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hero-text-column left-aligned"
        >
          {t.hero.badge && (
            <motion.div variants={fadeUpVariant} className="hero-badge left-aligned">
              {t.hero.badge}
            </motion.div>
          )}

          <motion.h1
            variants={fadeUpVariant}
            className="hero-title left-aligned"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />

          <motion.p variants={fadeUpVariant} className="hero-subtitle left-aligned">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={fadeUpVariant} className="hero-cta-group left-aligned">
            <button className="hero-cool-btn" onClick={(e) => handleNavClick(e, 'contact', 'commercial_contact')}>
              {t.hero.ctaPrimary}
            </button>
            {t.hero.ctaSecondary && (
              <button className="hero-cool-btn secondary" onClick={(e) => handleNavClick(e, 'careers-banner')}>
                {t.hero.ctaSecondary}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};
