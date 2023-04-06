import { render, screen } from '@testing-library/react';
import { ProjectsSet } from '@/components';
import { IProject } from '@/interfaces';

const mockProjects: IProject[] = [
  {
    id: 1,
    name: 'Test Project 1',
    description: 'A test project for testing purposes',
    image_path: 'test_image1.jpg',
    github_url: 'https://github.com/test1',
    deployed_url: 'https://test1.com',
    category: ['React', 'Next', 'TypeScript'],
    key_techs: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Test Project 2',
    description: 'Another test project for testing purposes',
    image_path: 'test_image2.jpg',
    github_url: 'https://github.com/test2',
    deployed_url: 'https://test2.com',
    category: ['React'],
    key_techs: ['React', 'Next.js', 'TypeScript'],
  },
];

const mockHandleCategory = jest.fn();
const active = 'All';

const renderProjectsSet = () => {
  const component = <ProjectsSet projects={mockProjects} handleCategory={mockHandleCategory} active={active} />;
  render(component);
};

describe('ProjectsSet component', () => {
  beforeEach(() => {
    renderProjectsSet();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the "My Projects" title', () => {
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  it('renders the ProjectsNavBar component', () => {
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('renders the ProjectCard components for each project', () => {
    mockProjects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });

  it('renders the "Explore my Journey" button', () => {
    expect(screen.getByRole('button', { name: /Explore my Journey/ })).toBeInTheDocument();
  });

  it('applies the mobile class when window.innerWidth <= 768', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 768 });
    const wrapper = screen.getByLabelText('button-wrapper');
    expect(wrapper).toHaveClass('relative bottom-0 right-0 mb-8 mr-4 text-right animate-slide-in');
  });

  it('applies the non-mobile class when window.innerWidth > 768', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 769 });
    const wrapper = screen.getByLabelText('button-wrapper');
    expect(wrapper).toHaveClass('relative bottom-0 left-0 w-full mb-4 text-center animate-slide-in');
  });
});
