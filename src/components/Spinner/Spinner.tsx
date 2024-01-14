import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SpinnerProps } from './Spinner.types';
import './spinner.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '../../hooks';
import { SpinnerContainerVariants } from './Spinner.variants';

const Spinner = ({ title }: SpinnerProps) => {
  const { state } = useAppContext();
  title = title || 'Loading';

  return (
    <AnimatePresence>
      {state.loading && (
        <motion.div
          className='spinner-container'
          variants={SpinnerContainerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <div className='spinner'>
            <div className='icon-wrapper'>
              <FontAwesomeIcon
                icon={icon({ name: 'snowflake' })}
                className='icon'
              />
            </div>
            <div className='title'>
              <p>{title}</p>
              <div className='dot-wrapper'>
                <span className='dot'>.</span>
                <span className='dot'>.</span>
                <span className='dot'>.</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;
