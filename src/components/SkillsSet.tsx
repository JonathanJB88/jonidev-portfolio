import { useContext } from 'react';

import { PortfolioContext } from '@/context';
import { renderSkillSet } from '@/utils';
import { useSpring } from 'react-spring';

export const SkillsSet = () => {
  //

  const { techSkills, softSkills } = useContext(PortfolioContext);

  return (
    <>
      <div className='mb-12'>
        <h1 className='mb-6 text-2xl font-semibold animate-fade-in'>Technical Skills</h1>
        {renderSkillSet(techSkills, 3)}
      </div>
      <div>
        <h1 className='mb-6 text-2xl font-semibold animate-fade-in'>Soft Skills</h1>
        {renderSkillSet(softSkills, 3)}
      </div>
    </>
  );
};
