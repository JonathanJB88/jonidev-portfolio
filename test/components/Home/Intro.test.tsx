import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Intro } from '@/components';

describe('Intro Component', () => {
  const about = 'I am a Frontend Developer with experience in multiple technologies';

  it('renders Intro component with expected elements and content', () => {
    render(<Intro about={about} />);

    expect(screen.getByText('Jonathan Bracho')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText(about)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Profile Photo of Jonathan Bracho/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Explore my Skills/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Download Icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visit my Github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visit my LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visit my Twitter/i)).toBeInTheDocument();
  });
});
