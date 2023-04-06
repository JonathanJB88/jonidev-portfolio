import { render, screen } from '@testing-library/react';
import { TechSkills } from '@/components';

const mockTechSkills = [
  { name: 'JavaScript', level: '90%' },
  { name: 'React', level: '80%' },
];

const renderTechSkills = () => {
  render(<TechSkills techSkills={mockTechSkills} />);
};

describe('TechSkills component', () => {
  it('renders all tech skills', () => {
    renderTechSkills();
    mockTechSkills.forEach(({ name, level }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getAllByRole('progressbar')[0]).toHaveStyle(`width: ${mockTechSkills[0].level}`);
      expect(screen.getAllByRole('progressbar')[1]).toHaveStyle(`width: ${mockTechSkills[1].level}`);
    });
  });
});
