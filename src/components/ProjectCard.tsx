import Image from 'next/image';

import { IProject } from '@/interfaces';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project: { image_path, name, category } }: ProjectCardProps) => {
  //
  const isReactNative = category.includes('React Native');

  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={`/images/${image_path}`}
        alt={name}
        className='rounded-md cursor-pointer'
        onClick={() => {}}
        width={200}
        height={100}
        loading='lazy'
        layout={!isReactNative ? 'responsive' : 'fixed'}
        loader={() => `/images/${image_path}`}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6Ii8+PC9zdmc+'
      />

      <p className='my-2 text-base text-center font-body md:text-xl'>{name}</p>
    </div>
  );
};
