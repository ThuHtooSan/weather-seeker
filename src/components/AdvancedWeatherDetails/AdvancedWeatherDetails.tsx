import { motion } from 'framer-motion';
import { VisibilityDetail, WindDetails } from '..';
import './advanced-weather-details.scss';
import { CurrentWeather } from '../../types';

const AdvancedWeatherDetails = ({
  visibility,
  wind,
}: Pick<CurrentWeather, 'wind' | 'visibility' | 'clouds'>) => {
  return (
    <motion.div className='advanced-details-container'>
      <WindDetails {...wind} />
      <VisibilityDetail visibility={visibility} />
    </motion.div>
  );
};

export default AdvancedWeatherDetails;
