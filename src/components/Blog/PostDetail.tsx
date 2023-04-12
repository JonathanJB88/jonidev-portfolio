import Image from 'next/image';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';

import { getUrlWithBlurData, urlForImage } from '@/lib/Sanity';
import { Button, CommentsSection, PostDate } from '@/components';
import AuthorBox from './AuthorBox';
import { blockSerializer, imageSerializer } from '@/utils';

import { Post } from '@/interfaces';

export interface PostDetailProps {
  post: Post;
}

const serializers = {
  types: {
    block: blockSerializer,
    imageWithAlt: imageSerializer,
  },
};

export const PostDetail = ({ post: { coverImage, title, content, author, date } }: PostDetailProps) => {
  const blurDataURL = getUrlWithBlurData(coverImage);
  return (
    <section>
      <div className='relative w-full mb-2 h-96 animate-fade-in'>
        <Image
          src={urlForImage(coverImage).url() || ''}
          alt={`Cover Image for the post ${title}`}
          loading='lazy'
          fill
          sizes='(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px'
          placeholder='blur'
          blurDataURL={blurDataURL}
        />
      </div>
      <div className='px-4 py-4 md:px-40'>
        <h1
          className='mb-4 text-2xl font-semibold md:text-4xl font-header text-primary dark:text-accent animate-slide-in'
          style={{ textShadow: '1px #121212' }}
        >
          {title}
        </h1>
        <div className='flex flex-col animate-fade-in'>
          <PostDate dateString={date} />
          <span data-testid='post-author' className='mt-2 text-xs italic font-medium font-body md:text-sm'>
            by
            <a
              href='https://twitter.com/JonathanDev88'
              className='text-primary dark:text-accent-hover dark:hover:text-primary-light hover:text-accent-hover'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow me on Twitter'
            >
              {' '}
              @JonathanDev88
            </a>
          </span>
        </div>

        <hr className='mt-2 mb-4 border-gray-300 dark:border-gray-700 animate-fade-in' />

        <BlockContent blocks={content} serializers={serializers} />
        <div className='mt-4'>
          <Link href='/blog'>
            <Button label='← Browse More Posts' className='px-2 py-1 text-xs md:text-sm' />
          </Link>
        </div>
        <AuthorBox author={author} />
        {/* <CommentsSection postId={post.slug} /> */}
      </div>
    </section>
  );
};
