import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Theme, PortfolioContext } from '@/context';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const PortfolioProvider = ({ children }: Props) => {
  const { setTheme, theme } = useTheme();
  const [nextTheme, setNextTheme] = useState<Theme>(() => theme as Theme);

  useEffect(() => {
    if (nextTheme !== theme) {
      setTheme(nextTheme);
    }
  }, [nextTheme, theme, setTheme]);

  const value = {
    theme: nextTheme,
    setTheme: setNextTheme,
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
