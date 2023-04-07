import { render, screen } from '@testing-library/react';
import { BlogFooter } from '@/components';

describe('BlogFooter', () => {
  beforeEach(() => {
    render(<BlogFooter />);
  });

  it('should render the footer element', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('should render the Contact Me button', () => {
    const contactButton = screen.getByRole('button', { name: /Contact Me/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('should render a link to the contact page', () => {
    const contactLink = screen.getByRole('link', { name: /Contact Me/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.getAttribute('href')).toBe('/contact');
  });
});
