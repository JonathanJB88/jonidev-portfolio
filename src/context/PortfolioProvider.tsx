import { useEffect, useReducer, useState } from 'react';
import { useTheme } from 'next-themes';

import { Theme, PortfolioContext, portfolioReducer } from '@/context';

export interface PortfolioState {
  theme: Theme;
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const INIT_STATE: PortfolioState = {
  theme: 'dark',
};

export const PortfolioProvider = ({ children }: Props) => {
  const { setTheme, theme } = useTheme();
  const [nextTheme, setNextTheme] = useState<Theme>(theme as Theme);

  useEffect(() => {
    if (nextTheme !== theme) {
      setTheme(nextTheme);
    }
  }, [nextTheme, theme, setTheme]);

  // const setTheme = (theme: Theme) => {
  //   dispatch({ type: 'SET_THEME', payload: theme });
  //   setNextTheme(theme);
  // };

  const value = {
    theme: nextTheme,
    setTheme: setNextTheme,
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
