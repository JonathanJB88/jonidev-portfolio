import { fireEvent, render, screen } from '@testing-library/react';
import JourneyPage from '@/pages/journey';
import { IJourney } from '@/interfaces';

const journeyData: IJourney[] = [
  {
    year: '2020',
    title: 'Frontend Developer',
    description: 'Worked as a frontend developer at Company XYZ.',
    category: 'experience',
  },
  {
    year: '2018',
    title: 'Bachelor of Science in Computer Science',
    description: 'Graduated from University ABC.',
    category: 'education',
  },
];

describe('JourneyPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(<JourneyPage data={{ journey: journeyData }} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<JourneyPage data={{ journey: journeyData }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Loading component when journey data is not available', () => {
    render(<JourneyPage data={{ journey: [] }} />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('should render TimelineSection component when journey data is available', () => {
    render(<JourneyPage data={{ journey: journeyData }} />);
    expect(screen.getByText(/2020/)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Developer/)).toBeInTheDocument();
    expect(screen.getByText(/Worked as a frontend developer at Company XYZ./)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('education-button'));
    expect(screen.getByText(/2018/)).toBeInTheDocument();
    expect(screen.getByText(/Bachelor of Science in Computer Science/)).toBeInTheDocument();
    expect(screen.getByText(/Graduated from University ABC./)).toBeInTheDocument();
  });
});
