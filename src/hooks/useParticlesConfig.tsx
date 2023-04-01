import { MutableRefObject, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

import { getParticleOptions } from '@/config';
import { PortfolioContext, Theme } from '@/context';

export const useParticlesRefresh = (particlesRef: MutableRefObject<Container | null>, theme: Theme) => {
  useEffect(() => {
    if (!theme || !particlesRef.current) {
      return;
    }
    particlesRef.current.refresh();
  }, [theme, particlesRef]);
};

export const useParticlesConfig = () => {
  const { theme } = useContext(PortfolioContext);
  const particlesRef = useRef<Container | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = useMemo(() => {
    return getParticleOptions(theme as Theme);
  }, [theme]);

  return { particleOptions, particlesRef, particlesInit };
};
