import Link from 'next/link';
import { Btn } from '@/components';

export const BlogFooter = () => {
  return (
    <footer className='flex justify-center w-full py-4'>
      <Link href='/contact'>
        <Btn label='Contact Me' />
      </Link>
    </footer>
  );
};
