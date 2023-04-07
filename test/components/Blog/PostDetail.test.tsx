import { render, screen } from '@testing-library/react';
import { PostDetail } from '@/components';
import { Post } from '@/interfaces';

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
  getUrlWithBlurData: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA',
}));

const testPost: Post = {
  _id: 'test-post-id',
  title: 'Test Post Title',
  slug: 'test-post-title',
  excerpt: 'This is a test post excerpt.',
  date: '2023-04-07T00:00:00.000Z',
  coverImage: 'https://via.placeholder.com/300',
  content: [
    {
      _key: '12345',
      _type: 'block',
      children: [
        {
          _key: '12345',
          _type: 'span',
          marks: [],
          text: 'This is a test post content.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  author: {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/300',
  },
  categories: ['test-category'],
  tags: ['test-tag'],
};

describe('PostDetail', () => {
  beforeEach(() => {
    render(<PostDetail post={testPost} />);
  });

  it('should render the post title', () => {
    expect(screen.getByText(testPost.title)).toBeInTheDocument();
  });

  it('should render the post cover image', () => {
    const imageElement = screen.getByAltText(`Cover Image for the post ${testPost.title}`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('via.placeholder.com'));
  });

  it('should render the PostDate component with the correct date', () => {
    const postDateElement = screen.getByTestId('post-date');
    expect(postDateElement).toBeInTheDocument();
  });

  it('should render the post author Twitter link', () => {
    const twitterLink = screen.getByLabelText('Follow me on Twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/JonathanDev88');
  });

  it('should render the post content', () => {
    expect(screen.getByText('This is a test post content.')).toBeInTheDocument();
  });

  it('should render the "Browse More Posts" button', () => {
    const browseMoreButton = screen.getByText('← Browse More Posts');
    expect(browseMoreButton).toBeInTheDocument();
  });

  it('should render the AuthorBox component', () => {
    const authorName = screen.getByText(testPost.author.name);
    expect(authorName).toBeInTheDocument();
  });
});
