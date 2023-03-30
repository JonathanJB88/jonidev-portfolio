import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/Sanity';
import { Btn } from '@/components';

import { Post } from '@/interfaces';
import { Fade } from 'react-awesome-reveal';

interface SliderCardProps {
  post: Post;
}

export const SliderCard = ({ post: { coverImage, title, excerpt, slug } }: SliderCardProps) => {
  return (
    <div className='relative w-full h-full'>
      <Image src={urlForImage(coverImage).url() || ''} alt={title} fill className='z-0' />
      <div className='absolute inset-0 z-10 bg-background-dark bg-opacity-60 dark:bg-opacity-30' />
      <div className='absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:w-2/3 text-secondary animate-slide-in'>
        <h2 className='mb-2 text-xl font-semibold md:text-3xl font-header' style={{ textShadow: '1px 1px #121212' }}>
          {title}
        </h2>
        <p className='hidden mb-4 md:block font-body'>{excerpt}</p>
        <Link href={`/blog/${slug}`}>
          <Btn label='Read More' className='px-2 py-1 text-xs md:text-sm' />
        </Link>
      </div>
    </div>
  );
};
