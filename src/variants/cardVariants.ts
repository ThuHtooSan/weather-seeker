import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: {
    y: 400,
    opacity: 0,
    maxHeight: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    maxHeight: 9999,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
