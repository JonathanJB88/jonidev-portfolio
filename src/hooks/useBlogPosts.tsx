import { useEffect, useState } from 'react';

import { Post } from '@/interfaces';

export const useBlogPosts = (posts: Post[]) => {
  //
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>(posts.slice(0, 5));

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
    if (filterValue === 'all') setFilteredPosts(posts);
    const [filterType, filterName] = filterValue.split(':');
    if (filterType === 'category')
      setFilteredPosts(
        posts.filter((post) =>
          post.categories.map((category) => category.toLowerCase()).includes(filterName.toLowerCase())
        )
      );
    if (filterType === 'tag')
      setFilteredPosts(
        posts.filter((post) => post.tags.map((tag) => tag.toLowerCase()).includes(filterName.toLowerCase()))
      );
  };

  const handleSortChange = (sortValue: string) => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (sortValue === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });
    setFilteredPosts(sortedPosts);
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
