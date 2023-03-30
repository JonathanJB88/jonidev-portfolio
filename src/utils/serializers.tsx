import Image from 'next/image';

import { urlForImage } from '@/lib/Sanity';

import { BlockProps, ImageProps } from '@/interfaces';

export const blockSerializer = (props: BlockProps) => {
  switch (props.node.style) {
    case 'h1':
      return <h1 className='mb-4 text-xl font-bold md:text-2xl font-header'>{props.children}</h1>;
    case 'h2':
      return <h2 className='mb-3 text-base font-semibold md:text-xl font-header'>{props.children}</h2>;
    case 'h3':
      return <h3 className='mb-2 text-base font-medium md:text-xl font-header'>{props.children}</h3>;
    case 'blockquote':
      return (
        <blockquote className='p-4 m-3 mx-6 text-xs italic bg-gray-400 border-l-4 border-gray-500 rounded-md md:text-base dark:bg-gray-700 dark:text-secondary md:mx-32 text-dark'>
          {props.children}
        </blockquote>
      );
    default:
      return <p className='pb-2 text-sm font-body md:text-base'>{props.children}</p>;
  }
};

export const imageSerializer = ({ node }: ImageProps) => {
  const { asset, alt } = node;
  const imageUrl = urlForImage(asset).url();

  return (
    <div className='flex justify-center w-full my-4'>
      <div className='max-w-full'>
        <Image
          src={imageUrl}
          alt={alt || 'Post-related image'}
          layout='responsive'
          width={1}
          height={1}
          className='rounded-lg shadow-xl'
        />
      </div>
    </div>
  );
};
