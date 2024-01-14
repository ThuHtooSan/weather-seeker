import { Variants } from 'framer-motion';

export const beaufortScaleChildrenVariants: Variants = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};
