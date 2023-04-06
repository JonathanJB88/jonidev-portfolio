import { act, render, renderHook, screen } from '@testing-library/react';
import { PortfolioContext, PortfolioProvider, Theme } from '@/context';
import { TimelineItem } from '@/components';
import { IJourney } from '@/interfaces';
import { useContext } from 'react';

const mockJourney: IJourney = {
  year: '2023',
  title: 'Test Journey',
  description: 'A test journey for testing purposes',
  category: 'experience',
};

const mockTheme = 'dark';

const renderTimelineItem = async (theme: Theme) => {
  const { result } = renderHook(() => useContext(PortfolioContext), { wrapper: PortfolioProvider });
  const { setTheme } = result.current;

  await act(async () => {
    setTheme(theme);
  });

  const component = (
    <PortfolioContext.Provider value={result.current}>
      <TimelineItem journey={mockJourney} />
    </PortfolioContext.Provider>
  );
  render(component);
};

describe('TimelineItem component', () => {
  beforeEach(async () => {
    await renderTimelineItem(mockTheme);
  });

  it('renders the year', () => {
    expect(screen.getByText(mockJourney.year)).toBeInTheDocument();
  });

  it('renders the title', () => {
    expect(screen.getByText(mockJourney.title)).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(mockJourney.description)).toBeInTheDocument();
  });

  it('renders the correct icon based on category', () => {
    const iconLabel = mockJourney.category === 'education' ? 'Graduation cap' : 'Man at computer';
    const icon = screen.getByLabelText(iconLabel);
    expect(icon).toBeInTheDocument();
  });

  it('applies the correct styles based on theme', () => {
    const iconElement = screen.getByLabelText('Man at computer');

    if (mockTheme === 'dark') {
      expect(iconElement.parentElement).toHaveStyle('background: #FF8A3D');
    } else {
      expect(iconElement.parentElement).toHaveStyle('background: #3358C4');
    }
  });
});
