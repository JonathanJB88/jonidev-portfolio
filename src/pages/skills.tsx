import { useContext } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';

import { PortfolioContext } from '@/context';
import { Btn, Loading, SkillsSet } from '@/components';

import { ISkill } from '@/interfaces';

interface SkillsProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

const Skills = ({ techSkills, softSkills }: SkillsProps) => {
  //

  const { theme } = useContext(PortfolioContext);

  const darkTheme = theme === 'dark';
  const textBg = darkTheme ? 'text-accent' : 'text-primary';

  if (!techSkills || !softSkills) return <Loading />;

  return (
    <>
      <Head>
        <title>Jonathan Bracho | Frontend Developer | Skills</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
      </Head>

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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
    const { techSkills, softSkills } = await res.json();

    return {
      props: {
        techSkills,
        softSkills,
      },
    };
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    return {
      props: {
        techSkills: [],
        softSkills: [],
      },
    };
  }
};

export default Skills;
