import Image from 'next/image';

import { urlForImage } from '@/lib/Sanity';

import { BlockProps, ImageProps } from '@/interfaces';

export const blockSerializer = (props: BlockProps) => {
  switch (props.node.style) {
    case 'h1':
      return <h1 className='mb-4 text-xl font-bold animate-fade-in md:text-2xl font-header'>{props.children}</h1>;
    case 'h2':
      return <h2 className='mb-3 text-base font-semibold animate-fade-in md:text-xl font-header'>{props.children}</h2>;
    case 'h3':
      return <h3 className='mb-2 text-base font-medium animate-fade-in md:text-xl font-header'>{props.children}</h3>;
    case 'blockquote':
      return (
        <blockquote className='p-4 m-3 mx-6 text-xs italic bg-gray-400 border-l-4 border-gray-500 rounded-md animate-fade-in md:text-base dark:bg-gray-700 dark:text-secondary md:mx-32 text-dark'>
          {props.children}
        </blockquote>
      );
    default:
      return <div className='pb-2 text-sm animate-fade-in font-body md:text-base'>{props.children}</div>;
  }
};

export const imageSerializer = ({ node }: ImageProps) => {
  const { asset, alt } = node;
  const imageUrl = urlForImage(asset).url();

  return (
    <div className='flex justify-center'>
      <div className='relative w-3/4 h-0 overflow-hidden' style={{ paddingTop: '35%' }}>
        <Image
          src={imageUrl}
          alt={alt || 'Post-related image'}
          loading='lazy'
          width={1400}
          height={350}
          sizes='100vw'
          className='absolute top-0 left-0 w-full h-full rounded-lg shadow-sm'
        />
      </div>
    </div>
  );
};
