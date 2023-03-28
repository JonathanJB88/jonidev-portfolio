import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Loading, TimelineSection } from '@/components';

import { IJourney } from '@/interfaces';

interface JourneyProps {
  journey: IJourney[];
}

const Journey = ({ journey }: JourneyProps) => {
  return (
    <>
      <Head>
        <title>Jonathan Bracho | Frontend Developer | My Journey</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
      </Head>
      <main>{!journey.length ? <Loading /> : <TimelineSection journey={journey} />}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
    const { journey } = await res.json();

    return {
      props: {
        journey,
      },
    };
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    return {
      props: {
        journey: [],
      },
    };
  }
};

export default Journey;
