import { render, screen } from '@testing-library/react';
import { Social } from '@/components';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { ISocial } from '@/interfaces';

const social: ISocial[] = [
  {
    id: 1,
    Icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/jonathanbracho/',
    ariaLabel: 'Visit my LinkedIn',
  },
  {
    id: 2,
    Icon: BsGithub,
    url: 'https://github.com/JonathanJB88',
    ariaLabel: 'Visit my GitHub',
  },
  {
    id: 3,
    Icon: BsTwitter,
    url: 'https://twitter.com/JonathanDev88',
    ariaLabel: 'Visit my Twitter',
  },
];

describe('Social', () => {
  it('renders the correct number of SocialLink components', () => {
    render(<Social />);

    const socialLinkElements = screen.getAllByRole('link');
    expect(socialLinkElements.length).toEqual(social.length);
  });

  it('each SocialLink component has the correct props', () => {
    render(<Social />);

    social.forEach(({ id, Icon, url, ariaLabel }) => {
      const linkElement = screen.getByRole('link', { name: ariaLabel });
      const iconElement = linkElement.querySelector('svg');

      expect(iconElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', url);
      expect(linkElement.closest('.css-0')).toHaveAttribute('style', `animation-delay: ${id * 100}ms;`);
    });
  });
});
