import { getParticleOptions } from '@/config';
import { Theme } from '@/context';

describe('particleConfig', () => {
  describe('getParticleOptions', () => {
    it('returns the correct particle options for a dark theme', () => {
      const theme: Theme = 'dark';
      const options = getParticleOptions(theme);

      expect(options.background.color.value).toBe('#121212');
      expect(options.particles.color.value).toBe('#FF8A3D');
      expect(options.particles.links.color).toBe('#F0F0F0');
    });

    it('returns the correct particle options for a light theme', () => {
      const theme: Theme = 'light';
      const options = getParticleOptions(theme);

      expect(options.background.color.value).toBe('#F0F0F0');
      expect(options.particles.color.value).toBe('#3358C4');
      expect(options.particles.links.color).toBe('#121212');
    });

    it('returns the particle options with particleBaseConfig properties', () => {
      const theme: Theme = 'light';
      const options = getParticleOptions(theme);

      expect(options.fpsLimit).toBe(30);
      expect(options.interactivity).toMatchObject({
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
      });
      expect(options.particles).toMatchObject({
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
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
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
      });
      expect(options.detectRetina).toBe(true);
    });
  });
});
