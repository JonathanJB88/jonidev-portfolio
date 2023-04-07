import { AppProps } from 'next/app';
import { render } from '@testing-library/react';
import App from '@/pages/_app';
import mockRouter from 'next-router-mock';

const renderApp = (props: Partial<AppProps> = {}) => {
  const defaultProps: AppProps = {
    Component: () => <div>Test Component</div>,
    pageProps: {},
    router: mockRouter as any, // Use type assertion to ignore the type error
    ...props,
  };

  return render(<App {...defaultProps} />);
};

describe('_app.tsx', () => {
  it('renders the App component and matches snapshot', () => {
    const { asFragment } = renderApp();
    expect(asFragment()).toMatchSnapshot();
  });
});
