import { memo, ReactNode } from 'react';
import { useTheme } from 'next-themes';

import styles from '@/styles/DynamicBg.module.css';

interface DynamicBgProps {
  children: ReactNode;
}

export const DynamicBg = memo(({ children }: DynamicBgProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const primaryColor = isDark ? 'from-primary-dark' : 'from-primary-light';
  const secondaryColor = isDark ? 'via-primary-dark' : 'via-secondary';
  const accentColor = isDark ? 'to-primary' : 'to-accent';
  const gradientOpacity = isDark ? 'bg-opacity-60' : 'bg-opacity-20';

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br ${primaryColor} ${secondaryColor} ${accentColor} ${gradientOpacity} ${styles.gradientAnimation}`}
    >
      {children}
    </div>
  );
});
