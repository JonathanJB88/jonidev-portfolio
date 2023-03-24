import { useContext, useEffect, useState } from 'react';

import { PortfolioContext } from '@/context';
import { renderSkillSet } from '@/utils';
import { ISkill } from '../interfaces/interfaces';

interface SkillsSetProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

export const SkillsSet = ({ techSkills, softSkills }: SkillsSetProps) => {
  //

  return (
    <>
      <div className='mb-12'>
        <h1 className='mb-6 text-2xl font-semibold animate-fade-in dark:text-secondary'>Technical Skills</h1>
        {renderSkillSet(techSkills, 3)}
      </div>
      <div>
        <h1 className='mb-6 text-2xl font-semibold animate-fade-in dark:text-secondary'>Soft Skills</h1>
        {renderSkillSet(softSkills, 3)}
      </div>
    </>
  );
};
