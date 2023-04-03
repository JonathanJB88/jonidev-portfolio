import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Theme, PortfolioContext } from '@/context';
import { loadVisitedItemsFromLocalStorage } from '@/utils';

import { BreadCrumb } from '@/interfaces';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PortfolioProvider = ({ children }: Props) => {
  const { setTheme, theme: currentTheme } = useTheme();
  const [nextTheme, setNextTheme] = useState<Theme>(() => currentTheme as Theme);
  const [lastVisitedBlog, setLastVisitedBlog] = useState<boolean>(false);
  const [visitedItems, setVisitedItems] = useState<BreadCrumb[]>(loadVisitedItemsFromLocalStorage());

  useEffect(() => {
    if (nextTheme !== currentTheme) {
      setTheme(nextTheme);
    }
  }, [nextTheme, currentTheme, setTheme]);

  const value = {
    theme: nextTheme,
    lastVisitedBlog,
    visitedItems,
    setTheme: setNextTheme,
    setLastVisitedBlog,
    setVisitedItems,
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
