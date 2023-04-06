import { useContext } from 'react';
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';

import { PortfolioProvider, PortfolioContext, Theme } from '@/context';
import { ProjectsNavItem } from '@/components';

const mockValue = 'All';
const mockActive = 'All';
const handleCategory = jest.fn();

const renderProjectsNavItem = async (theme: Theme, active: string) => {
  const { result } = renderHook(() => useContext(PortfolioContext), { wrapper: PortfolioProvider });
  const { setTheme } = result.current;

  await act(async () => {
    setTheme(theme);
  });

  const component = (
    <PortfolioContext.Provider value={result.current}>
      <ProjectsNavItem value={mockValue} handleCategory={handleCategory} active={active} />
    </PortfolioContext.Provider>
  );
  render(component);
};

describe('ProjectsNavItem component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct text', async () => {
    await renderProjectsNavItem('light', mockActive);
    expect(screen.getByText(mockValue)).toBeInTheDocument();
  });

  it('renders the correct styles based on light theme and active prop', async () => {
    await renderProjectsNavItem('light', mockActive);
    expect(screen.queryByText(mockValue)).toHaveClass('text-primary underline');
  });

  it('renders the correct styles based on dark theme and active prop', async () => {
    await renderProjectsNavItem('dark', mockActive);
    expect(screen.queryByText(mockValue)).toHaveClass('text-accent underline');
  });

  it('renders the correct styles for non active elements in light theme', async () => {
    await renderProjectsNavItem('light', '');
    expect(screen.queryByText(mockValue)).not.toHaveClass('underline');
  });

  it('renders the correct styles for non active elements in dark theme', async () => {
    await renderProjectsNavItem('dark', '');
    expect(screen.queryByText(mockValue)).not.toHaveClass('underline');
  });

  it('responds correctly to click events', async () => {
    await renderProjectsNavItem('light', mockActive);
    fireEvent.click(screen.getByText(mockValue));
    expect(handleCategory).toHaveBeenCalledTimes(1);
    expect(handleCategory).toHaveBeenCalledWith(mockValue);
  });
});
