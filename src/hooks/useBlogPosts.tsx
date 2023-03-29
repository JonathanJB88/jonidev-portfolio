import { useEffect, useState } from 'react';

import { Post } from '@/interfaces';

export const useBlogPosts = (posts: Post[]) => {
  //
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  const getCategoryTags = () => {
    const categories: string[] = [];
    const tags: string[] = [];
    posts.forEach((post) => {
      post.categories.forEach((category) => {
        if (!categories.includes(category.toLowerCase())) categories.push(category.toLowerCase());
      });
      post.tags.forEach((tag) => {
        if (!tags.includes(tag.toLowerCase())) tags.push(tag.toLowerCase());
      });
    });
    setCategories(categories);
    setTags(tags);
  };

  const handleFilterChange = (filterValue: string) => {
    setFilteredPosts(
      filterValue === 'all'
        ? posts
        : posts.filter((post) => {
            const [filterType, filterName] = filterValue.split(':');
            const items = filterType === 'category' ? post.categories : post.tags;
            return items.map((x) => x.toLowerCase()).includes(filterName.toLowerCase());
          })
    );
  };

  const handleSortChange = (sortValue: string) => {
    setFilteredPosts((prevState) => {
      const sortedPosts = [...prevState];
      return sortedPosts.sort((a, b) => {
        if (sortValue === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.title.localeCompare(b.title);
      });
    });
  };

  const loadMore = () => {
    const currentLength = filteredPosts.length;
    const newPosts = posts.slice(currentLength, currentLength + 6);
    if (newPosts.length === 0) setHasMore(false);
    setFilteredPosts((prevPosts) => [...prevPosts, ...newPosts]);
  };

  useEffect(() => {
    setFilteredPosts(posts);
    getCategoryTags();
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  return {
    latestPosts,
    filteredPosts,
    hasMore,
    categories,
    tags,
    handleFilterChange,
    handleSortChange,
    loadMore,
  };
};
