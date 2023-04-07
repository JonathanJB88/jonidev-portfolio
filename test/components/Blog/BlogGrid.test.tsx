import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BlogGrid } from '@/components';
import { Post } from '@/interfaces';

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
}));

const mockPosts: Post[] = [
  {
    _id: '1',
    title: 'Test Post 1',
    slug: 'test-post-1',
    content: [],
    excerpt: 'Test excerpt 1',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-01',
    author: {
      name: 'John Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 1'],
    tags: ['Tag 1'],
  },
  {
    _id: '2',
    title: 'Test Post 2',
    slug: 'test-post-2',
    content: [],
    excerpt: 'Test excerpt 2',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-02',
    author: {
      name: 'Jane Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 2'],
    tags: ['Tag 2'],
  },
  {
    _id: '3',
    title: 'Test Post 3',
    slug: 'test-post-3',
    content: [],
    excerpt: 'Test excerpt 3',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-03',
    author: {
      name: 'John Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 3'],
    tags: ['Tag 3'],
  },
  {
    _id: '4',
    title: 'Test Post 4',
    slug: 'test-post-4',
    content: [],
    excerpt: 'Test excerpt 4',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-04',
    author: {
      name: 'Jane Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 4'],
    tags: ['Tag 4'],
  },
  {
    _id: '5',
    title: 'Test Post 5',
    slug: 'test-post-5',
    content: [],
    excerpt: 'Test excerpt 5',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-05',
    author: {
      name: 'John Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 5'],
    tags: ['Tag 5'],
  },
];

const loadMore = jest.fn();

describe('BlogGrid', () => {
  it('should render the BlogCard components for each post', () => {
    render(<BlogGrid posts={mockPosts} hasMore={mockPosts.length > 2} loadMore={loadMore} />);

    const postTitle1 = screen.getByText(/Test Post 1/i);
    const postTitle2 = screen.getByText(/Test Post 2/i);

    expect(postTitle1).toBeInTheDocument();
    expect(postTitle2).toBeInTheDocument();
  });
});
