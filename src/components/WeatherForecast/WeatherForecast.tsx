import { WeatherIcon } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useUnit } from '../../hooks';
import './weather-forecast.scss';
import { motion } from 'framer-motion';
import { cardVariants } from '../../variants';
import { WeatherForecastProps } from './WeatherForecast.types';
import {
  forecastTitleVariants,
  forecastVariants,
} from './WeatherForecast.variants';

const WeatherForecast = ({ list }: WeatherForecastProps) => {
  const { getUnit } = useUnit();

  return (
    <motion.div
      className='weather-forecast-container'
      variants={cardVariants}
    >
      <motion.h4
        className='weather-forecast-title'
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true, amount: 'some', margin: '0px 0px 100px 0px' }}
        variants={forecastTitleVariants}
      >
        5-day Forecast
      </motion.h4>

      <motion.div
        className='weather-forecasts'
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true, amount: 'some', margin: '0px 0px -100px 0px' }}
        transition={{ staggerChildren: 0.5 }}
      >
        {list.map(forecast => {
          const { date, weather, temp } = forecast;
          return (
            <motion.div
              className='forecast'
              key={date.date}
              variants={forecastVariants}
            >
              <h5 className='date'>
                <p className='date'>
                  {date.month.slice(0, 3).replace(/^./, m => m.toUpperCase())}{' '}
                  {date.date < 10 ? `0${date.date}` : `${date.date}`}
                </p>
                <p className='day'>
                  ({date.day.slice(0, 3).replace(/^./, m => m.toUpperCase())})
                </p>
              </h5>
              <p className='description'>
                {weather.description.replace(/^.|(?<=\s)\w/g, m =>
                  m.toUpperCase()
                )}
              </p>
              <div className='icon-wrapper'>
                <WeatherIcon name={weather.icon.replace('n', 'd')} />
              </div>
              <div className='temps'>
                <p className='temp temp-max'>
                  <FontAwesomeIcon
                    icon={icon({ name: 'angle-up' })}
                    className='icon'
                  />
                  {temp.max} {getUnit('temperature')}
                </p>
                <p className='temp temp-min'>
                  <FontAwesomeIcon
                    icon={icon({ name: 'angle-down' })}
                    className='icon'
                  />
                  {temp.min} {getUnit('temperature')}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WeatherForecast;
