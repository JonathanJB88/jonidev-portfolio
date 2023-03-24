import { memo, ReactNode, useContext } from 'react';

import { PortfolioContext } from '@/context';
import { Loading } from '@/components';
import styles from '@/styles/DynamicBg.module.css';

interface DynamicBgProps {
  children: ReactNode;
}

export const DynamicBg = memo(({ children }: DynamicBgProps) => {
  const { theme, isLoading } = useContext(PortfolioContext);
  const isDark = theme === 'dark';

  const primaryColor = isDark ? 'from-primary-dark' : 'from-primary-light';
  const secondaryColor = isDark ? 'via-primary-dark' : 'via-secondary';
  const accentColor = isDark ? 'to-primary' : 'to-accent';
  const gradientOpacity = isDark ? 'bg-opacity-60' : 'bg-opacity-20';

  if (isLoading) return <Loading />;

  return (
    <div
      className={`items-center justify-center min-h-screen w-screen h-full bg-gradient-to-br ${primaryColor} ${secondaryColor} ${accentColor} ${gradientOpacity} ${styles.gradientAnimation}`}
    >
      {children}
    </div>
  );
});
