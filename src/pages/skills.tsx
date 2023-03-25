import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

import { Btn, Loading, SkillsSet } from '@/components';

import { ISkill } from '@/interfaces';

interface SkillsProps {
  techSkills: ISkill[];
  softSkills: ISkill[];
}

const Skills = ({ techSkills, softSkills }: SkillsProps) => {
  //

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

      <main>
        <div className='px-16 py-9'>
          <Fade direction='right' triggerOnce>
            <SkillsSet techSkills={techSkills} softSkills={softSkills} />
          </Fade>
          <Fade direction='right' triggerOnce>
            <div className='flex justify-center mt-8 animate-slide-in'>
              <Link href='/projects'>
                <div className='-mt-4'>
                  <Btn label='Check out my Projects' />
                </div>
              </Link>
            </div>
          </Fade>
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
        techSkills: null,
        softSkills: null,
      },
    };
  }
};

export default Skills;
