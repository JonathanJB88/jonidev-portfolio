import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import { getAllPosts, getPostBySlug } from '@/lib/Sanity';
import { BlogFooter, HeadComponent, Loading, NotFoundPost, PostDetailProps } from '@/components';

import { Post } from '@/interfaces';
import dynamic from 'next/dynamic';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostPageProps {
  post: Post | null;
}

const DynamicPostDetail = dynamic<PostDetailProps>(
  () => import('../../components/Blog/PostDetail').then((mod) => mod.PostDetail),
  {
    ssr: true,
  }
);

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const router = useRouter();
  const pageUrl = router.asPath;

  if (router.isFallback) return <Loading />;

  return (
    <>
      <HeadComponent
        title={post?.title || 'Frontend Blog Post'}
        description={post?.excerpt || 'Read the latest article on web development, programming, and technology trends.'}
        keywords={post?.tags.join(', ') || 'web development, programming, technology trends, blog, article'}
        ogTitle={post?.title}
        ogDescription={post?.excerpt}
        ogImage={post?.coverImage || '/images/jonidev_logo.png'}
        pageUrl={pageUrl}
      />
      <main>{post ? <DynamicPostDetail post={post} /> : <NotFoundPost />}</main>
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
