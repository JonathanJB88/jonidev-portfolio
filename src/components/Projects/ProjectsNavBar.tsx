import { ProjectsNavItem } from '@/components';
import { categories } from '@/data';

import { Category } from '@/interfaces';

interface ProjectsNavBarProps {
  handleCategory: (category: Category) => void;
  active: string;
}

export const ProjectsNavBar = ({ active, handleCategory }: ProjectsNavBarProps) => {
  return (
    <div className='grid grid-cols-4 pt-2 list-none md:grid-cols-8'>
      {categories.map((category) => (
        <ProjectsNavItem key={category} value={category} active={active} handleCategory={handleCategory} />
      ))}
    </div>
  );
};
