import Link from 'next/link';

interface IntroProps {
  about: string;
}

export const Intro = ({ about }: IntroProps) => {
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
          <button className='px-4 py-2 mt-8 font-semibold transition-colors duration-300 border-2 rounded-md font-body text-accent border-accent hover:bg-accent-hover hover:text-primary'>
            Explore Skills
          </button>
        </Link>
      </div>
    </section>
  );
};
