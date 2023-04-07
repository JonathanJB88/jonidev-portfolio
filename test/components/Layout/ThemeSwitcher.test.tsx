import { useContext } from 'react';
import { render, act, renderHook, fireEvent, waitFor, screen } from '@testing-library/react';
import { PortfolioProvider, Theme, PortfolioContext } from '@/context';
import { ThemeSwitcher } from '@/components';

jest.mock('lodash/debounce', () => {
  return (fn: (...args: any[]) => void, delay: number) =>
    (...args: any[]) => {
      setTimeout(() => fn(...args), delay);
    };
});

const renderThemeSwitcher = async (theme: Theme, setTheme: (theme: Theme) => void) => {
  const { result } = renderHook(() => useContext(PortfolioContext), { wrapper: PortfolioProvider });
  const { setTheme: setThemeOriginal } = result.current;

  await act(async () => {
    setThemeOriginal(theme);
  });

  const component = (
    <PortfolioContext.Provider value={{ ...result.current, setTheme }}>
      <ThemeSwitcher />
    </PortfolioContext.Provider>
  );

  return render(component);
};

describe('ThemeSwitcher', () => {
  it('renders the switcher with the correct initial state', async () => {
    const setThemeMock = jest.fn();
    const { getByRole, getByLabelText } = await renderThemeSwitcher('light', setThemeMock);
    const switcher = getByRole('switch');

    expect(switcher).toBeInTheDocument();
    expect(switcher).toHaveProperty('checked', false);
    expect(getByLabelText('light mode')).toBeInTheDocument();
  });

  it('toggles the light theme when clicked', async () => {
    const setThemeMock = jest.fn();
    await renderThemeSwitcher('light', setThemeMock);
    const switcher = screen.getByRole('switch');

    jest.useFakeTimers();

    fireEvent.click(switcher);
    jest.advanceTimersByTime(150);
    await waitFor(() => expect(setThemeMock).toHaveBeenCalledWith('dark'));

    expect(screen.getByLabelText('dark mode')).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('toggle the dark theme when clicked', async () => {
    const setThemeMock = jest.fn();
    await renderThemeSwitcher('dark', setThemeMock);
    const switcher = screen.getByRole('switch');

    jest.useFakeTimers();

    fireEvent.click(switcher);
    jest.advanceTimersByTime(150);
    await waitFor(() => expect(setThemeMock).toHaveBeenCalledWith('light'));

    expect(screen.getByLabelText('light mode')).toBeInTheDocument();

    jest.useRealTimers();
  });
});
