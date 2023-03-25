import CV from '@/assets/docs/CV.pdf';
import { BsCloudDownloadFill } from 'react-icons/bs';

export const DownloadCV = () => {
  //
  const iconClassName = 'w-8 h-8 text-primary hover:text-accent';

  return (
    <a download='Fronted-Developer_JonathanBracho' className='flex justify-center' href={CV}>
      <BsCloudDownloadFill className={iconClassName} />
      <span className='ml-2 text-xl text-primary hover:text-accent font-body'> Download CV</span>
    </a>
  );
};
