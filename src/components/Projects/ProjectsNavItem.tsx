import { useContext } from 'react';

import { PortfolioContext } from '@/context';

import { Category } from '@/interfaces';

interface ProjectsNavItemProps {
  value: Category;
  handleCategory: (category: Category) => void;
  active: string;
}

export const ProjectsNavItem = ({ value, active, handleCategory }: ProjectsNavItemProps) => {
  const { theme } = useContext(PortfolioContext);
  const isDark = theme === 'dark';

  const textHoverColor = isDark ? 'text-accent' : 'text-primary';

  let navItemClassName = `text-xs cursor-pointer hover:${textHoverColor} md:text-lg text-center py-1 font-bold font-header`;
  if (active === value) navItemClassName += ` ${textHoverColor} underline`;

  return (
    <li className={navItemClassName} onClick={() => handleCategory(value)}>
      {value}
    </li>
  );
};
