import { renderHook, act } from '@testing-library/react';
import { useBlogPosts } from '@/hooks';
import { Post } from '@/interfaces';

const samplePosts: Post[] = [
  {
    _id: '1',
    title: 'Sample Post 1',
    slug: 'sample-post-1',
    content: [],
    excerpt: 'Sample excerpt 1',
    coverImage: 'sample-cover-image-1',
    date: '2023-01-01',
    author: {
      name: 'Author 1',
      picture: 'author-picture-1',
    },
    categories: ['Category 1'],
    tags: ['Tag 1'],
  },
  {
    _id: '2',
    title: 'Sample Post 2',
    slug: 'sample-post-2',
    content: [],
    excerpt: 'Sample excerpt 2',
    coverImage: 'sample-cover-image-2',
    date: '2023-01-02',
    author: {
      name: 'Author 2',
      picture: 'author-picture-2',
    },
    categories: ['Category 1', 'Category 2'],
    tags: ['Tag 2'],
  },
  {
    _id: '3',
    title: 'Sample Post 3',
    slug: 'sample-post-3',
    content: [],
    excerpt: 'Sample excerpt 3',
    coverImage: 'sample-cover-image-3',
    date: '2023-01-03',
    author: {
      name: 'Author 3',
      picture: 'author-picture-3',
    },
    categories: ['Category 2'],
    tags: ['Tag 1'],
  },
];

describe('useBlogPosts hook', () => {
  test('handles filtering and sorting correctly', () => {
    const { result } = renderHook(() => useBlogPosts(samplePosts));

    expect(result.current.filteredPosts.length).toBe(samplePosts.length); // Updated

    act(() => {
      result.current.handleFilterChange('category:Category 1');
    });

    expect(result.current.filteredPosts.length).toBe(2);

    act(() => {
      result.current.handleSortChange('title');
    });

    expect(result.current.filteredPosts[0].title).toBe('Sample Post 1');
  });

  test('loads more posts', () => {
    const { result } = renderHook(() => useBlogPosts(samplePosts));

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.filteredPosts.length).toBe(samplePosts.length);
  });

  test('updates categories and tags', () => {
    const { result } = renderHook(() => useBlogPosts(samplePosts));

    expect(result.current.categories).toEqual(['category 1', 'category 2']); // Updated
    expect(result.current.tags).toEqual(['tag 1', 'tag 2']); // Updated
  });

  test('updates latest posts', () => {
    const { result } = renderHook(() => useBlogPosts(samplePosts));

    expect(result.current.latestPosts.length).toBe(samplePosts.length); // Updated
  });
});
