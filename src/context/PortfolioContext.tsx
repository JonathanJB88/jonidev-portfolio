import { createContext } from 'react';

import { BreadCrumb } from '../interfaces';

export type Theme = 'light' | 'dark';

export interface PortfolioContextProps {
  theme: Theme;
  visitedItems: BreadCrumb[];
  lastVisitedBlog: boolean;
  setTheme: (theme: Theme) => void;
  setVisitedItems: (callback: (prevItems: BreadCrumb[]) => BreadCrumb[]) => void;
  setLastVisitedBlog: (visited: boolean) => void;
}

export const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);
