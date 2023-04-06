import { render, screen } from '@testing-library/react';
import { FaGithub } from 'react-icons/fa';
import { ButtonLink } from '@/components';
import { IconType } from 'react-icons';

const mockUrl = 'https://github.com/';
const mockText = 'GitHub';
const mockIcon = FaGithub;

const renderButtonLink = (url: string, Icon: IconType, text: string) => {
  const component = <ButtonLink url={url} Icon={Icon} text={text} />;
  render(component);
};

describe('ButtonLink component', () => {
  it('renders the correct text', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  it('renders the correct icon', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    expect(screen.getByLabelText(`${mockText} Icon`)).toBeInTheDocument();
  });

  it('has the correct URL', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    const link = screen.getByRole('link', { name: `Visit my Project on ${mockText}` });
    expect(link).toHaveAttribute('href', mockUrl);
  });

  it('opens link in a new tab', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    const link = screen.getByRole('link', { name: `Visit my Project on ${mockText}` });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('has the correct aria-label for the link', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    const link = screen.getByRole('link', { name: `Visit my Project on ${mockText}` });
    expect(link).toHaveAttribute('aria-label', `Visit my Project on ${mockText}`);
  });

  it('has the rel="noreferrer" attribute for the link', () => {
    renderButtonLink(mockUrl, mockIcon, mockText);
    const link = screen.getByRole('link', { name: `Visit my Project on ${mockText}` });
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});
