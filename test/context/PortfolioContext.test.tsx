import { useContext } from 'react';
import { renderHook } from '@testing-library/react';
import { PortfolioContext, PortfolioContextProps, PortfolioProvider } from '@/context';
import { ThemeProvider } from 'next-themes';

describe('PortfolioContext', () => {
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
  it('should have the correct initial values', () => {
    const { result } = renderHook(() => useContext(PortfolioContext));
    const context: PortfolioContextProps = result.current;

    expect(context.theme).toBeUndefined();
    expect(context.visitedItems).toBeUndefined();
    expect(context.lastVisitedBlog).toBeUndefined();
    expect(context.setTheme).toBeUndefined();
    expect(context.setVisitedItems).toBeUndefined();
    expect(context.setLastVisitedBlog).toBeUndefined();
  });

  it('should provide the correct values with PortfolioProvider', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider forcedTheme='light' attribute='class'>
        <PortfolioProvider>{children}</PortfolioProvider>
      </ThemeProvider>
    );
    const { result } = renderHook(() => useContext(PortfolioContext), {
      wrapper,
    });
    const context: PortfolioContextProps = result.current;

    expect(context.theme).toBeDefined();
    expect(context.visitedItems).toBeDefined();
    expect(context.lastVisitedBlog).toBeDefined();
    expect(context.setTheme).toBeInstanceOf(Function);
    expect(context.setVisitedItems).toBeInstanceOf(Function);
    expect(context.setLastVisitedBlog).toBeInstanceOf(Function);
  });
});
