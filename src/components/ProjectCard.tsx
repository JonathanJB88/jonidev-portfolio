import { IProject } from '@/interfaces';
import Image from 'next/image';
import { RefObject } from 'react';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project: { image_path, name } }: ProjectCardProps) => {
  return (
    <div>
      {/* <Image
        src={image_path}
        alt={name}
        className='rounded-sm cursor-pointer'
        onClick={() => {}}
        width={300}
        height={150}
        // objectFit={category.includes('React Native') ? 'contain' : 'cover'}
        // layout='responsive'
      /> */}
      <p className='my-2 text-center'>{name}</p>
    </div>
  );
};
