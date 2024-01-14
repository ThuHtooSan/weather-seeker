import { motion } from 'framer-motion';
import './main-details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useUnit } from '../../hooks';
import { cardVariants } from '../../variants';
import { WeatherIcon } from '..';
import { CurrentWeather } from '../../types';

const MainDetails = ({
  temp_min,
  temp_max,
  pressure,
  sea_level,
  grnd_level: ground_level,
}: CurrentWeather['main']) => {
  const { getUnit } = useUnit();

  return (
    <motion.div
      className='main-details-container'
      variants={cardVariants}
    >
      <div className='temp-max'>
        <p>
          <FontAwesomeIcon icon={icon({ name: 'temperature-arrow-up' })} />{' '}
          Maximum Temperature
        </p>
        <p>
          {temp_max} {getUnit('temperature')}
        </p>
      </div>
      <div className='temp-min'>
        <p>
          <FontAwesomeIcon icon={icon({ name: 'temperature-arrow-down' })} />{' '}
          Minimum Temperature
        </p>
        <p>
          {temp_min} {getUnit('temperature')}
        </p>
      </div>
      {sea_level && ground_level ? (
        <>
          {sea_level && (
            <div className='pressure-sea'>
              <p>
                <FontAwesomeIcon icon={icon({ name: 'ship' })} /> Pressure at
                the sea level
              </p>
              <p>
                {sea_level} {getUnit('pressure')}
              </p>
            </div>
          )}
          {ground_level && (
            <div className='pressure-ground'>
              <p>
                <FontAwesomeIcon icon={icon({ name: 'tree-city' })} /> Pressure
                at the ground level
              </p>
              <p>
                {ground_level} {getUnit('pressure')}
              </p>
            </div>
          )}
        </>
      ) : (
        <div className='pressure'>
          <p>
            <WeatherIcon class='barometer' />
            <span className='white-space'> </span> Pressure
          </p>
          <p>
            {pressure} {getUnit('pressure')}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default MainDetails;
