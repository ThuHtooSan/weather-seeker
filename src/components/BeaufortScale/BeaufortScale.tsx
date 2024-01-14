import { motion } from 'framer-motion';
import './beaufort-scale.scss';
import { BeaufortScaleProps, Conditions } from './BeaufortScale.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { beaufortScaleChildrenVariants } from './BeaufortScale.variants';

const BeaufortScale = ({ detail }: BeaufortScaleProps) => {
  const conditions: Conditions = {
    sea: detail.conditions.sea.split('\n'),
    land: detail.conditions.land.split('\n'),
  };

  return (
    <motion.div
      className='beaufort-scale-details'
      initial='hidden'
      animate='visible'
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className='separator'
        variants={beaufortScaleChildrenVariants}
      ></motion.div>
      <motion.h4
        className='beaufort-scale-title'
        variants={beaufortScaleChildrenVariants}
      >
        Beaufort Scale <div className='beaufort-number'>{detail.number}</div>
      </motion.h4>
      <motion.h5
        className='beaufort-scale-subtitle'
        variants={beaufortScaleChildrenVariants}
      >
        - {detail.description} -
      </motion.h5>
      <div className='land-conditions'>
        <motion.h5
          className='land-conditions-title'
          variants={beaufortScaleChildrenVariants}
        >
          <FontAwesomeIcon
            icon={icon({ name: 'mountain-sun' })}
            className='icon'
          />
          Land Conditions
        </motion.h5>
        {conditions.land.map((condition, index) => (
          <motion.p
            className='description'
            key={index}
            variants={beaufortScaleChildrenVariants}
          >
            {condition}
          </motion.p>
        ))}
      </div>
      <div className='sea-conditions'>
        <motion.h5
          className='sea-condition-title'
          variants={beaufortScaleChildrenVariants}
        >
          <FontAwesomeIcon
            icon={icon({ name: 'water' })}
            className='icon'
          />
          Sea Conditions
        </motion.h5>
        {conditions.sea.map((condition, index) => (
          <motion.p
            className='description'
            key={index}
            variants={beaufortScaleChildrenVariants}
          >
            {condition}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default BeaufortScale;
