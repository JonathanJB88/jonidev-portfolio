import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/Sanity';

import { Post } from '@/interfaces';

interface SliderCardProps {
  post: Post;
}

export const SliderCard = ({ post: { coverImage, title, excerpt, slug } }: SliderCardProps) => {
  return (
    <div className='relative w-full h-full'>
      <Image src={urlForImage(coverImage).url() || ''} alt={title} fill className='z-0' />
      <div className='absolute inset-0 z-10 bg-black bg-opacity-40' />
      <div className='absolute inset-0 z-20 flex flex-col items-start justify-center px-6 text-white'>
        <h2 className='mb-2 text-3xl font-semibold'>{title}</h2>
        <p className='hidden mb-4 md:block'>{excerpt}</p>
        <Link href={`/blog/${slug}`}>
          <button className='font-semibold text-blue-500'>Read More</button>
        </Link>
      </div>
    </div>
  );
};
