import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import { getAllPosts, getPostBySlug } from '@/lib/Sanity';
import { BlogFooter, Loading, NotFoundPost, PostDetail } from '@/components';

import { Post } from '@/interfaces';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostPageProps {
  post: Post | null;
}

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) return <Loading />;

  return (
    <>
      <Head>
        <title>Jonathan Bracho | Blog | {post?.title || 'Frontend Blog Posts'}</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
      </Head>
      <main>{post ? <PostDetail post={post} /> : <NotFoundPost />}</main>
      <BlogFooter />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostPageProps, Params> = async ({ params }) => {
  const post = params ? await getPostBySlug(params.slug) : null;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
