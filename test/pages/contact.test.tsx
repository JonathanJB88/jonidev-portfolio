import { render, screen, fireEvent } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';
import { PortfolioContext, PortfolioContextProps } from '@/context';
import ContactPage from '@/pages/contact';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter: NextRouter = {
  route: '/contact',
  pathname: '/contact',
  query: {},
  asPath: '',
  basePath: '',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  beforePopState: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  isFallback: false,
  isReady: true,
  isLocaleDomain: false,
  forward: jest.fn(),
  isPreview: false,
};

const mockSetLastVisitedBlog = jest.fn();

const value: PortfolioContextProps = {
  theme: 'light',
  visitedItems: [],
  lastVisitedBlog: false,
  setTheme: jest.fn(),
  setVisitedItems: jest.fn(),
  setLastVisitedBlog: mockSetLastVisitedBlog,
};

describe('ContactPage', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(
      <PortfolioContext.Provider value={value}>
        <ContactPage />
      </PortfolioContext.Provider>
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <PortfolioContext.Provider value={value}>
        <ContactPage />
      </PortfolioContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct title, CTA text and CTA button', () => {
    render(
      <PortfolioContext.Provider value={value}>
        <ContactPage />
      </PortfolioContext.Provider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get in Touch');
    expect(screen.getByTestId('CTA-text')).toHaveTextContent(
      /Feel free to get in touch with me. I am available to discuss your project, answer any questions, or just chat about frontend development and design./
    );
    expect(screen.getByLabelText('CTA-button')).toHaveTextContent(/Visit my Blog/);
  });

  it('should navigate to /blog when "Visit my Blog" button is clicked', () => {
    render(
      <PortfolioContext.Provider value={value}>
        <ContactPage />
      </PortfolioContext.Provider>
    );
    fireEvent.click(screen.getByText(/Visit my Blog/i));
    expect(mockSetLastVisitedBlog).toBeCalled();
    expect(mockRouter.push).toBeCalledWith('/blog');
  });
});
