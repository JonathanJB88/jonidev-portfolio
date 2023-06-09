import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';

import { PortfolioContext } from '@/context';
import { Button, ProjectCard, ProjectsNavBar } from '@/components';

import { Category, IProject } from '@/interfaces';

export interface ProjectsSetProps {
  projects: IProject[];
  handleCategory: (category: Category | 'All') => void;
  active: string;
}

export const ProjectsSet = ({ projects, active, handleCategory }: ProjectsSetProps) => {
  const { theme } = useContext(PortfolioContext);
  const darkTheme = theme === 'dark';
  const textBg = darkTheme ? 'text-accent' : 'text-primary';
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonWrapperClasses = isMobile
    ? 'bottom-0 left-0 w-full mb-4 text-center animate-slide-in'
    : 'bottom-0 right-0 mb-8 mr-4 text-right animate-slide-in';

  return (
    <section className='relative'>
      <div className='flex flex-col min-h-screen'>
        <header className='flex flex-col items-center pt-10 md:flex-row md:justify-between lg:pt-14 animate-fade-in'>
          <h1 className={`text-xl font-extrabold text-center font-header md:text-4xl md:pl-10 ${textBg}`}>
            My Projects
          </h1>
          <div className='-ml-5 md:pr-10'>
            <ProjectsNavBar handleCategory={handleCategory} active={active} />
          </div>
        </header>
        <div className='relative flex-grow px-8 py-2 animate-fade-in'>
          <div className='relative grid grid-cols-12 gap-4 my-3 mb-20'>
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
        <div aria-label='button-wrapper' className={`relative ${buttonWrapperClasses}`}>
          <Link href='/journey'>
            <Button label='Explore my Journey' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSet;
