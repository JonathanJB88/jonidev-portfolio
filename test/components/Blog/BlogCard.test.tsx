import { render, screen } from '@testing-library/react';
import BlogCard from '@/components/Blog/BlogCard';

import { Post } from '@/interfaces';

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
}));

const mockPost: Post = {
  _id: 'test-post-id',
  title: 'Test title',
  slug: 'test-post',
  content: [],
  excerpt: 'Test excerpt',
  coverImage: 'https://via.placeholder.com/300',
  date: '2023-04-06',
  author: {
    name: 'Test Author',
    picture: 'https://example.com/test-author.jpg',
  },
  categories: ['test-category'],
  tags: ['test1', 'test2'],
};

describe('BlogCard', () => {
  beforeEach(() => {
    render(<BlogCard post={mockPost} />);
  });

  it('should render the post title', () => {
    const postTitle = screen.getByText(/Test title/i);
    expect(postTitle).toBeInTheDocument();
  });

  it('should render the post excerpt', () => {
    const postExcerpt = screen.getByText(/Test excerpt/i);
    expect(postExcerpt).toBeInTheDocument();
  });

  it('should render the author name', () => {
    const authorName = screen.getByText(/Test Author/i);
    expect(authorName).toBeInTheDocument();
  });

  it('should render the post tags', () => {
    const tag1 = screen.getByText(/test1/i);
    const tag2 = screen.getByText(/test2/i);
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
  });

  it('should render the Read More button', () => {
    const readMoreButton = screen.getByText(/Read More/i);
    expect(readMoreButton).toBeInTheDocument();
  });
});
