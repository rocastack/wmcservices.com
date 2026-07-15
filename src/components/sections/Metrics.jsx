import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedMetric } from '../ui/AnimatedMetric';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

export const Metrics = ({ t }) => {
  return (
    <section className="metrics container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={staggerContainer}
        className="metrics-wrapper"
      >
        {t.metrics.map((stat, i) => (
          <AnimatedMetric key={i} stat={stat} />
        ))}
      </motion.div>
    </section>
  );
};
