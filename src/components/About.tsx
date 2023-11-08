import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '~/styles';
import { services } from '~/constants';
import { fadeIn, textVariant } from '../utils/motion.js';

import { SectionWrapper } from '~/hoc';

interface IServiceCardProps {
  title: string;
  index: number;
  icon: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'>
        I&apos;m a skilled frontend developer with experience in TypeScript and JavaScript, and familiar with frameworks
        like React, Nextjs. I&apos;m a skilled frontend developer with experience in TypeScript and JavaScript, and
        familiar with frameworks like React, Nextjs. I also have a basic understanding of backend technologies like
        Golang and Node.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>

      <div className='mt-20 flex justify-center flex-wrap lg:flex-nowrap gap-10'>
        {services.map((service, i) => (
          <ServiceCard key={`${service.title}_${i}`} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
