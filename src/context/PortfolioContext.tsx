import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface PortfolioContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);
