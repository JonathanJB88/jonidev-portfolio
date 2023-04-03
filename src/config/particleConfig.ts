import { Theme } from '@/context';

const particleBaseConfig = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none' as const,
      enable: true,
      outModes: {
        default: 'bounce' as const,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 5,
    },
  },
  detectRetina: true,
};

export const getParticleOptions = (theme: Theme) => {
  const isDark = theme === 'dark';
  const backgroundColor = isDark ? '#121212' : '#F0F0F0';
  const particleColor = isDark ? '#FF8A3D' : '#3358C4';
  const linkColor = isDark ? '#F0F0F0' : '#121212';

  return {
    ...particleBaseConfig,
    background: {
      color: {
        value: backgroundColor,
      },
    },
    particles: {
      ...particleBaseConfig.particles,
      color: {
        value: particleColor,
      },
      links: {
        ...particleBaseConfig.particles.links,
        color: linkColor,
      },
    },
  };
};
