import { render, screen, waitFor } from '@testing-library/react';
import ProjectsPage from '@/pages/projects';
import { Category, IProject } from '@/interfaces';

const mockProjects: IProject[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'A test project',
    image_path: '/test/image.jpg',
    deployed_url: 'https://example.com',
    github_url: 'https://github.com/test/project1',
    category: ['React', 'TypeScript'],
    key_techs: ['React', 'TypeScript'],
  },
];

describe('ProjectsPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    await waitFor(() => render(<ProjectsPage data={{ projects: mockProjects }} />));
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<ProjectsPage data={{ projects: mockProjects }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should filter projects by category', async () => {
    await waitFor(() => render(<ProjectsPage data={{ projects: mockProjects }} />));

    const categoryToFilter: Category = 'React';
    await waitFor(() => {
      screen.getByText(categoryToFilter).click();
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
  });
});
