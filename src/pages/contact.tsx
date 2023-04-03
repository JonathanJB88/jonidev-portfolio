import { useContext } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Fade } from 'react-awesome-reveal';
import { BiMailSend } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';

import { PortfolioContext } from '@/context';
import { ANCHOR_CLASS, Button, ContactForm, ContactItem, HeadComponent, Social } from '@/components';
import { useContact } from '@/hooks';

const ContactPage: NextPage = () => {
  const { setLastVisitedBlog } = useContext(PortfolioContext);
  const router = useRouter();
  const { name, email, project, loading, messageSent, errorMessage, handleChange, handleSubmit } = useContact();

  const handleCTAClick = () => {
    setLastVisitedBlog(true);
    router.push('/blog');
  };

  return (
    <>
      <HeadComponent title='Contact' />
      <div className={`${ANCHOR_CLASS} min-h-screen flex-col`}>
        <Fade triggerOnce>
          <h1 className='mb-4 text-2xl font-bold md:text-4xl font-header text-primary dark:text-accent'>
            Get in Touch
          </h1>
          <p className='max-w-md px-4 mb-8 text-sm text-center md:text-base font-body'>
            Feel free to get in touch with me. I am available to discuss your project, answer any questions, or just
            chat about frontend development and design.
          </p>
          <div className='grid grid-cols-1 gap-4 mb-8 md:grid-cols-2'>
            <ContactItem icon={<BiMailSend />} type='mail' contact='Jonajes0288@gmail.com' />
            <ContactItem icon={<IoLogoWhatsapp />} type='whatsapp' contact='+34652540974' />
            <div className='flex items-center justify-center md:col-span-2'>
              <Social />
            </div>
          </div>

          <ContactForm
            state={{ loading, messageSent, errorMessage }}
            values={{ name, email, project }}
            handlers={{ handleChange, handleSubmit }}
          />

          <Button label='Visit my Blog' onClick={handleCTAClick} className='px-2 py-1' />
        </Fade>
      </div>
    </>
  );
};

export default ContactPage;
