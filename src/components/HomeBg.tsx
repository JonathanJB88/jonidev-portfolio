import { useImperativeHandle, forwardRef, memo, useContext } from 'react';
import Particles from 'react-particles';

import { useParticlesConfig } from '@/hooks';
import { PortfolioContext } from '@/context';
import { Loading } from '@/components';

type Props = {
  children?: React.ReactNode;
};

type ParticlesRef = {
  refresh(): void;
};

export const HomeBg = memo(
  forwardRef<ParticlesRef, Props>((Props, ref) => {
    //
    const { particlesRef, particleOptions, particlesInit } = useParticlesConfig();

    useImperativeHandle(ref, () => ({
      refresh() {
        if (particlesRef.current) {
          particlesRef.current.refresh();
        }
      },
    }));

    return (
      <div className='fixed top-0 left-0 w-full h-full -z-50 animate-fade-in'>
        <Particles
          container={particlesRef}
          className='w-full h-full'
          id='tsparticles'
          init={particlesInit}
          options={particleOptions}
        />
      </div>
    );
  })
);
