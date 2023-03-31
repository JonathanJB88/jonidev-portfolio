import { Fragment, useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { BreadCrumb } from '@/interfaces';
import { useRouter } from 'next/router';
import { getBreadCrumbItem } from '@/utils';
import { PortfolioContext } from '@/context';

export const BreadCrumbs = () => {
  //
  const { lastVisitedBlog, visitedItems, setLastVisitedBlog, setVisitedItems } = useContext(PortfolioContext);

  const { pathname, query } = useRouter();
  const isHomePage = pathname === '/';
  const postTitle = query.slug as string;

  useEffect(() => {
    if (!isHomePage) {
      const currentItem = getBreadCrumbItem(pathname, postTitle);

      currentItem &&
        setVisitedItems((prevItems) => {
          const index = prevItems.findIndex((item) => item.href === currentItem.href);
          if (index >= 0) {
            // If the item is already in the list, remove items after it
            return prevItems.slice(0, index + 1);
          } else {
            // Otherwise, add the item to the list
            return [...prevItems, currentItem];
          }
        });
    }
  }, [pathname, isHomePage, postTitle]);

  useEffect(() => {
    if (lastVisitedBlog && pathname === '/blog') {
      setVisitedItems((prevItems) => {
        const lastIndex = prevItems.findIndex((item) => item.href === '/blog');
        return prevItems.slice(0, lastIndex + 1);
      });
      setLastVisitedBlog(false);
    }
  }, [lastVisitedBlog, pathname, setLastVisitedBlog]);

  const onBreadcrumbClick = (index: number) => {
    setVisitedItems((prevItems) => prevItems.slice(0, index + 1));
  };

  return (
    <nav className='fixed z-30 flex items-center top-4 left-6 animate-fade-in'>
      <ol className='flex items-center space-x-2 font-semibold text-gray-500'>
        {visitedItems.map((item, index) => (
          <Fragment key={index}>
            {index < visitedItems.length - 1 ? (
              <li>
                <Link href={{ pathname: item.href, query: item.query }}>
                  <span
                    className='text-blue-600 cursor-pointer hover:underline'
                    onClick={() => onBreadcrumbClick(index)}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ) : (
              <li className='text-gray-800 cursor-default'>{item.label}</li>
            )}
            {index < visitedItems.length - 1 && <li>&gt;</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
