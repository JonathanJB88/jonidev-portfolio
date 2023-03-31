import { BreadCrumb } from '@/interfaces';

export const saveVisitedItemsToLocalStorage = (visitedItems: BreadCrumb[]) => {
  localStorage.setItem('visitedItems', JSON.stringify(visitedItems));
};

export const loadVisitedItemsFromLocalStorage = (): BreadCrumb[] => {
  const visitedItems = localStorage.getItem('visitedItems');
  return visitedItems ? JSON.parse(visitedItems) : [{ label: 'Home', href: '/' }];
};
