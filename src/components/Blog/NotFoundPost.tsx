import Link from 'next/link';

import { Button } from '@/components';

export const NotFoundPost = () => (
  <div className='flex flex-col items-center justify-center min-h-screen text-center'>
    <h1 className='mb-4 text-2xl font-semibold md:text-4xl font-header text-primary dark:text-accent'>
      {`Oops! Post not found.`}
    </h1>
    <p className='px-4 mb-8 text-base font-semibold text-gray-500 dark:text-gray-400 md:text-xl font-body'>
      {`It looks like the post you're looking for doesn't exist or has been removed.`}
    </p>
    <Link href='/blog'>
      <Button label='Browse More Posts' />
    </Link>
  </div>
);
