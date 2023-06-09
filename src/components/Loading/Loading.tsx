export const Loading = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <svg aria-label='svg' className='w-16 h-16 mb-4 animate-spin text-primary-light' fill='none' viewBox='0 0 24 24'>
      <circle
        aria-label='circle'
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        aria-label='path'
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-10.582A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z'
      ></path>
    </svg>
    <p className='text-lg text-primary-light font-body'>Loading...</p>
  </div>
);

export default Loading;
