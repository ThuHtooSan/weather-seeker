import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './visibility-detail.scss';
import { indicatorVariants } from './VisibilityDetail.variants';
import { useUnit } from '../../hooks';
import { cardVariants } from '../../variants';
import { CurrentWeather } from '../../types';

const VisibilityDetail = ({
  visibility,
}: Pick<CurrentWeather, 'visibility'>) => {
  const { getUnit } = useUnit();
  const visibilityInPercent = (100 / 10000) * visibility;
  let visibilityInKm = Number((visibility / 1000).toFixed(2));
  const cleanedVisibility =
    visibility >= 1000 ? `${visibilityInKm} k` : `${visibility} `;

  return (
    <motion.div
      className='visibility-container'
      variants={cardVariants}
    >
      <h4 className='visibility-title'>
        <FontAwesomeIcon icon={icon({ name: 'eye' })} /> Visibility
      </h4>
      <motion.div className='visibility-bar'>
        <div className='visible-icon'>
          <FontAwesomeIcon icon={icon({ name: 'eye', style: 'regular' })} />
        </div>
        <div className='invisible-icon'>
          <FontAwesomeIcon
            icon={icon({ name: 'eye-slash', style: 'regular' })}
          />
        </div>
        <motion.div
          className='indicator-wrapper'
          initial='hidden'
          whileInView='enter'
          whileTap='tap'
          viewport={{ once: true, amount: 'all', margin: '0px 0px -100px 0px' }}
        >
          <motion.div
            className='indicator'
            data-visibility={`${cleanedVisibility}${getUnit('visibility')}`}
            variants={indicatorVariants}
            style={{ left: `${visibilityInPercent}%` }}
            drag='x'
            dragSnapToOrigin
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VisibilityDetail;
