import { memo } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/Sanity';
import { Button } from '@/components';

import { Post } from '@/interfaces';

interface SliderCardProps {
  post: Post;
}

const SliderCard = memo(({ post: { coverImage, title, excerpt } }: SliderCardProps) => {
  const image = urlForImage(coverImage).url() || '';
  return (
    <div className='relative w-full h-full'>
      <div className='relative w-full mb-2 h-96 animate-fade-in'>
        <Image
          src={image}
          alt={`Cover Image for the post ${title}`}
          loading='lazy'
          fill
          sizes='(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px'
        />
      </div>
      <div className='absolute inset-0 z-10 bg-background-dark bg-opacity-60 dark:bg-opacity-30' />
      <div className='absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:w-2/3 text-secondary animate-slide-in'>
        <h2
          className='mb-2 text-xl font-semibold text-left md:text-3xl font-header'
          style={{ textShadow: '1px 1px #121212' }}
        >
          {title}
        </h2>
        <p className='hidden mb-4 md:block font-body text-start'>{excerpt}</p>

        <Button label='Read More' className='px-2 py-1 text-xs md:text-sm' />
      </div>
    </div>
  );
});

SliderCard.displayName = 'SliderCard';
export default SliderCard;
