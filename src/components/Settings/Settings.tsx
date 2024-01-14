import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './settings.scss';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  settingsModalContainerVariants,
  settingsModalVariants,
} from './Settings.variants';
import { useAppContext } from '../../hooks';

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { state, dispatch } = useAppContext();

  return (
    <>
      <div
        className='menu'
        onClick={() => setShowSettings(true)}
      >
        <FontAwesomeIcon icon={icon({ name: 'gear' })} />
      </div>
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className='settings-modal-container'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={settingsModalContainerVariants}
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              className='settings-modal'
              variants={settingsModalVariants}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <h4 className='title'>Settings</h4>
              <div className='option unit'>
                <p>Metric Unit</p>
                <button
                  className={`button ${
                    state.configs.unit === 'metric' ? 'on' : 'off'
                  }`}
                  onClick={() => dispatch({ type: 'TOGGLE_UNIT' })}
                ></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Settings;
