import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Intro } from '@/components';

interface HomeProps {
  about: string;
}

const Home = ({ about }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Jonathan Bracho | Frontend Developer | Portfolio</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Intro about={about} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`);
  const { about } = await res.json();
  return {
    props: { about },
  };
};

export default Home;
