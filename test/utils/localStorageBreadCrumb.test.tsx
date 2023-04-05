import { saveVisitedItemsToLocalStorage, loadVisitedItemsFromLocalStorage } from '@/utils';
import { BreadCrumb } from '@/interfaces';

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Visited Items Local Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save visited items to local storage', () => {
    const visitedItems: BreadCrumb[] = [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ];

    saveVisitedItemsToLocalStorage(visitedItems);

    expect(localStorage.getItem('visitedItems')).toEqual(JSON.stringify(visitedItems));
  });

  it('should load visited items from local storage', () => {
    const visitedItems: BreadCrumb[] = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ];

    localStorage.setItem('visitedItems', JSON.stringify(visitedItems));

    const result = loadVisitedItemsFromLocalStorage();

    expect(result).toEqual(visitedItems);
  });

  it('should return default visited items when local storage is empty', () => {
    const defaultVisitedItems: BreadCrumb[] = [{ label: 'Home', href: '/' }];

    const result = loadVisitedItemsFromLocalStorage();

    expect(result).toEqual(defaultVisitedItems);
  });
});
