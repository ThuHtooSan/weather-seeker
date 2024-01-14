import { motion } from 'framer-motion';
import './wind-details-container.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { BeaufortScale, WeatherIcon, WindMillIcon } from '..';
import { useBeaufort, useUnit } from '../../hooks';
import {
  windDirectionVariants,
  windDetailVariants,
  beaufortDetailExpandVariants,
} from './WindDetails.variants';
import { useState } from 'react';
import { cardVariants } from '../../variants';
import { CurrentWeather } from '../../types';

const WindDetails = ({ speed, deg, gust }: CurrentWeather['wind']) => {
  const [showBeaufort, setShowBeaufort] = useState(false);
  const { getUnit, currentUnit } = useUnit();
  const beaufortScale = useBeaufort(speed);
  const speedInMetric = currentUnit === 'imperial' ? speed / 2.24 : speed;
  const windmillSpeed = beaufortScale.number < 10 ? 1 * speedInMetric : 0;

  return (
    <motion.div
      className='wind-details-container'
      variants={cardVariants}
      layout
    >
      <motion.h4
        className='wind-title'
        layout
      >
        <FontAwesomeIcon icon={icon({ name: 'wind' })} /> Wind Details
      </motion.h4>

      <motion.div
        className='wind-details'
        layout
      >
        <WindMillIcon animationSpeed={windmillSpeed} />
        <motion.div
          className='wind-info'
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div
            className='beaufort-scale'
            variants={windDetailVariants}
            title={`Beaufort Scale: ${beaufortScale.number} (${beaufortScale.description})`}
          >
            <div className='icon-wrapper'>
              <WeatherIcon class={`wind-beaufort-${beaufortScale.number}`} />{' '}
            </div>
            {beaufortScale.description}{' '}
            <motion.div
              className='icon-wrapper'
              variants={beaufortDetailExpandVariants}
              onClick={() => setShowBeaufort(!showBeaufort)}
            >
              <FontAwesomeIcon
                icon={icon({ name: 'circle-question', style: 'regular' })}
                className='detail-expand'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='wind-speed'
            variants={windDetailVariants}
            title={`Wind Speed: ${speed} ${getUnit('wind_speed')}`}
          >
            <div className='icon-wrapper'>
              <WeatherIcon class='windy' />
            </div>
            {speed} {getUnit('wind_speed')}
          </motion.div>
          {gust && (
            <motion.div
              className='wind-gust'
              variants={windDetailVariants}
              title={`Wind Gust: ${gust} ${getUnit('wind_speed')}`}
            >
              <div className='icon-wrapper'>
                <WeatherIcon class='strong-wind' />
              </div>
              {gust} {getUnit('wind_speed')}
            </motion.div>
          )}
          {deg && (
            <motion.div
              className='wind-direction'
              variants={windDetailVariants}
              title={`Wind Direction: ${deg} °`}
            >
              <motion.div
                className='icon-wrapper'
                variants={windDirectionVariants}
              >
                <FontAwesomeIcon
                  icon={icon({ name: 'location-arrow' })}
                  style={{ rotate: `${deg - 47}deg` }}
                />
              </motion.div>
              {deg} °
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {showBeaufort && <BeaufortScale detail={beaufortScale} />}
    </motion.div>
  );
};

export default WindDetails;
