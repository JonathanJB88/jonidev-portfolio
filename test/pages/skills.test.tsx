import { render, screen, waitFor } from '@testing-library/react';
import SkillsPage from '@/pages/skills';

const mockTechSkills = [
  { name: 'React', level: '90' },
  { name: 'TypeScript', level: '85' },
];

const mockSoftSkills = [
  { name: 'Teamwork', level: '95' },
  { name: 'Communication', level: '90' },
];

describe('SkillsPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    await waitFor(() => render(<SkillsPage data={{ techSkills: mockTechSkills, softSkills: mockSoftSkills }} />));
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<SkillsPage data={{ techSkills: mockTechSkills, softSkills: mockSoftSkills }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct title and button text', async () => {
    render(<SkillsPage data={{ techSkills: mockTechSkills, softSkills: mockSoftSkills }} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('My Skills');
    expect(screen.getByLabelText('projects-button')).toBeInTheDocument();
    expect(screen.getByLabelText('projects-button')).toHaveTextContent(/Explore my Projects/);
  });
});
