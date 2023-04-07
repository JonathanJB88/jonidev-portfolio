import { render, screen } from '@testing-library/react';
import { NotFoundPost } from '@/components/Blog/NotFoundPost';

describe('NotFoundPost', () => {
  beforeEach(() => {
    render(<NotFoundPost />);
  });

  it('should render the not found message', () => {
    const notFoundMessage = screen.getByText(/Oops! Post not found./i);
    expect(notFoundMessage).toBeInTheDocument();
  });

  it('should render the explanation message', () => {
    const explanationMessage = screen.getByText(
      /It looks like the post you're looking for doesn't exist or has been removed./i
    );
    expect(explanationMessage).toBeInTheDocument();
  });

  it('should render a link to the blog page', () => {
    const linkElement = screen.getByRole('link', { name: /Browse More Posts/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/blog');
  });
});
