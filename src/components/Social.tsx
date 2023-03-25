import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

import { SocialLink } from '@/components';

import { ISocial } from '@/interfaces';

const social: ISocial[] = [
  {
    id: 1,
    Icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/jonathanbracho/',
  },
  {
    id: 2,
    Icon: BsGithub,
    url: 'https://github.com/JonathanJB88',
  },
  {
    id: 3,
    Icon: BsTwitter,
    url: 'https://twitter.com/JonathanDev88',
  },
];

export const Social = () => {
  return (
    <>
      {social.map((link) => (
        <SocialLink key={link.id} Icon={link.Icon} url={link.url} delay={link.id * 100} />
      ))}
    </>
  );
};
