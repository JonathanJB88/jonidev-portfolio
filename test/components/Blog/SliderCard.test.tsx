import { render, screen } from '@testing-library/react';
import SliderCard from '@/components/Blog/SliderCard';
import { Post } from '@/interfaces';

const mockPost: Post = {
  _id: 'test-post-id',
  title: 'Test Post',
  slug: 'test-post',
  content: [],
  excerpt: 'This is a test post for testing purposes.',
  coverImage: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
  date: '2023-04-06',
  author: {
    name: 'Test Author',
    picture: 'https://example.com/test-author.jpg',
  },
  categories: ['test-category'],
  tags: ['test-tag'],
};

const renderSliderCard = () => {
  render(<SliderCard post={mockPost} />);
};

describe('SliderCard component', () => {
  beforeEach(() => {
    renderSliderCard();
  });

  it('renders the post title', () => {
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
  });

  it('renders the post excerpt on larger screens', () => {
    expect(screen.queryByText(mockPost.excerpt)).toBeInTheDocument();

    // To properly test the hidden excerpt on smaller screens, you would need to
    // set up a custom render function that includes a viewport size.
    // This is beyond the scope of this test suite.
  });

  it('renders the Read More button', () => {
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it('renders the cover image', () => {
    const coverImage = screen.getByAltText(`Cover Image for the post ${mockPost.title}`);
    expect(coverImage).toBeInTheDocument();
    expect(coverImage.getAttribute('src')).toContain('Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000');
  });
});
