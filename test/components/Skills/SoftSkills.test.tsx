import { render, screen } from '@testing-library/react';
import { SoftSkills } from '@/components';

const mockSoftSkills = [
  { name: 'Communication', level: '80%' },
  { name: 'Teamwork', level: '85%' },
];

const renderSoftSkills = () => {
  render(<SoftSkills softSkills={mockSoftSkills} />);
};

describe('SoftSkills component', () => {
  it('renders all soft skills', () => {
    renderSoftSkills();
    mockSoftSkills.forEach(({ name, level }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getAllByRole('progressbar')[0]).toHaveStyle(`width: ${mockSoftSkills[0].level}`);
      expect(screen.getAllByRole('progressbar')[1]).toHaveStyle(`width: ${mockSoftSkills[1].level}`);
    });
  });
});
