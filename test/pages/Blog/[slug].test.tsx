import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import PostPage from '@/pages/blog/[slug]';
import { Post } from '@/interfaces';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
  getUrlWithBlurData: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA',
}));

const mockRouter = {
  isFallback: false,
  asPath: '/blog/test-post-1',
  query: {
    slug: 'test-post-1',
  },
};

const mockPost: Post = {
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
};

describe('PostPage', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    await waitFor(() => {
      render(<PostPage post={mockPost} />);
    });
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<PostPage post={mockPost} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the DynamicPostDetail and BlogFooter', async () => {
    render(<PostPage post={mockPost} />);

    expect(screen.getByText(/Test Post 1/)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/)).toBeInTheDocument();
    expect(screen.getByText(/← Browse More Posts/)).toBeInTheDocument();
  });

  it('should render NotFoundPost when no post is available', async () => {
    render(<PostPage post={null} />);

    expect(screen.getByText(/Oops! Post not found./)).toBeInTheDocument();
  });
});
