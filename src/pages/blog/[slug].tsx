import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Post } from '@/interfaces';
import { getAllPosts, getPostBySlug } from '@/lib/Sanity';
import { PostDetail } from '@/components';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostPageProps {
  post: Post | null;
}

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostDetail post={post} />;
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
