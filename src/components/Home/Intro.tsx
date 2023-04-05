import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

import { Button, Social, DownloadCV } from '@/components';

interface IntroProps {
  about: string;
}

export const Intro = ({ about }: IntroProps) => (
  <section className='flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-center bg-cover md:px-8'>
    <div className='text-center animate-fade-in'>
      <Fade direction='down' delay={300} triggerOnce>
        <div className='flex justify-center mb-6 -mt-8'>
          <Image
            src='/images/profilepic.png'
            alt='Profile Photo of Jonathan Bracho'
            width={150}
            height={150}
            loading='lazy'
            className='shadow-lg shadow-gray-700 rounded-2xl'
          />
        </div>
      </Fade>
      <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl text-primary dark:text-accent font-header'>
        Jonathan Bracho
      </h1>
      <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl dark:text-secondary font-header'>
        Frontend Developer
      </h2>
      <p className='max-w-screen-md mx-auto mt-4 text-xs md:text-base font-body dark:text-secondary'>{about}</p>
    </div>
    <div className='animate-slide-in'>
      <Link href='/skills'>
        <div className='mt-8'>
          <Button label='Explore my Skills' />
        </div>
      </Link>
    </div>
    <div className='flex flex-col items-center w-1/2 mt-20 justify-evenly md:flex-row'>
      <div className='flex flex-row items-center mb-2 md:mb-0 md:mr-2'>
        <Social aria-label='Visit Jonathan Bracho Social Media' />
      </div>
      <div className='mt-4 md:mt-0 md:mr-2'>
        <DownloadCV />
      </div>
    </div>
  </section>
);
