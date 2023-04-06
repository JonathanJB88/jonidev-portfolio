import { render, screen } from '@testing-library/react';
import SkillsSet from '@/components/Skills/SkillsSet';

const mockTechSkills = [
  { name: 'JavaScript', level: '90%' },
  { name: 'React', level: '80%' },
];

const mockSoftSkills = [
  { name: 'Communication', level: '80%' },
  { name: 'Teamwork', level: '85%' },
];

const renderSkillsSet = () => {
  render(<SkillsSet techSkills={mockTechSkills} softSkills={mockSoftSkills} />);
};

describe('SkillsSet component', () => {
  beforeEach(() => {
    renderSkillsSet();
  });

  it('renders section headers', () => {
    expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Soft Skills/i)).toBeInTheDocument();
  });

  it('renders TechSkills component', () => {
    mockTechSkills.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('renders SoftSkills component', () => {
    mockSoftSkills.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
