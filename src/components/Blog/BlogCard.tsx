import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/lib/Sanity';
import { Post } from '@/interfaces';

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
      <div className='relative w-full h-40'>
        <Image src={urlForImage(post.coverImage).url() || ''} alt={post.title} fill />
      </div>
      <div className='p-6'>
        <h2 className='mb-2 text-xl font-semibold'>{post.title}</h2>
        <p className='mb-4 text-gray-600'>{post.excerpt}</p>
        <div className='flex items-center mb-4'>
          <Image
            src={urlForImage(post.author.picture).url() || ''}
            alt={post.author.name}
            width={30}
            height={30}
            className='rounded-full'
          />
          <p className='ml-2'>{post.author.name}</p>
        </div>
        <div className='mb-4'>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>Read More</button>
        </Link>
      </div>
    </div>
  );
};
