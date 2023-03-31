import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { PortfolioContext } from '@/context';
import { getBreadCrumbItem, saveVisitedItemsToLocalStorage } from '@/utils';

export const useBreadcrumbNavigation = () => {
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
            const newItems = [...prevItems.slice(0, index + 1)];
            saveVisitedItemsToLocalStorage(newItems);
            return newItems;
          } else {
            // Otherwise, add the item to the list
            const newItems = [...prevItems, currentItem];
            saveVisitedItemsToLocalStorage(newItems);
            return newItems;
          }
        });
    }
  }, [pathname, isHomePage, postTitle]);

  useEffect(() => {
    if (lastVisitedBlog && pathname === '/blog') {
      setVisitedItems((prevItems) => {
        const lastIndex = prevItems.findIndex((item) => item.href === '/blog');
        const newItems = [...prevItems.slice(0, lastIndex + 1)];
        saveVisitedItemsToLocalStorage(newItems);
        return newItems;
      });
      setLastVisitedBlog(false);
    }
  }, [lastVisitedBlog, pathname, setLastVisitedBlog]);

  const onBreadcrumbClick = (index: number) => {
    setVisitedItems((prevItems) => {
      const newItems = [...prevItems.slice(0, index + 1)];
      saveVisitedItemsToLocalStorage(newItems);
      return newItems;
    });
  };

  return {
    visitedItems,
    onBreadcrumbClick,
  };
};
