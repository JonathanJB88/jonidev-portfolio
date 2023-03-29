import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPosts } from '@/lib/Sanity';

import { FeaturedPostSlider, Loading, BlogGrid, FilterBar } from '@/components';
import { useBlogPosts } from '@/hooks';

import { Post } from '@/interfaces';

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  //
  const { latestPosts, filteredPosts, hasMore, categories, tags, handleFilterChange, handleSortChange, loadMore } =
    useBlogPosts(posts);

  return (
    <>
      <Head>
        <title>Jonathan Bracho | Frontend Developer | Blog</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
      </Head>

      <main>
        {!posts.length && <Loading />}
        <FeaturedPostSlider posts={latestPosts} />

        <section className='container px-4 py-8 mx-auto'>
          <FilterBar
            categories={categories}
            tags={tags}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
          <BlogGrid posts={filteredPosts} hasMore={hasMore} loadMore={loadMore} />
        </section>
      </main>
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

export default Blog;
