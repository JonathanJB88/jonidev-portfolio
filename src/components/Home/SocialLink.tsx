import { Fade } from 'react-awesome-reveal';
import { IconType } from 'react-icons';

export interface SocialLinkProps {
  Icon: IconType;
  url: string;
  ariaLabel: string;
  delay?: number;
}
const iconClassName =
  'w-8 h-8 text-primary transition-colors duration-300 dark:text-accent dark:hover:text-primary hover:text-accent mx-1';

export const SocialLink = ({ Icon, url, ariaLabel, delay = 100 }: SocialLinkProps) => (
  <Fade direction='up' delay={delay} triggerOnce>
    <a href={url} target='_blank' rel='noreferrer' aria-label={ariaLabel}>
      <Icon className={iconClassName} data-testid='social-icon' />
    </a>
  </Fade>
);
