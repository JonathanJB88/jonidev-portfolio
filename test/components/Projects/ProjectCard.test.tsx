import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '@/components';
import { IProject } from '@/interfaces';

const mockProject: IProject = {
  id: 1,
  name: 'Test Project',
  description: 'A test project for testing purposes',
  image_path: 'test_image.jpg',
  github_url: 'https://github.com/test',
  deployed_url: 'https://test.com',
  key_techs: ['React', 'Next.js', 'TypeScript'],
  category: ['React', 'Next', 'TypeScript'],
};

const renderProjectCard = (project: IProject) => {
  const component = <ProjectCard project={project} />;
  render(component);
};

describe('ProjectCard component', () => {
  it('renders the project name', () => {
    renderProjectCard(mockProject);
    expect(screen.getByText(mockProject.name)).toBeInTheDocument();
  });

  it('renders the project image', () => {
    renderProjectCard(mockProject);
    const image = screen.getByAltText(`Project Image of: ${mockProject.name}`);
    expect(image).toBeInTheDocument();
  });

  it('opens the Modal when the project image is clicked', () => {
    renderProjectCard(mockProject);
    const image = screen.getByAltText(`Project Image of: ${mockProject.name}`);
    fireEvent.click(image);

    const modal = screen.getByText(mockProject.description);
    expect(modal).toBeInTheDocument();
  });

  it('closes the Modal when the close button is clicked', () => {
    renderProjectCard(mockProject);
    const image = screen.getByAltText(`Project Image of: ${mockProject.name}`);
    fireEvent.click(image);

    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);

    const modal = screen.queryByText(mockProject.description);
    expect(modal).not.toBeInTheDocument();
  });
});
