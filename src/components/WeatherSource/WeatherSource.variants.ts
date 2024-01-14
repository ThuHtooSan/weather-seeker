import { Variants } from 'framer-motion';

export const sourceVariants: Variants = {
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
};
