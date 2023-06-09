import { Slide } from 'react-awesome-reveal';

import { SoftSkills, TechSkills } from '@/components';

import { ISkill } from '../../interfaces';

export interface SkillsSetProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

export const SkillsSet = ({ techSkills, softSkills }: SkillsSetProps) => (
  <section className='relative flex flex-col pb-24 overflow-x-hidden md:flex-row md:overflow-x-auto md:justify-center'>
    <div className='px-8 md:w-3/4'>
      <Slide direction='right' triggerOnce>
        <h2 className='my-6 text-base font-bold text-center md:text-left font-body md:text-xl md:pl-2'>
          Technical Skills
        </h2>
      </Slide>
      <Slide direction='left' triggerOnce>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <TechSkills techSkills={techSkills} />
        </div>
      </Slide>
    </div>
    <div className='px-8 md:w-1/2'>
      <Slide direction='left' triggerOnce>
        <h2 className='my-6 font-bold text-center md:text-right font-body md:text-xl md:pr-2'>Soft Skills</h2>
      </Slide>
      <Slide direction='right' triggerOnce>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <SoftSkills softSkills={softSkills} />
        </div>
      </Slide>
    </div>
  </section>
);

export default SkillsSet;
