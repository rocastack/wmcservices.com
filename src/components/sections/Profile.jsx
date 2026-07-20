import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

export const Profile = ({ t }) => {
  return (
    <section id="about" className="profile section container" style={{ position: 'relative' }}>
      <div className="ambient-glow glow-blue" style={{ top: '-10%', left: '-20%' }}></div>
      <div className="ambient-glow glow-gold" style={{ top: '40%', right: '-30%' }}></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={staggerContainer}
        className="profile-layout"
      >
        <motion.div variants={fadeUpVariant} className="profile-image-wrapper saas-shadow">
          <img src="/1.webp" alt="WMC Office Environment" className="profile-image" width="364" height="455" loading="lazy" />
        </motion.div>
        <motion.div variants={fadeUpVariant} className="profile-text">
          <div className="section-header">
            <h2 className="section-title-left">{t.profile.title}</h2>
          </div>
          <p className="profile-description">
            {t.profile.desc}
          </p>
          {t.profile.desc2 && (
            <p className="profile-description" style={{ marginTop: '1rem' }}>
              {t.profile.desc2}
            </p>
          )}

          <ul className="premium-list">
            {t.profile.list.map((item, i) => (
              <li key={i}>
                <div className="list-icon-wrapper">
                  <ChevronRight size={18} className="list-icon" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};
