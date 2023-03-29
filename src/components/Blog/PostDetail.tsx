import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';

import { urlForImage } from '@/lib/Sanity';
import { AuthorBox, CommentsSection } from '@/components';

import { Post } from '@/interfaces';

interface PostDetailProps {
  post: Post;
}

export const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-semibold'>{post.title}</h1>
      <div className='mb-8'>
        <Image
          src={urlForImage(post.coverImage).url() || ''}
          alt={post.title}
          layout='responsive'
          width={16}
          height={9}
          className='w-full'
        />
      </div>
      <BlockContent blocks={post.content} />
      <AuthorBox author={post.author} />
      {/* <CommentsSection postId={post.slug} /> */}
    </div>
  );
};
