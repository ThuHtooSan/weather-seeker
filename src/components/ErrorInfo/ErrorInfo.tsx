import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useAppContext } from '../../hooks';
import './error-info.scss';
import { Action } from '../../state/reducer.types';
import { AnimatePresence, motion } from 'framer-motion';
import { errorInfoContainerVariants } from './ErrorInfo.variants';

const ErrorInfo = () => {
  const { state, dispatch } = useAppContext();

  const dismissErrorAction = (): Action => ({
    type: 'DISMISS_ERROR',
  });

  const dismissError = () => dispatch(dismissErrorAction());

  return (
    <>
      <AnimatePresence>
        {state.error && (
          <motion.div
            className='error-container'
            onClick={dismissError}
            variants={errorInfoContainerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <div
              className='error-modal'
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <h4 className='title'>Oops!</h4>
              <FontAwesomeIcon
                icon={icon({ name: 'triangle-exclamation' })}
                className='icon'
              />
              <p className='detail'>
                {state.error.replace(/^./, m => m.toUpperCase())}
              </p>
              <button
                className='dismiss'
                onClick={dismissError}
              >
                Okay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ErrorInfo;
