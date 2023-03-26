import { useContext } from 'react';

import { PortfolioContext } from '@/context';
import { ProjectCard, ProjectsNavBar } from '@/components';

import { Category, IProject } from '@/interfaces';

interface ProjectsSetProps {
  projects: IProject[];
  handleCategory: (category: Category | 'All') => void;
  active: string;
}

export const ProjectsSet = ({ projects, active, handleCategory }: ProjectsSetProps) => {
  //
  const { theme } = useContext(PortfolioContext);
  const darkTheme = theme === 'dark';
  const textBg = darkTheme ? 'text-accent' : 'text-primary';

  return (
    <section>
      <div className='flex flex-col items-center pt-10 md:flex-row md:justify-between lg:pt-12'>
        <h1 className={`text-xl font-extrabold text-center font-header md:text-4xl md:pl-10 ${textBg}`}>My Projects</h1>
        <div className='-ml-5 md:pr-10'>
          <ProjectsNavBar handleCategory={handleCategory} active={active} />
        </div>
      </div>
      <div className='relative px-8 py-2'>
        <div className='relative grid grid-cols-12 gap-4 my-3'>
          {projects.map((project) => (
            <div
              className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 md:col-span-4 lg:col-span-3 dark:bg-gray-700'
              key={project.name}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
