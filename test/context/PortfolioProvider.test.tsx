import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { PortfolioProvider, PortfolioContext } from '@/context';

const TestComponent = () => {
  const { theme, setTheme } = useContext(PortfolioContext);

  return (
    <>
      <button onClick={() => setTheme('light')}>Set light theme</button>
      <button onClick={() => setTheme('dark')}>Set dark theme</button>
      <span data-testid='theme-indicator'>{theme}</span>
    </>
  );
};

describe('PortfolioProvider', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('should render children, provide context values and update theme correctly', async () => {
    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    const lightThemeButton = screen.getByText('Set light theme');
    const darkThemeButton = screen.getByText('Set dark theme');
    const themeIndicator = screen.getByTestId('theme-indicator');

    expect(lightThemeButton).toBeInTheDocument();
    expect(darkThemeButton).toBeInTheDocument();
    expect(themeIndicator).toBeInTheDocument();

    fireEvent.click(lightThemeButton);
    expect(screen.getByText('light')).toBeInTheDocument();

    fireEvent.click(darkThemeButton);
    expect(screen.getByText('dark')).toBeInTheDocument();
  });
});
