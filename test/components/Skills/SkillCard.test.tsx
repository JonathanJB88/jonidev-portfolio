import { useContext } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { PortfolioProvider, PortfolioContext, Theme } from '@/context';
import { SkillCard } from '@/components';
import { act } from 'react-dom/test-utils';

const mockSkillTitle = 'React';
const mockSkillLevel = '80%';

const renderSkillCard = async (theme: Theme) => {
  const { result } = renderHook(() => useContext(PortfolioContext), { wrapper: PortfolioProvider });
  const { setTheme } = result.current;

  await act(async () => {
    setTheme(theme);
  });

  const component = (
    <PortfolioContext.Provider value={result.current}>
      <SkillCard skillTitle={mockSkillTitle} skillLevel={mockSkillLevel} />
    </PortfolioContext.Provider>
  );
  render(component);
};

describe('SkillCard component', () => {
  it('renders the skill title and level', async () => {
    await renderSkillCard('light');
    expect(screen.getByText(mockSkillTitle)).toBeInTheDocument();
    expect(screen.getByText(mockSkillTitle, { selector: 'h2' })).toHaveClass(
      'overflow-hidden text-sm font-body md:text-lg whitespace-nowrap overflow-ellipsis'
    );
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle({ width: mockSkillLevel });
  });

  it('renders the correct icon for the skill title', async () => {
    await renderSkillCard('light');
    expect(screen.getByLabelText(`${mockSkillTitle} icon`)).toBeInTheDocument();
  });

  it('renders the correct background color for the progress bar based on theme', async () => {
    await renderSkillCard('light');
    const progressBarsLight = screen.getAllByRole('progressbar');
    expect(progressBarsLight[progressBarsLight.length - 1]).toHaveClass('bg-primary');

    await renderSkillCard('dark');
    const progressBarsDark = screen.getAllByRole('progressbar');
    expect(progressBarsDark[progressBarsDark.length - 1]).toHaveClass('bg-accent');
  });
});
