import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import typescriptLogo from '../../assets/typescript.svg';
import sassLogo from '../../assets/sass.png';
import './about.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  aboutControllerVariants,
  aboutModalContainerVariants,
  aboutModalVariants,
} from './About.variants';

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleDismiss = () => setShowAbout(false);

  return (
    <>
      <motion.div
        className='about-controller'
        onClick={() => setShowAbout(true)}
        variants={aboutControllerVariants}
        initial='hidden'
        animate='visible'
      >
        <FontAwesomeIcon
          icon={icon({ name: 'code' })}
          className='icon'
        />
      </motion.div>
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className='about-container'
            variants={aboutModalContainerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            onClick={handleDismiss}
          >
            <motion.div
              className='about'
              variants={aboutModalVariants}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                className='dismiss-about'
                onClick={handleDismiss}
              >
                <FontAwesomeIcon
                  icon={icon({ name: 'circle-xmark' })}
                  className='icon'
                />
              </button>
              <h3 className='title'>About</h3>
              <p className='author'>
                Developed by{' '}
                <a
                  href='http://github.com/thuhtoosan'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bold'
                >
                  Thu Htoo San{' '}
                  <FontAwesomeIcon
                    icon={icon({ name: 'arrow-up-right-from-square' })}
                    className='icon link-opener-blank'
                  />
                </a>
              </p>
              <p className='source-code'>
                View source code at{' '}
                <a
                  href='http://github.com/thuhtoosan/react-weather-app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bold'
                >
                  GitHub{' '}
                  <FontAwesomeIcon
                    icon={icon({ name: 'arrow-up-right-from-square' })}
                    className='icon link-opener-blank'
                  />
                </a>
              </p>

              <div className='separator'></div>

              <div className='tech-stack'>
                <motion.h5 className='title'>Tech Stack </motion.h5>
                <ul className='technologies'>
                  <motion.li
                    drag
                    dragSnapToOrigin
                  >
                    React{' '}
                    <img
                      src={reactLogo}
                      alt='React Logo'
                      title='React Logo'
                    />
                  </motion.li>
                  with
                  <motion.li
                    drag
                    dragSnapToOrigin
                  >
                    Vite
                    <img
                      src={viteLogo}
                      alt='Vite Logo'
                      title='Vite Logo'
                    />
                    template
                  </motion.li>
                  <motion.li
                    drag
                    dragSnapToOrigin
                  >
                    TypeScript{' '}
                    <img
                      src={typescriptLogo}
                      alt='TypeScript Logo'
                      title='TypeScript Logo'
                    />
                  </motion.li>
                  <motion.li
                    drag
                    dragSnapToOrigin
                  >
                    Sass
                    <img
                      src={sassLogo}
                      alt='Sass Logo'
                      title='Sass Logo'
                    />
                  </motion.li>
                  <motion.li
                    drag
                    dragSnapToOrigin
                  >
                    Framer Motion
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
