import { Theme } from '@/context';
import { getIconComponent } from '@/utils';

import { ISkill } from '@/interfaces';

export const renderSkillSet = (skills: ISkill[], numCols: number, theme: Theme) => {
  //

  const barColor = theme === 'dark' ? 'bg-accent' : 'bg-primary';

  const numRows = Math.ceil(skills.length / numCols);
  const rows = [];

  for (let row = 0; row < numRows; row++) {
    const cols = [];

    for (let col = 0; col < numCols; col++) {
      const index = row * numCols + col;

      if (index < skills.length) {
        const skill = skills[index];
        const IconComponent = getIconComponent(skill.name);

        cols.push(
          <div key={skill.name} className='flex items-center mb-4'>
            <IconComponent className='mr-4 text-2xl dark:text-secondary' />
            <div className='flex-1'>
              <div className='flex items-center justify-between mb-1'>
                <p className='text-base font-semibold dark:text-secondary'>{skill.name}</p>
                <p className='text-sm dark:text-secondary'>{skill.level}</p>
              </div>
              <div className='w-full h-2 rounded opacity-75 bg-background-light'>
                <div className={`h-full ${barColor} opacity-90 rounded`} style={{ width: skill.level }}></div>
              </div>
            </div>
          </div>
        );
      } else {
        cols.push(<div key={`col-${col}`} className='w-full'></div>);
      }
    }

    rows.push(
      <div key={`row-${row}`} className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 animate-fade-in'>
        {cols}
      </div>
    );
  }

  return rows;
};
