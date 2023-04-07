import { memo } from 'react';
import Image from 'next/image';

import { getUrlWithBlurData, urlForImage } from '@/lib/Sanity';
import { Social } from '@/components';

import { Author } from '@/interfaces';

interface AuthorBoxProps {
  author: Author;
}

const AuthorBox = memo(({ author }: AuthorBoxProps) => {
  const profilePicture = urlForImage(author.picture).url() || '';
  const blurDataURL = getUrlWithBlurData(author.picture);
  return (
    <div className='flex items-center my-8'>
      <div className='mr-4'>
        <Image
          src={profilePicture}
          alt={`Profile picture of ${author.name}`}
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
        <div className='flex space-x-2' data-testid='social-component'>
          <Social aria-label='Visit Jonathan Bracho Social Media' />
        </div>
      </div>
    </div>
  );
});

AuthorBox.displayName = 'AuthorBox';
export default AuthorBox;
