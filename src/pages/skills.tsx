import { useContext } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Slide } from 'react-awesome-reveal';

import { PortfolioContext } from '@/context';
import { Btn, HeadComponent, Loading, SkillsSetProps } from '@/components';
import { withPageStaticProps } from '@/utils';

import { MyPageProps } from '@/interfaces';

const SkillsSet = dynamic<SkillsSetProps>(() => import('../components/Skills/SkillsSet').then((mod) => mod.SkillsSet), {
  ssr: true,
});

const SkillsPage: NextPage<MyPageProps> = ({ data: { softSkills, techSkills } }) => {
  const { theme } = useContext(PortfolioContext);
  const darkTheme = theme === 'dark';
  const textBg = darkTheme ? 'text-accent' : 'text-primary';

  if (!techSkills || !softSkills || techSkills.length === 0 || softSkills.length === 0) return <Loading />;

  return (
    <>
      <HeadComponent title='Skills' />

      <main className='relative'>
        <Slide direction='down' triggerOnce>
          <h1 className={`pt-12 text-xl font-extrabold text-center font-header md:text-4xl ${textBg}`}>My Skills</h1>
        </Slide>
        <SkillsSet techSkills={techSkills} softSkills={softSkills} />
        <div className='absolute bottom-0 right-0 mb-8 mr-24 md:mr-8 md:mb-10 lg:md-12 animate-slide-in'>
          <Link href='/projects'>
            <Btn label='Explore my Projects' />
          </Link>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = withPageStaticProps('/api/data');

export default SkillsPage;
