import { Variants } from 'framer-motion';

export const settingsModalContainerVariants: Variants = {
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

export const settingsModalVariants: Variants = {
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
