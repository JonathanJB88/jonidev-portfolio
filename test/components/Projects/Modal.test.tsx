import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '@/components';
import { IProject } from '@/interfaces';

const mockProject: IProject = {
  id: 1,
  name: 'Test Project',
  description: 'A test project for testing purposes',
  image_path: 'test_image.jpg',
  github_url: 'https://github.com/test',
  deployed_url: 'https://test.com',
  category: ['React'],
  key_techs: ['React', 'Next.js', 'TypeScript'],
};

const setIsModalOpen = jest.fn();

const renderModal = (project: IProject) => {
  const component = <Modal project={project} setIsModalOpen={setIsModalOpen} />;
  render(component);
};

describe('Modal component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the project name', () => {
    renderModal(mockProject);
    expect(screen.getByText(mockProject.name)).toBeInTheDocument();
  });

  it('renders the project description', () => {
    renderModal(mockProject);
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  it('renders the project image', () => {
    renderModal(mockProject);
    const image = screen.getByAltText(`Project Image of: ${mockProject.name}`);
    expect(image).toBeInTheDocument();
  });

  it('renders the key technologies', () => {
    renderModal(mockProject);
    mockProject.key_techs.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the GitHub and Deploy ButtonLink components', () => {
    renderModal(mockProject);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Deploy')).toBeInTheDocument();
  });

  it('calls setIsModalOpen with null when close button is clicked', () => {
    renderModal(mockProject);
    fireEvent.click(screen.getByText('×'));
    expect(setIsModalOpen).toHaveBeenCalledTimes(1);
    expect(setIsModalOpen).toHaveBeenCalledWith(null);
  });
});
