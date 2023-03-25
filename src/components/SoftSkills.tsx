import { SkillCard } from '@/components';

import { ISkill } from '@/interfaces';

interface SoftSkillsProps {
  softSkills: ISkill[];
}

export const SoftSkills = ({ softSkills }: SoftSkillsProps) => (
  <>
    {softSkills.map(({ name, level }) => (
      <SkillCard key={name} skillTitle={name} skillLevel={level} />
    ))}
  </>
);
