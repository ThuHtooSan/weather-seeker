import { motion } from 'framer-motion';
import './wind-mill-icon.scss';
import {
  windMillAlertVariants,
  windMillIconVariants,
} from './WindMillIcon.variants';
import { WindMillIconProps } from './WindMillIcon.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const WindMillIcon = ({ animationSpeed = 1 }: WindMillIconProps) => {
  const duration = 10 / animationSpeed;

  return (
    <div className='windmill-icon'>
      {animationSpeed <= 0 && (
        <motion.div
          className='shut-down'
          variants={windMillAlertVariants}
        >
          <FontAwesomeIcon
            icon={icon({ name: 'triangle-exclamation' })}
            className='icon'
          />{' '}
          Turbines shut down
        </motion.div>
      )}
      <motion.svg
        className='windmillSvg'
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: 0.3, delay: 1 }}
        height='800px'
        width='800px'
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <motion.path
          variants={windMillIconVariants}
          fill='#38A287'
          d='M256.001,451.314c-88.826,0-172.898,20.338-247.828,56.597h495.655
	C428.899,471.652,344.827,451.314,256.001,451.314z'
        />
        <motion.circle
          variants={windMillIconVariants}
          fill='#9CA9A4'
          cx='255.999'
          cy='130.308'
          r='16.34'
        />
        <motion.path
          variants={windMillIconVariants}
          fill='#f8edff'
          d='M352.671,311.112c-3.908,2.256-5.246,7.253-2.99,11.16c1.513,2.621,4.259,4.086,7.083,4.086
	c1.387,0,2.792-0.353,4.077-1.096l53.116-30.666l53.116,30.666c1.288,0.743,2.692,1.096,4.077,1.096c2.824,0,5.57-1.465,7.083-4.086
	c2.256-3.908,0.917-8.904-2.99-11.16l-53.116-30.666v-61.333c0-4.512-3.657-8.17-8.17-8.17c-4.513,0-8.17,3.658-8.17,8.17v61.333
	L352.671,311.112z'
        >
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            from='0 415 285'
            to='360 415 285'
            dur={`${duration}s`}
            repeatCount='indefinite'
          />
        </motion.path>
        <motion.path
          variants={windMillIconVariants}
          fill='#f8edff'
          d='M40.852,326.359c1.386,0,2.792-0.353,4.077-1.096l53.116-30.666l53.116,30.666c1.288,0.743,2.692,1.096,4.077,1.096
	c2.824,0,5.57-1.465,7.083-4.086c2.256-3.908,0.917-8.904-2.99-11.16l-53.116-30.666v-61.333c0-4.512-3.657-8.17-8.17-8.17
	c-4.513,0-8.17,3.658-8.17,8.17v61.333l-53.116,30.666c-3.908,2.256-5.246,7.253-2.99,11.16
	C35.282,324.894,38.028,326.359,40.852,326.359z'
        >
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            from='0 98 289'
            to='360 98 289'
            dur={`${duration}s`}
            repeatCount='indefinite'
          />
        </motion.path>
        <motion.path
          variants={windMillIconVariants}
          fill='#f8edff'
          d='M151.884,196.691c1.386,0,2.792-0.353,4.077-1.096l84.129-48.571c4.284,3.668,9.841,5.89,15.911,5.89
	c6.069,0,11.627-2.222,15.911-5.89l84.129,48.571c1.288,0.743,2.692,1.096,4.077,1.096c2.824,0,5.57-1.465,7.083-4.086
	c2.256-3.908,0.917-8.904-2.99-11.16l-84.117-48.564c0.269-1.452,0.417-2.947,0.417-4.476c0-10.651-6.831-19.733-16.34-23.105V8.171
	c0-4.512-3.657-8.17-8.17-8.17c-4.513,0-8.17,3.658-8.17,8.17v97.128c-9.51,3.373-16.34,12.455-16.34,23.105
	c0,1.529,0.148,3.024,0.417,4.476l-84.117,48.564c-3.908,2.256-5.246,7.253-2.99,11.16
	C146.313,195.226,149.06,196.691,151.884,196.691z M256.001,120.234c4.506,0,8.17,3.666,8.17,8.17s-3.665,8.17-8.17,8.17
	c-4.506,0-8.17-3.666-8.17-8.17C247.831,123.899,251.495,120.234,256.001,120.234z'
        >
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            from='0 256 129'
            to='360 256 129'
            dur={`${duration}s`}
            repeatCount='indefinite'
          />
        </motion.path>
        <motion.path
          variants={windMillIconVariants}
          fill='#f8edff'
          d='M507.387,496.472c-27.727-13.418-56.183-24.494-85.26-33.23V317.844c0-4.512-3.657-8.17-8.17-8.17s-8.17,3.658-8.17,8.17
	v140.757c-45.858-12.293-93.193-18.827-141.616-19.485V177.425c0-4.512-3.657-8.17-8.17-8.17s-8.17,3.658-8.17,8.17v261.691
	c-48.423,0.659-95.757,7.193-141.616,19.485V317.844c0-4.512-3.657-8.17-8.17-8.17s-8.17,3.658-8.17,8.17v145.399
	c-29.076,8.736-57.532,19.812-85.26,33.23c-4.061,1.965-5.762,6.851-3.795,10.913c1.966,4.062,6.851,5.762,10.913,3.795
	c28.438-13.761,57.665-24.995,87.558-33.685c0.711-0.109,1.393-0.304,2.032-0.584c49.888-14.296,101.627-21.513,154.679-21.513
	c53.051,0,104.79,7.217,154.678,21.513c0.639,0.28,1.322,0.476,2.034,0.585c29.894,8.69,59.12,19.923,87.557,33.684
	c1.147,0.554,2.358,0.818,3.552,0.818c3.035,0,5.95-1.698,7.361-4.613C513.148,503.323,511.449,498.437,507.387,496.472z'
        />
      </motion.svg>
    </div>
  );
};

export default WindMillIcon;
