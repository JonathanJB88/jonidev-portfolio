import { IconType } from 'react-icons';

interface ButtonLinkProps {
  url: string;
  Icon: IconType;
  text: string;
}

export const ButtonLink = ({ url, Icon, text }: ButtonLinkProps) => (
  <a
    href={url}
    className='flex items-center px-2 py-1 space-x-3 text-lg rounded-lg md:px-4 md:py-2 bg-primary dark:bg-accent'
    target='_blank'
    aria-label='Github Project'
    rel='noreferrer'
  >
    <Icon className='text-secondary dark:text-dark font-body' />{' '}
    <span className='text-secondary dark:text-dark font-body'>{text}</span>
  </a>
);
