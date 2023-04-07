import { render, screen, waitFor } from '@testing-library/react';
import BlogPage from '@/pages/blog';
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

describe('BlogPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    await waitFor(() => {
      render(<BlogPage posts={mockPosts} />);
    });
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<BlogPage posts={mockPosts} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the DynamicFeaturedPostsSlider, FilterBar and DynamicBlogGrid', async () => {
    await waitFor(() => {
      render(<BlogPage posts={mockPosts} />);
    });
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
    expect(screen.getByTestId('filterbar-blogGrid')).toBeInTheDocument();
  });

  it('should render the BlogFooter', async () => {
    await waitFor(() => {
      render(<BlogPage posts={mockPosts} />);
    });

    expect(screen.getByText(/Contact Me/)).toBeInTheDocument();
  });
});
