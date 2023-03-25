import { SkillCard } from '@/components';

import { ISkill } from '@/interfaces';

interface TechSkillsProps {
  techSkills: ISkill[];
}

export const TechSkills = ({ techSkills }: TechSkillsProps) => (
  <>
    {techSkills.map(({ name, level }) => (
      <SkillCard key={name} skillTitle={name} skillLevel={level} />
    ))}
  </>
);
