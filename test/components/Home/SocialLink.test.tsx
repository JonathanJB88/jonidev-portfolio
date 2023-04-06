import { render, screen } from '@testing-library/react';
import { SocialLink, SocialLinkProps } from '@/components';
import { FaFacebookF } from 'react-icons/fa';

const defaultProps: SocialLinkProps = {
  Icon: FaFacebookF,
  url: 'https://facebook.com',
  ariaLabel: 'Facebook',
  delay: 100,
};

describe('SocialLink', () => {
  it('renders the SocialLink component with the provided icon, url, and aria label', () => {
    render(<SocialLink {...defaultProps} />);

    const iconElement = screen.getByTestId('social-icon');
    const linkElement = screen.getByRole('link', { name: defaultProps.ariaLabel });

    expect(iconElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the SocialLink component with the default delay when not provided', () => {
    render(<SocialLink {...defaultProps} delay={undefined} />);
    const iconElement = screen.getByTestId('social-icon');

    const fadeElement = iconElement.closest('.css-0');
    expect(fadeElement).toHaveAttribute('style', 'animation-delay: 100ms;');
  });

  it('renders the SocialLink component with the provided delay when given', () => {
    const customDelay = 200;
    render(<SocialLink {...defaultProps} delay={customDelay} />);
    const iconElement = screen.getByTestId('social-icon');

    const fadeElement = iconElement.closest('.css-0');
    expect(fadeElement).toHaveAttribute('style', `animation-delay: ${customDelay}ms;`);
  });
});
