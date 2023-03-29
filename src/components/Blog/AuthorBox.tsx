import Image from 'next/image';

import { urlForImage } from '@/lib/Sanity';
import { Social } from '@/components';

import { Author } from '@/interfaces';

type AuthorBoxProps = {
  author: Author;
};

export const AuthorBox = ({ author }: AuthorBoxProps) => {
  return (
    <div className='flex items-center mt-8'>
      <div className='mr-4'>
        <Image
          src={urlForImage(author.picture).url() || ''}
          alt={author.name}
          width={80}
          height={80}
          className='rounded-full'
        />
      </div>
      <div>
        <h3 className='mb-2 text-xl font-semibold'>{author.name}</h3>
        <div className='flex space-x-2'>
          <Social />
        </div>
      </div>
    </div>
  );
};
