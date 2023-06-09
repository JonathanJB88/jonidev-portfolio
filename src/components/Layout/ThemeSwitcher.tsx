import { useCallback, useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { PortfolioContext, Theme } from '@/context';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(PortfolioContext);
  const [debouncedTheme, setDebouncedTheme] = useState(theme);

  const debouncedSetTheme = useCallback((newTheme: Theme) => {
    const debouncedFn = debounce(() => {
      setDebouncedTheme(newTheme);
    }, 300);
    debouncedFn();
  }, []);

  useEffect(() => {
    setTheme(debouncedTheme);
  }, [debouncedTheme, setTheme]);

  const toggleTheme = () => {
    debouncedSetTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const switcherClassName =
    "mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-primary before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-primary after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-accent dark:checked:after:bg-accent";

  return (
    <div className='fixed z-30 flex items-center top-3 md:top-4 right-4 md:right-6 animate-fade-in'>
      {debouncedTheme === 'dark' && (
        <label
          aria-label='dark mode'
          className='inline-block text-sm md:text-base pr-1 md:pr-[0.15rem] hover:cursor-pointer'
          htmlFor='flexSwitchCheckDefault'
        >
          {'☀️'}
        </label>
      )}
      <input
        className={switcherClassName}
        type='checkbox'
        role='switch'
        id='flexSwitchCheckDefault'
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      {debouncedTheme === 'light' && (
        <label
          aria-label='light mode'
          className='inline-block text-sm md:text-base pl-1 md:pl-[0.15rem] hover:cursor-pointer'
          htmlFor='flexSwitchCheckDefault'
        >
          {'🌙'}
        </label>
      )}
    </div>
  );
};
