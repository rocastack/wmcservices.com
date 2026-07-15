import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Banner = ({ t, setIsModalOpen }) => {
  return (
    <div id="careers-banner" className="careers-banner section container">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-150px" }}
        className="careers-banner-card"
      >
        <div className="banner-content">
          <h2 className="banner-title">{t.banner.title}</h2>
          <p className="banner-desc">{t.banner.desc}</p>
        </div>
        <div className="banner-action">
          <button className="banner-btn" onClick={() => setIsModalOpen(true)}>
            {t.banner.btn} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
