import { BallCanvas } from './canvas';
import { SectionWrapper } from '~/hoc';
import { technologies } from '~/constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, i) => (
        <div key={`${tech.name}_${i}`} className='w-28 h-28'>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
