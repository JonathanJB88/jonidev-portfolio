import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllPosts } from '@/lib/Sanity';

import { Loading, FilterBar, BlogFooter, HeadComponent, FeaturedPostSliderProps, BlogGridProps } from '@/components';
import { useBlogPosts } from '@/hooks';

import { Post } from '@/interfaces';

interface BlogPageProps {
  posts: Post[];
}

const FeaturedPostsSlider = dynamic<FeaturedPostSliderProps>(
  () => import('../../components/Blog/FeaturedPostsSlider').then((mod) => mod.FeaturedPostsSlider),
  {
    ssr: true,
  }
);

const BlogGrid = dynamic<BlogGridProps>(() => import('../../components/Blog/BlogGrid').then((mod) => mod.BlogGrid), {
  ssr: true,
});

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const { latestPosts, filteredPosts, hasMore, categories, tags, handleFilterChange, handleSortChange, loadMore } =
    useBlogPosts(posts);

  return (
    <>
      <HeadComponent title='Blog' />

      <main>
        {!posts.length && <Loading />}
        <FeaturedPostsSlider posts={latestPosts} />

        <section className='container px-8 py-8 mx-auto'>
          <FilterBar
            categories={categories}
            tags={tags}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
          <BlogGrid posts={filteredPosts} hasMore={hasMore} loadMore={loadMore} />
        </section>
      </main>
      <BlogFooter />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default BlogPage;
