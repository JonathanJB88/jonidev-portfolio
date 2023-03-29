import Link from 'next/link';

export const NotFoundPost = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='mb-4 text-4xl font-semibold'>Oops! Post not found.</h1>
      <p className='mb-8 text-xl text-gray-500'>
        It looks like the post you're looking for doesn't exist or has been removed.
      </p>
      <Link href='/'>
        <button className='px-6 py-3 font-semibold text-white bg-blue-600 rounded-md'>Return to Home</button>
      </Link>
    </div>
  );
};
