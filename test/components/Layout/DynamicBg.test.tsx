import { act, render, renderHook, screen } from '@testing-library/react';
import { PortfolioContext, PortfolioProvider, Theme } from '@/context';
import { DynamicBg } from '@/components';
import { useContext } from 'react';

const renderDynamicBg = async (theme: Theme) => {
  const { result } = renderHook(() => useContext(PortfolioContext), { wrapper: PortfolioProvider });
  const { setTheme } = result.current;

  await act(async () => {
    setTheme(theme);
  });

  const component = (
    <PortfolioContext.Provider value={result.current}>
      <DynamicBg>
        <div aria-label='test-children'>Some children</div>
      </DynamicBg>
    </PortfolioContext.Provider>
  );
  render(component);
};

describe('DynamicBg', () => {
  it('should render with the correct styles based on the light theme', async () => {
    await renderDynamicBg('light');
    const dynamicBgElement = screen.getByLabelText('test-children').parentElement;
    expect(dynamicBgElement).toHaveClass('bg-gradient-to-br from-primary-light via-secondary to-accent bg-opacity-20');
  });

  it('should render with the correct styles based on the dark theme', async () => {
    await renderDynamicBg('dark');
    const dynamicBgElement = screen.getByLabelText('test-children').parentElement;
    expect(dynamicBgElement).toHaveClass(
      'bg-gradient-to-br from-primary-dark via-primary-dark to-primary bg-opacity-60'
    );
  });
});
