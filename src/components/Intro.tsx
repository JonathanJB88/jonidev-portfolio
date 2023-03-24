import { useContext } from 'react';
import Link from 'next/link';

import { PortfolioContext } from '@/context';
import { Btn } from '@/components';

export const Intro = () => {
  //

  const { about } = useContext(PortfolioContext);

  return (
    <section className='flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-center bg-cover md:px-8'>
      <div className='text-center animate-fade-in'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl text-primary font-header'>Jonathan Bracho</h1>
        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl dark:text-secondary font-header'>
          Frontend Developer
        </h2>
        <p className='max-w-screen-md mx-auto mt-4 text-xs md:text-base font-body dark:text-secondary'>{about}</p>
      </div>
      <div className='animate-slide-in'>
        <Link href='/skills'>
          <div className='mt-8'>
            <Btn label='Explore my Skills' />
          </div>
        </Link>
      </div>
    </section>
  );
};
