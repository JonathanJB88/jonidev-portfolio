import { format, parseISO } from 'date-fns';

export const PostDate = ({ dateString }: { dateString: string }) => {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className='text-sm font-body md:text-base' data-testid='post-date'>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};
