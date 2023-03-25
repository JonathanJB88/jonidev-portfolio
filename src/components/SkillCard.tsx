import { useContext } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';

import { PortfolioContext } from '@/context';
import { getIconComponent } from '@/utils';

interface SkillCardProps {
  skillTitle: string;
  skillLevel: string;
}

export const SkillCard = ({ skillTitle, skillLevel }: SkillCardProps) => {
  //
  const Icon = getIconComponent(skillTitle);
  const { theme } = useContext(PortfolioContext);

  const isDark = theme === 'dark';

  const barBg = isDark ? 'bg-accent' : 'bg-primary';
  const cardBg = isDark ? 'bg-slate-700' : 'bg-secondary';

  return (
    <div className={`flex p-4 rounded-md bg- ${cardBg}`}>
      <div className='flex items-center'>
        <JackInTheBox delay={500}>
          <Icon className='mr-4 text-2xl md:text-4xl dark:text-secondary' />
        </JackInTheBox>
      </div>
      <div>
        <h2 className='overflow-hidden text-sm font-bold font-body md:text-lg whitespace-nowrap overflow-ellipsis'>
          {skillTitle}
        </h2>
        <div className='h-2 mt-2 bg-gray-500 rounded-md'>
          <div className={`h-2 rounded-md ${barBg}`} style={{ width: skillLevel }} />
        </div>
      </div>
    </div>
  );
};
