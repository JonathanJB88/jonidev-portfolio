import Head from 'next/head';

interface HeadComponentProps {
  title: string;
}

export const HeadComponent = ({ title }: HeadComponentProps) => {
  return (
    <Head>
      <title>Jonathan Bracho | Frontend Developer | {title}</title>
      <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='keywords'
        content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
      />
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />
    </Head>
  );
};
