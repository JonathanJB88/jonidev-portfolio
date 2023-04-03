import Link from 'next/link';
import { Button } from '@/components';

export const BlogFooter = () => (
  <footer className='flex justify-center w-full py-4'>
    <Link href='/contact'>
      <Button label='Contact Me' />
    </Link>
  </footer>
);
