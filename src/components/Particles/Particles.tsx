import { motion } from 'framer-motion';
import './particles.scss';
import { particleVariants } from './Particles.variants';
import { WeatherIcon } from '..';
import { useAppContext } from '../../hooks';

const Particles = () => {
  const { state } = useAppContext();
  const iconId = state.weather.current?.weather[0].id || 800;
  const measures = document.body.getBoundingClientRect();
  const { height, width } = measures;
  const keys = Array.from(
    { length: width < 500 ? 20 : 40 },
    (_, index) => index + 1
  );

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

  return (
    <div className='particle-container'>
      {keys.map(key => (
        <motion.div
          className='particle'
          key={key}
          variants={particleVariants}
          animate={{
            ...getRandomXY(),
            rotate: [-`${key * 80}`, key * 70],
          }}
          transition={{
            ease: 'easeInOut',
            duration: key + 10,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <WeatherIcon id={iconId} />
        </motion.div>
      ))}
    </div>
  );
};

export default Particles;
