import { MainDetails, WeatherIcon } from '..';
import { motion } from 'framer-motion';
import './basic-weather-details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useUnit } from '../../hooks';
import { cardVariants } from '../../variants';
import { CurrentWeather } from '../../types';

const BasicWeatherDetails = ({
  weather,
  main,
  sys,
  name: city,
}: Pick<CurrentWeather, 'weather' | 'main' | 'sys' | 'name'>) => {
  const { getUnit } = useUnit();
  const { icon: iconName, description: condition } = weather[0];
  const { feels_like, humidity, temp } = main;

  return (
    <div className='basic-details-container'>
      <motion.div
        className='basic-details'
        variants={cardVariants}
      >
        <h3 className='location'>
          <FontAwesomeIcon
            icon={icon({ name: 'location-dot' })}
            className='icon'
          />
          <p>
            {city}, {sys.country}
          </p>
        </h3>
        <div className='weather'>
          <section className='section-left'>
            <p className='feels-like'>
              <FontAwesomeIcon
                icon={icon({ name: 'face-frown-open', style: 'regular' })}
              />
              {feels_like} {getUnit('temperature')}
            </p>
          </section>
          <section className='section-center'>
            <h4 className='temp'>
              {temp} {getUnit('temperature')}
            </h4>
            <p className='condition'>
              {condition.replace(/^.|(?<=\s)./g, m => m.toUpperCase())}
            </p>
            <div className='icon-wrapper'>
              <WeatherIcon name={iconName} />
            </div>
          </section>
          <section className='section-right'>
            <p className='humidity'>
              <WeatherIcon class='umbrella' /> {humidity}%
            </p>
          </section>
        </div>
      </motion.div>
      <MainDetails {...main} />
    </div>
  );
};

export default BasicWeatherDetails;
