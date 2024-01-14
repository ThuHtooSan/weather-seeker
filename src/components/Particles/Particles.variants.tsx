import { Variants } from 'framer-motion';

const measures = document.body.getBoundingClientRect();
export const { height, width } = measures;

const getRandomXY = () => {
  return {
    x: [
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * (width + 200)),
    ],
    y: [
      Math.floor(Math.random() * height),
      Math.floor(Math.random() * (height + 200)),
    ],
  };
};

export const particleVariants: Variants = {
  float: {
    ...getRandomXY(),
    transition: {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};
