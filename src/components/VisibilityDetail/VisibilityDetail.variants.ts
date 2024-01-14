import { Variants } from 'framer-motion';

export const indicatorVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
  tap: {
    scale: 1.1,
  },
};
