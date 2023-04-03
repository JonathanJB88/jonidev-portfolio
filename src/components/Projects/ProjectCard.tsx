import { useCallback, useState } from 'react';
import Image from 'next/image';

import { Modal } from '@/components';

import { IProject } from '@/interfaces';

interface ProjectCardProps {
  project: IProject;
}

const blurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6Ii8+PC9zdmc+';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image_path, name, id } = project;
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);

  const handleClickImage = useCallback(() => {
    setIsModalOpen(id);
  }, [id]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className='relative w-full h-0 pb-[50%] overflow-hidden rounded-lg cursor-pointer'
        onClick={handleClickImage}
      >
        <Image
          src={`/images/${image_path}`}
          alt={name}
          width={200}
          height={100}
          loading='lazy'
          sizes='(max-width: 768px) 100vw, 200px'
          placeholder='blur'
          blurDataURL={blurDataURL}
          className='absolute inset-0 object-cover w-full h-full rounded-lg'
        />
      </div>
      <p className='my-2 text-base font-semibold text-center font-body md:text-xl'>{name}</p>
      {isModalOpen === id && <Modal setIsModalOpen={setIsModalOpen} project={project} />}
    </div>
  );
};
