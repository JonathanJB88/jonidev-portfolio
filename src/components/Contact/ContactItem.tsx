import { cloneElement } from 'react';

interface ContactItemProps {
  icon: React.ReactElement;
  type: 'mail' | 'whatsapp';
  contact: string;
}

export const ANCHOR_CLASS = 'flex items-center justify-center';

export const ContactItem = ({ icon, type, contact }: ContactItemProps) => {
  const link = type === 'mail' ? `mailto:${contact}` : `https://wa.me/${contact}`;
  return (
    <div className='text-sm italic text-center font-body md:text-base'>
      <a href={link} className={ANCHOR_CLASS} target='_blank' rel='noopener noreferrer' aria-label={link}>
        {cloneElement(icon, {
          className:
            'w-8 h-8 mx-1 transition-colors duration-300 text-primary dark:text-accent dark:hover:text-primary hover:text-accent',
        })}
        <span className='font-medium'>{contact}</span>
      </a>
    </div>
  );
};
