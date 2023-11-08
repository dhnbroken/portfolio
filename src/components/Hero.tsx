import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '~/styles';
// import { ComputersCanvas } from './canvas';
const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-center items-center gap-5`}
      >
        <div className='mt-[-20%]'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I&apos;m <span className='text-[#915eff]'>Nam Dang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Frontend Developer <br className='sm:block hidden' /> I develop interfaces and web application.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
