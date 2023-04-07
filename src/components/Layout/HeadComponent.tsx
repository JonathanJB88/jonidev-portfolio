import Head from 'next/head';

export interface HeadComponentProps {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  pageUrl?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const HeadComponent = ({
  title,
  description,
  keywords,
  ogDescription,
  ogTitle,
  ogImage,
  pageUrl,
}: HeadComponentProps) => {
  return (
    <Head>
      <title>Jonathan Bracho | Frontend Developer | {title}</title>
      <meta property='og:title' content={`Jonathan Bracho | Frontend Developer | ${title}`} />
      <meta
        property='og:description'
        name='description'
        content={description || 'Frontend Developer with a strong background in React + Typescript'}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='keywords'
        content={
          keywords ||
          'Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        }
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={pageUrl ? `${baseUrl}/${pageUrl}` : `${baseUrl}/`} />
      <meta property='og:image' content={`${baseUrl}/images/jonidev_logo.png`} />
      <meta property='og:site_name' content='Jonathan Bracho | Frontend Developer' />
      {ogDescription && ogTitle && ogImage && (
        <>
          <meta property='og:title' content={ogTitle} />
          <meta property='og:description' content={ogDescription} />
          <meta property='og:image' content={ogImage} />
        </>
      )}
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />
    </Head>
  );
};

export default HeadComponent;
