import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

/**
 * Consistent section wrapper with animation for case study sections.
 */
const CaseStudySection = ({ children, className = '', noPadding }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
};

export default CaseStudySection;
