import { useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { HeadComponent, Loading, ProjectsSetProps } from '@/components';
import { withPageStaticProps } from '@/utils';

import { Category, MyPageProps } from '@/interfaces';

const DynamicProjectsSet = dynamic<ProjectsSetProps>(
  () => import('../components/Projects/ProjectsSet').then((mod) => mod.ProjectsSet),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const ProjectsPage: NextPage<MyPageProps> = ({ data: { projects } }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const projectsFallback = projects ?? [];
  const [filteredProjects, setFilteredProjects] = useState(projectsFallback);

  const handleCategory = (category: Category | 'All') => {
    setActiveCategory(category);
    setFilteredProjects(
      category === 'All' ? projectsFallback : projectsFallback.filter((project) => project.category.includes(category))
    );
  };

  return (
    <>
      <HeadComponent
        title='Projects'
        description='A showcase of my personal projects, including web and mobile apps built with modern technologies like TypeScript, React, React Native, and more.'
        keywords='TypeScript, React, React Native, Next, JavaScript, TailwindCSS, ChakraUI'
        pageUrl='/projects'
      />
      <main>
        {!projectsFallback.length ? (
          <Loading />
        ) : (
          <DynamicProjectsSet projects={filteredProjects} handleCategory={handleCategory} active={activeCategory} />
        )}
      </main>
    </>
  );
};

export const getStaticProps = withPageStaticProps('/api/data');

export default ProjectsPage;
