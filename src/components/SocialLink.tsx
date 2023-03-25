import { Fade } from 'react-awesome-reveal';
import { IconType } from 'react-icons';

interface SocialLinkProps {
  Icon: IconType;
  url: string;
  delay?: number;
}
export const SocialLink = ({ Icon, url, delay = 100 }: SocialLinkProps) => {
  //
  const iconClassName = 'w-8 h-8 text-primary hover:text-accent mx-1';

  return (
    <Fade direction='up' delay={delay} triggerOnce>
      <a href={url} target='_blank' rel='noreferrer'>
        <Icon className={iconClassName} />
      </a>
    </Fade>
  );
};
