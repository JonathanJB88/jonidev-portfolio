import { render, screen } from '@testing-library/react';
import HomePage from '@/pages/index';
import { HeadComponent, Intro, Loading } from '../../src/components';

// Mocking HeadComponent, Intro, and Loading components
jest.mock('../../src/components', () => ({
  HeadComponent: jest.fn(() => <div data-testid='head-component' />),
  Intro: jest.fn(() => <div data-testid='intro' />),
  Loading: jest.fn(() => <div data-testid='loading' />),
}));

const about = 'My about section';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage data={{ about }} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage data={{ about }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders HeadComponent with correct props', () => {
    render(<HomePage data={{ about }} />);

    expect(HeadComponent).toHaveBeenCalledWith(
      {
        title: 'Portfolio',
        description:
          'Jonathan Bracho - Frontend Developer specializing in React and TypeScript. Check out my skills, projects, and get in touch.',
        keywords: 'portfolio, frontend developer, web developer, react, typescript, skills, projects',
      },
      {}
    );
  });

  it('renders Loading component if about data is not available', () => {
    render(<HomePage data={{}} />);

    const loadingComponent = screen.getByTestId('loading');
    expect(loadingComponent).toBeInTheDocument();
    expect(Loading).toHaveBeenCalledWith({}, {});
  });

  it('renders Intro component with about data if available', () => {
    render(<HomePage data={{ about }} />);

    const introComponent = screen.getByTestId('intro');
    expect(introComponent).toBeInTheDocument();
    expect(Intro).toHaveBeenCalledWith({ about }, {});
  });
});
