import InfiniteScroll from 'react-infinite-scroll-component';

import { BlogCard } from '@/components';

import { Post } from '@/interfaces';

interface BlogGridProps {
  posts: Post[];
  hasMore: boolean;
  loadMore: () => void;
}

export const BlogGrid = ({ posts, hasMore, loadMore }: BlogGridProps) => {
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>All posts have been loaded</p>}
      className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
    >
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};
