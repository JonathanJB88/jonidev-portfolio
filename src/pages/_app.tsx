import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { DynamicBg, HomeBg, ThemeSwitcher } from '@/components';
import { PortfolioProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

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
