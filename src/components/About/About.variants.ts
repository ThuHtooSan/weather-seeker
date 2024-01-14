import { Variants } from 'framer-motion';

export const aboutControllerVariants: Variants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      delay: 5,
      duration: 1,
    },
  },
};

export const aboutModalContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

export const aboutModalVariants: Variants = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      velocity: 2,
    },
  },
};
