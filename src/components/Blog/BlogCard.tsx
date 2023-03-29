import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/Sanity';
import { Btn } from '@/components';

import { Post } from '@/interfaces';

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='flex flex-col h-full overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-700'>
      <div className='relative w-full h-40'>
        <Image src={urlForImage(post.coverImage).url() || ''} alt={`Cover Image for the post ${post.title}`} fill />
      </div>
      <div className='flex flex-col flex-grow p-6'>
        <h2 className='mb-2 text-sm font-semibold md:text-xl font-header'>{post.title}</h2>
        <p className='mb-4 text-xs text-gray-600 md:text-sm dark:text-gray-300 font-body'>{post.excerpt}</p>
        <div className='flex items-center mb-4'>
          <Image
            src={urlForImage(post.author.picture).url() || ''}
            alt={`Avatar for ${post.author.name}`}
            width={30}
            height={30}
            className='rounded-full'
          />
          <p className='ml-2 text-xs font-body md:text-sm'>{post.author.name}</p>
        </div>
        <div className='flex-grow mb-4'>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-800 bg-gray-400 rounded-full dark:bg-gray-600 dark:text-gray-200'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='mt-auto'>
          <Link href={`/blog/${post.slug}`}>
            <Btn label='Read More' className='px-2 py-1 text-xs md:text-sm' />
          </Link>
        </div>
      </div>
    </div>
  );
};
