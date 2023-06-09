import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';

import { ButtonLink } from '@/components';

import { IProject } from '@/interfaces';

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<number | null>>;
  project: IProject;
}

export const Modal = ({ setIsModalOpen, project }: ModalProps) => {
  const { image_path, name, description, key_techs, github_url, deployed_url } = project;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-11/12 p-6 bg-gray-200 rounded-md md:max-w-3xl md:grid md:grid-cols-2 gap-x-12 md:p-8 dark:bg-gray-700 animate-slide-in'>
        <button
          className='absolute top-0 right-0 z-50 p-2 text-lg font-bold md:right-2 md:top-2 text-primary hover:text-dark dark:hover:text-dark dark:text-accent focus:outline-none'
          onClick={() => setIsModalOpen(null)}
        >
          &times;
        </button>
        <div className='border-2 border-gray-100 rounded-lg dark:border-gray-600'>
          <div className='relative w-full h-0 pb-[50%] overflow-hidden rounded-lg'>
            <Image
              src={`/images/${image_path}`}
              alt={`Project Image of: ${name}`}
              width={200}
              height={100}
              loading='lazy'
              sizes='(max-width: 768px) 100vw, 200px'
              className='absolute inset-0 object-cover w-full h-full rounded-lg animate-fade-in'
            />
          </div>
          <div className='flex justify-center my-4 space-x-3'>
            <ButtonLink url={github_url} Icon={AiFillGithub} text='GitHub' aria-label='Visit my Project on Github' />
            <ButtonLink url={deployed_url} Icon={AiFillProject} text='Deploy' aria-label='Visit my Project' />
          </div>
        </div>
        <div className='flex flex-col justify-center my-4'>
          <h2 className='mb-3 text-xl font-medium underline md:text-2xl font-header'>{name}</h2>
          <h3 className='mb-3 text-sm font-medium text-justify font-body'>{description}</h3>
          <div className='flex flex-wrap justify-center mt-5 space-x-2 text-sm tracking-wider'>
            {key_techs.map((tech) => (
              <span
                aria-label='Key Technologies'
                key={tech}
                className='px-2 py-1 my-1 rounded-md text-secondary dark:text-dark bg-primary dark:bg-accent font-body'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
