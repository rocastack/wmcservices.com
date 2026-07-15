import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const AnimatedMetric = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const animatedNum = useCountUp(stat.num !== undefined ? stat.num : 0, isInView);

  return (
    <motion.div variants={fadeUpVariant} className="metric-item" ref={ref}>
      <h2 className="metric-value">
        {stat.num !== undefined ? (
          <span>{stat.prefix || ""}{animatedNum}{stat.suffix || ""}</span>
        ) : (
          stat.value
        )}
      </h2>
      <p className="metric-label">{stat.label}</p>
    </motion.div>
  );
};
