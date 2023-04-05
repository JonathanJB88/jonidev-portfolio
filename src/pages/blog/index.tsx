import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllPosts } from '@/lib/Sanity';

import { Loading, FilterBar, BlogFooter, HeadComponent, FeaturedPostSliderProps, BlogGridProps } from '@/components';
import { useBlogPosts } from '@/hooks';

import { Post } from '@/interfaces';

interface BlogPageProps {
  posts: Post[];
}

const DynamicFeaturedPostsSlider = dynamic<FeaturedPostSliderProps>(
  () => import('../../components/Blog/FeaturedPostsSlider').then((mod) => mod.FeaturedPostsSlider),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const DynamicBlogGrid = dynamic<BlogGridProps>(
  () => import('../../components/Blog/BlogGrid').then((mod) => mod.BlogGrid),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const { latestPosts, filteredPosts, hasMore, categories, tags, handleFilterChange, handleSortChange, loadMore } =
    useBlogPosts(posts);

  return (
    <>
      <HeadComponent
        title='Blog'
        description="Read the latest articles on web development, programming, and technology trends in Jonathan Bracho's Blog."
        keywords='web development, programming, technology trends, blog, articles, post'
        pageUrl='/blog'
      />

      <main>
        {!posts.length && <Loading />}
        <DynamicFeaturedPostsSlider posts={latestPosts} />

        <section className='container px-8 py-8 mx-auto'>
          <FilterBar
            categories={categories}
            tags={tags}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
          <DynamicBlogGrid posts={filteredPosts} hasMore={hasMore} loadMore={loadMore} />
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
