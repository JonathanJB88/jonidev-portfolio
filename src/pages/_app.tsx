import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { HomeBg, ThemeSwitcher } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  return (
    <ThemeProvider attribute='class'>
      {isHomePage && <HomeBg />}
      <Component {...pageProps} />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
