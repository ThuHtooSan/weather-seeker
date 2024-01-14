import { Variants } from 'framer-motion';

export const windMillIconVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const windMillAlertVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 90,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 4,
    },
  },
};
