import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { PortfolioContext } from '@/context';
import { Btn, Loading, SkillsSet } from '@/components';
import { ISkill } from '@/interfaces';
import { Transition } from 'react-spring';

interface SkillsProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

const Skills = ({ techSkills, softSkills }: SkillsProps) => {
  //

  if (!techSkills || !softSkills) return <Loading />;

  return (
    <div className='px-16 py-9'>
      <Transition
        items={<SkillsSet techSkills={techSkills} softSkills={softSkills} />}
        from={{ opacity: 0, transform: 'translateY(20px)' }}
        enter={{ opacity: 1, transform: 'translateY(0)' }}
        leave={{ opacity: 0, transform: 'translateY(20px)' }}
      >
        {(styles, item) => item && <div style={styles}>{item}</div>}
      </Transition>
      <Transition
        items={
          <div className='flex justify-center mt-8 animate-slide-in'>
            <Link href='/projects'>
              <div className='-mt-4'>
                <Btn label='Check out my Projects' />
              </div>
            </Link>
          </div>
        }
        from={{ opacity: 0, transform: 'translateY(20px)' }}
        enter={{ opacity: 1, transform: 'translateY(0)' }}
        leave={{ opacity: 0, transform: 'translateY(20px)' }}
      >
        {(styles, item) => item && <div style={styles}>{item}</div>}
      </Transition>
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
