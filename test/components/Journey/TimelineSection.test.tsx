import { render, screen, fireEvent } from '@testing-library/react';
import { TimelineSection } from '@/components';
import { IJourney } from '@/interfaces';

const mockJourney: IJourney[] = [
  {
    year: '2023',
    title: 'Test Experience',
    description: 'A test experience for testing purposes',
    category: 'experience',
  },
  {
    year: '2022',
    title: 'Test Education',
    description: 'A test education for testing purposes',
    category: 'education',
  },
];

const renderTimelineSection = () => {
  render(<TimelineSection journey={mockJourney} />);
};

describe('TimelineSection component', () => {
  beforeEach(() => {
    renderTimelineSection();
  });

  it('renders My Journey title', () => {
    expect(screen.getByText('My Journey')).toBeInTheDocument();
  });

  it('renders Experience button', () => {
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders Education button', () => {
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('displays Experience items by default', () => {
    expect(screen.getByText('Test Experience')).toBeInTheDocument();
    expect(screen.queryByText('Test Education')).not.toBeInTheDocument();
  });

  it('displays Education items when Education button is clicked', () => {
    fireEvent.click(screen.getByText('Education'));

    expect(screen.getByText('Test Education')).toBeInTheDocument();
    expect(screen.queryByText('Test Experience')).not.toBeInTheDocument();
  });

  it('displays Experience items when Experience button is clicked', () => {
    fireEvent.click(screen.getByText('Education'));
    fireEvent.click(screen.getByText('Experience'));

    expect(screen.getByText('Test Experience')).toBeInTheDocument();
    expect(screen.queryByText('Test Education')).not.toBeInTheDocument();
  });
});
