import { createContext } from 'react';
import { BreadCrumb } from '../interfaces/BreadCrumbInterfaces';

export type Theme = 'light' | 'dark';

export interface PortfolioContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  lastVisitedBlog: boolean;
  setLastVisitedBlog: (visited: boolean) => void;
  visitedItems: BreadCrumb[];
  setVisitedItems: (callback: (prevItems: BreadCrumb[]) => BreadCrumb[]) => void;
}

export const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);
