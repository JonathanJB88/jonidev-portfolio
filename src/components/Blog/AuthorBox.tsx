import { memo } from 'react';
import Image from 'next/image';

import { getUrlWithBlurData, urlForImage } from '@/lib/Sanity';
import { Social } from '@/components';

import { Author } from '@/interfaces';

interface AuthorBoxProps {
  author: Author;
}

const AuthorBox = memo(({ author }: AuthorBoxProps) => {
  const blurDataURL = getUrlWithBlurData(author.picture);
  return (
    <div className='flex items-center my-8'>
      <div className='mr-4'>
        <Image
          src={urlForImage(author.picture).url() || ''}
          alt={author.name}
          width={80}
          height={80}
          loading='lazy'
          className='rounded-full'
          placeholder='blur'
          blurDataURL={blurDataURL}
        />
      </div>
      <div>
        <h3 className='mb-2 text-lg font-semibold md:text-xl font-header'>{author.name}</h3>
        <div className='flex space-x-2'>
          <Social />
        </div>
      </div>
    </div>
  );
});

AuthorBox.displayName = 'AuthorBox';
export default AuthorBox;
