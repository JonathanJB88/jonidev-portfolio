import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Theme, PortfolioContext } from '@/context';
import { BreadCrumb } from '@/interfaces';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PortfolioProvider = ({ children }: Props) => {
  const { setTheme, theme } = useTheme();
  const [nextTheme, setNextTheme] = useState<Theme>(() => theme as Theme);
  const [lastVisitedBlog, setLastVisitedBlog] = useState(false);
  const [visitedItems, setVisitedItems] = useState<BreadCrumb[]>([{ label: 'Home', href: '/' }]);

  useEffect(() => {
    if (nextTheme !== theme) {
      setTheme(nextTheme);
    }
  }, [nextTheme, theme, setTheme]);

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
