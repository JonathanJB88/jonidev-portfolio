import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectsNavBar } from '@/components';

const mockHandleCategory = jest.fn();

const active = 'All';
const categories = ['All', 'TypeScript', 'React', 'React Native', 'Next', 'JavaScript', 'TailwindCSS', 'ChakraUI'];

const renderProjectsNavBar = (active: string) => {
  const component = <ProjectsNavBar handleCategory={mockHandleCategory} active={active} />;
  render(component);
};

describe('ProjectsNavBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all categories', () => {
    renderProjectsNavBar(active);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('calls handleCategory with the correct category when clicked', () => {
    renderProjectsNavBar(active);

    categories.forEach((category) => {
      fireEvent.click(screen.getByText(category));
      expect(mockHandleCategory).toHaveBeenCalledWith(category);
    });

    expect(mockHandleCategory).toHaveBeenCalledTimes(categories.length);
  });

  it('renders the correct active category', () => {
    const active = 'React Native';
    renderProjectsNavBar(active);

    expect(screen.getByText(active)).toHaveClass('underline');
  });
});
