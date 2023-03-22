import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useTheme } from 'next-themes';

import { getParticleOptions } from '@/config';

const useParticlesRefresh = (particlesRef: React.MutableRefObject<Container | null>, theme: string) => {
  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.refresh();
    }
  }, [theme, particlesRef]);
};

export const useParticlesConfig = () => {
  //
  const { theme } = useTheme();
  const particlesRef = useRef<Container>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = useMemo(() => {
    return getParticleOptions(theme as 'dark' | 'light');
  }, [theme]);

  theme && useParticlesRefresh(particlesRef, theme);

  return { particleOptions, particlesRef, particlesInit };
};
