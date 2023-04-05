import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

import { SocialLink } from '@/components';

import { ISocial } from '@/interfaces';

const social: ISocial[] = [
  {
    id: 1,
    Icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/jonathanbracho/',
    ariaLabel: 'Visit my LinkedIn',
  },
  {
    id: 2,
    Icon: BsGithub,
    url: 'https://github.com/JonathanJB88',
    ariaLabel: 'Visit my GitHub',
  },
  {
    id: 3,
    Icon: BsTwitter,
    url: 'https://twitter.com/JonathanDev88',
    ariaLabel: 'Visit my Twitter',
  },
];

export const Social = () => (
  <>
    {social.map(({ id, Icon, url, ariaLabel }) => (
      <SocialLink key={id} Icon={Icon} url={url} delay={id * 100} ariaLabel={ariaLabel} />
    ))}
  </>
);
