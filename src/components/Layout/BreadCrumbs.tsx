import { Fragment } from 'react';
import Link from 'next/link';

import { useBreadcrumbNavigation } from '@/hooks';
import { transformText } from '@/utils';

export const BreadCrumbs = () => {
  //
  const { visitedItems, onBreadcrumbClick } = useBreadcrumbNavigation();

  return (
    <nav className='fixed z-30 flex items-center w-2/3 top-4 left-4 md:left-6 animate-fade-in'>
      <ol className='flex flex-wrap items-center px-1 space-x-1 text-xs font-semibold bg-gray-200 rounded-sm font-body md:space-x-2 md:text-base dark:bg-opacity-70 bg-opacity-70 dark:bg-gray-700'>
        {visitedItems.map((item, index) => (
          <Fragment key={index}>
            {index < visitedItems.length - 1 ? (
              <li>
                <Link href={{ pathname: item.href, query: item.query }}>
                  <span
                    className='transition-colors duration-300 cursor-pointer text-primary dark:text-accent hover:underline hover:text-accent dark:hover:text-primary'
                    onClick={() => onBreadcrumbClick(index)}
                  >
                    {transformText(item.label, 20)}
                  </span>
                </Link>
              </li>
            ) : (
              <li className='cursor-default'>{transformText(item.label, 20)}</li>
            )}
            {index < visitedItems.length - 1 && <li>&gt;</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
