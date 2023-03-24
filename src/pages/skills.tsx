import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { PortfolioContext } from '@/context';
import { Btn, Loading, SkillsSet } from '@/components';
import { ISkill } from '@/interfaces';

interface SkillsProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

const Skills = ({ techSkills, softSkills }: SkillsProps) => {
  //

  const { setTechSkills, setSoftSkills, setLoading, isLoading } = useContext(PortfolioContext);

  useEffect(() => {
    if (techSkills.length === 0 || softSkills.length === 0) setLoading(true);
    setTechSkills(techSkills);
    setSoftSkills(softSkills);
    setLoading(false);
  }, [techSkills, softSkills]);

  if (isLoading) return <Loading />;

  return (
    <div className='px-16 py-9'>
      <SkillsSet />
      <div className='flex justify-center mt-8 animate-slide-in'>
        <Link href='/projects'>
          <div className='-mt-4'>
            <Btn label='Check out my Projects' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
  const { techSkills, softSkills } = await res.json();

  return {
    props: {
      techSkills,
      softSkills,
    },
  };
};

export default Skills;
