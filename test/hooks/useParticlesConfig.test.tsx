import { renderHook } from '@testing-library/react';
import { PortfolioContext, PortfolioContextProps } from '@/context';
import { useParticlesConfig } from '@/hooks';
import { getParticleOptions } from '@/config';
import type { Engine } from 'tsparticles-engine';
import * as tsparticles from 'tsparticles';

describe('useParticlesConfig', () => {
  it('returns the correct particleOptions and initializes particlesRef', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <PortfolioContext.Provider value={{ theme: 'light' } as PortfolioContextProps}>
        {children}
      </PortfolioContext.Provider>
    );

    const { result } = renderHook(() => useParticlesConfig(), { wrapper });

    expect(result.current.particleOptions).toEqual(getParticleOptions('light'));
    expect(result.current.particlesRef).not.toBeNull();
  });

  it('updates particleOptions when theme changes', () => {
    let contextValue = { theme: 'dark' } as PortfolioContextProps;

    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <PortfolioContext.Provider value={contextValue}>{children}</PortfolioContext.Provider>
    );

    const { result, rerender } = renderHook(() => useParticlesConfig(), { wrapper });

    expect(result.current.particleOptions).toEqual(getParticleOptions('dark'));

    contextValue = { theme: 'light' } as PortfolioContextProps;

    rerender();

    expect(result.current.particleOptions).toEqual(getParticleOptions('light'));
  });

  it('calls particlesInit to load the full engine', async () => {
    const loadFullSpy = jest.spyOn(tsparticles, 'loadFull').mockImplementation(() => Promise.resolve());

    const { result } = renderHook(() => useParticlesConfig());
    const engineMock = {} as Engine;
    await result.current.particlesInit(engineMock);

    expect(loadFullSpy).toHaveBeenCalledWith(engineMock);
  });
});
