import { cardVariants } from '../../variants';
import { WeatherSourceProps } from './WeatherSource.types';
import './weather-source.scss';
import { motion } from 'framer-motion';

const WeatherSource = ({ dt }: WeatherSourceProps) => {
  const currentDate = new Date();
  const sourceDate = new Date(dt * 1000);
  let dateString: string = '';

  if (sourceDate.getDate() === currentDate.getDate()) {
    if (sourceDate.getHours() === currentDate.getHours()) {
      const minuteOffset = currentDate.getMinutes() - sourceDate.getMinutes();

      dateString =
        minuteOffset === 0
          ? 'just now'
          : `${minuteOffset} ${minuteOffset === 1 ? 'min' : 'mins'} ago`;
    } else {
      const hourOffset = currentDate.getHours() - sourceDate.getHours();
      dateString = `${hourOffset} ${hourOffset === 1 ? 'hour' : 'hours'} ago`;
    }
  } else {
    dateString = `${sourceDate.toLocaleDateString()} ${sourceDate.toLocaleTimeString()}`;
  }

  return (
    <motion.div
      className='source-info'
      variants={cardVariants}
    >
      <p className='source'>
        Source:{' '}
        <a
          href='http://openweathermap.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          OpenWeatherMap
        </a>
      </p>
      <p className='last-update'>
        Last updated:<span className='white-space'> </span>
        {dateString}
      </p>
    </motion.div>
  );
};

export default WeatherSource;
