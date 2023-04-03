import { useEffect, useState, useMemo, useCallback } from 'react';
import { Post } from '@/interfaces';

export const useBlogPosts = (posts: Post[]) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [currentSort, setCurrentSort] = useState<string>('date');
  const [loadedPostsCount, setLoadedPostsCount] = useState<number>(6);

  const getCategoryTags = useCallback(() => {
    const categoriesSet = new Set<string>();
    const tagsSet = new Set<string>();

    posts.forEach((post) => {
      post.categories.forEach((category) => {
        categoriesSet.add(category.toLowerCase());
      });
      post.tags.forEach((tag) => {
        tagsSet.add(tag.toLowerCase());
      });
    });

    setCategories(Array.from(categoriesSet));
    setTags(Array.from(tagsSet));
  }, [posts]);

  const filterPosts = useCallback(
    (postsToFilter: Post[]): Post[] => {
      return currentFilter === 'all'
        ? postsToFilter
        : postsToFilter.filter((post) => {
            const [filterType, filterName] = currentFilter.split(':');
            const items = filterType === 'category' ? post.categories : post.tags;
            return items.map((x) => x.toLowerCase()).includes(filterName.toLowerCase());
          });
    },
    [currentFilter]
  );

  const sortPosts = useCallback(
    (filteredPosts: Post[]): Post[] => {
      return filteredPosts.sort((a, b) => {
        if (currentSort === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.title.localeCompare(b.title);
      });
    },
    [currentSort]
  );

  const handleFilterChange = (filterValue: string) => {
    setCurrentFilter(filterValue);
  };

  const handleSortChange = (sortValue: string) => {
    setCurrentSort(sortValue);
  };

  const loadMore = () => {
    if (loadedPostsCount >= posts.length) {
      setHasMore(false);
      return;
    }

    const newPosts = posts.slice(loadedPostsCount, loadedPostsCount + 6);
    setLoadedPostsCount((prevCount) => prevCount + newPosts.length);
    setFilteredPosts((prevPosts) => [...prevPosts, ...sortPosts(filterPosts(newPosts))]);
  };

  const slicedPosts = useMemo(() => posts.slice(0, loadedPostsCount), [posts, loadedPostsCount]);

  const filteredAndSortedPosts = useMemo(
    () => sortPosts(filterPosts(slicedPosts)),
    [slicedPosts, filterPosts, sortPosts]
  );

  useEffect(() => {
    setFilteredPosts(filteredAndSortedPosts);
    setHasMore(loadedPostsCount < posts.length);
  }, [filteredAndSortedPosts, loadedPostsCount, posts.length]);

  useEffect(() => {
    getCategoryTags();
    setLatestPosts(posts.slice(0, 5));
  }, [posts, getCategoryTags]);

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
