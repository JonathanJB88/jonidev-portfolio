import { BreadCrumb } from '@/interfaces';

const VISITED_ITEMS_KEY = 'visitedItems';

const handleLocalStorageError = (action: string, error: any) => {
  console.error(`Error ${action} visited items in localStorage:`, error);
};

export const saveVisitedItemsToLocalStorage = (visitedItems: BreadCrumb[]) => {
  try {
    localStorage.setItem(VISITED_ITEMS_KEY, JSON.stringify(visitedItems));
  } catch (error) {
    handleLocalStorageError('saving', error);
  }
};

export const loadVisitedItemsFromLocalStorage = (): BreadCrumb[] => {
  const visitedItems = localStorage.getItem(VISITED_ITEMS_KEY);
  if (visitedItems) {
    try {
      return JSON.parse(visitedItems);
    } catch (error) {
      handleLocalStorageError('parsing', error);
    }
  }

  return [{ label: 'Home', href: '/' }];
};
