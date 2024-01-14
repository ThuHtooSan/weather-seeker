import { Variants } from 'framer-motion';

export const forecastTitleVariants: Variants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

export const forecastVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '400px',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
    },
  },
};
