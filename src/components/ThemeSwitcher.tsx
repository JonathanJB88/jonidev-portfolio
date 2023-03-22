import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { debounce } from 'lodash';

export const ThemeSwitcher = () => {
  //
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = debounce(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, 500);

  // Ensure we're only dealing with client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className='fixed px-3 py-1 transition-colors duration-200 rounded-md top-4 right-4 bg-accent text-primary focus:outline-none hover:bg-accent-hover font-header'
      onClick={toggleTheme}
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  );
};
