import { useImperativeHandle, forwardRef, memo } from 'react';
import Particles from 'react-particles';

import { useParticlesConfig } from '@/hooks';

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
      <div className='fixed top-0 left-0 w-full h-full -z-50'>
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
