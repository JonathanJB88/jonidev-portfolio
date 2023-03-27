import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Btn, Loading, ProjectsSet } from '@/components';

import { Category, IProject } from '@/interfaces';

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects: projectsData }: ProjectsProps) => {
  //
  const [active, setActive] = useState<Category | 'All'>('All');
  const [projects, setProjects] = useState(projectsData);

  const handleCategory = (category: Category | 'All') => {
    if (category === 'All') {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const filteredProjects = projectsData.filter((project) => project.category.includes(category));
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title>Jonathan Bracho | Frontend Developer | Projects</title>
        <meta name='description' content='Frontend Developer with a strong background in React + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Frontend Web Developer, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js, React Testing Library, Scrum'
        />
      </Head>
      <main>
        {!projectsData.length ? (
          <Loading />
        ) : (
          <ProjectsSet projects={projects} handleCategory={handleCategory} active={active} />
        )}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
    const { projects } = await res.json();

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    return {
      props: {
        projects: [],
      },
    };
  }
};

export default Projects;
