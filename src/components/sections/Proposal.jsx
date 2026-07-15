import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Headset, PhoneCall, Clock } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

export const Proposal = ({ t }) => {
  return (
    <section id="solutions" className="proposal section container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={staggerContainer}
        className="proposal-header center"
      >
        <motion.h2 variants={fadeUpVariant} className="section-title">{t.proposal.title}</motion.h2>
        <motion.p variants={fadeUpVariant} className="section-subtitle-large">
          {t.proposal.desc}
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={staggerContainer}
        className="services-grid"
      >
        {t.proposal.services.map((service, i) => {
          const icons = [
            <MessageSquare key="msg" size={24} />,
            <Headset key="head" size={24} />,
            <PhoneCall key="phone" size={24} />,
            <Clock key="clock" size={24} />
          ];

          return (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className="service-card-saas"
            >
              <div className="service-header-saas">
                <div className="service-icon-minimal">{icons[i]}</div>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h4 className="service-title-minimal">{service.title}</h4>
              <p className="service-desc-minimal">{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
