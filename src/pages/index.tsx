import Head from 'next/head';

const Home = () => {
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
        <h1 className='text-4xl font-bold text-red-600'>Hello Dev !!</h1>
        <p className='text-2xl font-semibold text-gray-600'>Welcome to my portfolio</p>
      </main>
    </>
  );
};

export default Home;
