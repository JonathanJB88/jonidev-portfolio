import { render, screen } from '@testing-library/react';
import { FeaturedPostsSlider } from '@/components/Blog/FeaturedPostsSlider';
import { Post } from '@/interfaces';

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
}));

jest.mock('react-responsive-carousel', () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const mockPosts: Post[] = [
  {
    _id: '1',
    title: 'Test Post 1',
    slug: 'test-post-1',
    content: [],
    excerpt: 'Test post 1 excerpt',
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
    excerpt: 'Test post 2 excerpt',
    coverImage: 'https://via.placeholder.com/300',
    date: '2023-04-02',
    author: {
      name: 'Jane Doe',
      picture: 'https://via.placeholder.com/50',
    },
    categories: ['Category 2'],
    tags: ['Tag 2'],
  },
];

describe('FeaturedPostsSlider', () => {
  beforeEach(() => {
    render(<FeaturedPostsSlider posts={mockPosts} />);
  });
  it('should render the correct number of SliderCards', () => {
    const sliderCards = screen.getAllByTestId('slider-card');
    expect(sliderCards.length).toBe(mockPosts.length);
  });

  it('should render SliderCards with the correct post data', () => {
    mockPosts.forEach((post, index) => {
      const sliderCard = screen.getAllByTestId('slider-card')[index];
      expect(sliderCard).toHaveTextContent(post.title);
      expect(sliderCard).toHaveTextContent(post.excerpt);
    });
  });

  it('should render a Carousel component', () => {
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
  });
});
