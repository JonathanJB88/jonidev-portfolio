import { render, screen } from '@testing-library/react';
import AuthorBox from '@/components/Blog/AuthorBox';
import { Author } from '@/interfaces';

jest.mock('../../../src/lib/Sanity', () => ({
  ...jest.requireActual('../../../src/lib/Sanity'),
  urlForImage: () => ({ url: () => 'https://via.placeholder.com/300' }),
  getUrlWithBlurData: () => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA',
}));

const testAuthor: Author = {
  name: 'John Doe',
  picture: 'https://via.placeholder.com/300',
};

describe('AuthorBox', () => {
  beforeEach(() => {
    render(<AuthorBox author={testAuthor} />);
  });

  it('should render the author name', () => {
    expect(screen.getByText(testAuthor.name)).toBeInTheDocument();
  });

  it('should render the author profile picture', () => {
    const imageElement = screen.getByAltText(`Profile picture of ${testAuthor.name}`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('via.placeholder.com'));
  });

  it('should render the Social component', () => {
    const socialComponent = screen.getByTestId('social-component');
    expect(socialComponent).toBeInTheDocument();
  });
});
