import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { DynamicBg, HomeBg, ThemeSwitcher } from '@/components';
import { PortfolioProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <PortfolioProvider>
        {isHomePage ? (
          <>
            <HomeBg />
            <Component {...pageProps} />
          </>
        ) : (
          <DynamicBg>
            <Component {...pageProps} />
          </DynamicBg>
        )}
        <ThemeSwitcher />
      </PortfolioProvider>
    </ThemeProvider>
  );
}
