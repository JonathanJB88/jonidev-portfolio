import { Fade } from 'react-awesome-reveal';
import { BsCloudDownloadFill } from 'react-icons/bs';

const iconClassName =
  'w-8 h-8 text-primary transition-colors duration-300 hover:text-accent dark:text-accent dark:hover:text-primary';

export const DownloadCV = () => (
  <a
    download='Fronted-Developer_JonathanBracho'
    className='flex justify-center'
    href='/docs/CV.pdf'
    aria-label='Download Jonathan Bracho CV'
  >
    <Fade direction='up' delay={100} triggerOnce>
      <BsCloudDownloadFill className={iconClassName} aria-label='Download Icon' />
    </Fade>
    <Fade direction='up' delay={200} triggerOnce>
      <span className='ml-2 text-xl transition-colors duration-300 dark:hover:text-primary text-primary dark:text-accent hover:text-accent font-body'>
        {' '}
        Download CV
      </span>
    </Fade>
  </a>
);
