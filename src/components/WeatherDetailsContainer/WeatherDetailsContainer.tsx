import { motion } from 'framer-motion';
import { WeatherDetailsContainerProps } from './WeatherDetailsContainer.types';
import {
  BasicWeatherDetails,
  AdvancedWeatherDetails,
  WeatherForecast,
  WeatherSource,
} from '..';
import './weather-details-container.scss';

const WeatherDetailsContainer = ({
  currentWeather,
  forecastData,
}: WeatherDetailsContainerProps) => {
  const { weather, main, clouds, visibility, wind, dt, sys, name } =
    currentWeather;
  return (
    <motion.div
      className='weather-details-container'
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{ staggerChildren: 0.3 }}
    >
      <div className='current'>
        <BasicWeatherDetails {...{ weather, main, sys, name }} />
        <AdvancedWeatherDetails {...{ visibility, wind, clouds }} />
      </div>
      <div className='forecasts'>
        <WeatherForecast list={forecastData.list} />
        <WeatherSource dt={dt} />
      </div>
    </motion.div>
  );
};

export default WeatherDetailsContainer;
