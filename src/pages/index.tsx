import { NextPage } from 'next';

import { HeadComponent, Intro, Loading } from '@/components';
import { withPageStaticProps } from '@/utils';

import { MyPageProps } from '@/interfaces';

const HomePage: NextPage<MyPageProps> = ({ data: { about } }) => (
  <>
    <HeadComponent
      title='Portfolio'
      description='Jonathan Bracho - Frontend Developer specializing in React and TypeScript. Check out my skills, projects, and get in touch.'
      keywords='portfolio, frontend developer, web developer, react, typescript, skills, projects'
    />
    <main>{!about ? <Loading /> : <Intro about={about} />}</main>
  </>
);

export const getStaticProps = withPageStaticProps('/api/data');

export default HomePage;
