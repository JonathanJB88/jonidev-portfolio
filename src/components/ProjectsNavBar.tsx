import { ProjectsNavItem } from '@/components';

import { Category } from '@/interfaces';

type Categories = Category | 'All';

interface ProjectsNavBarProps {
  handleCategory: (category: Categories) => void;
  active: string;
}

const categories: Categories[] = [
  'All',
  'TypeScript',
  'React',
  'React Native',
  'Next',
  'JavaScript',
  'TailwindCSS',
  'ChakraUI',
];

export const ProjectsNavBar = ({ active, handleCategory }: ProjectsNavBarProps) => {
  return (
    <div className='grid grid-cols-4 pt-2 list-none md:grid-cols-9'>
      {categories.map((category) => (
        <ProjectsNavItem key={category} value={category} active={active} handleCategory={handleCategory} />
      ))}
    </div>
  );
};
