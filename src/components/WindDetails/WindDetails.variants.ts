import { Variants } from 'framer-motion';

export const windDetailVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

export const beaufortDetailExpandVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      delay: 4,
    },
  },
};

export const windDirectionVariants: Variants = {
  hidden: {
    rotate: -360,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      delay: 3,
    },
  },
};
