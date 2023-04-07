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
      <HeadComponent
        title='Contact'
        description='Get in touch with Jonathan Bracho, a Frontend Developer with a strong background in React and TypeScript. Available for projects and collaborations.'
        keywords='contact, frontend development, design, web developer, portfolio'
        pageUrl='/contact'
      />
      <main className={`${ANCHOR_CLASS} min-h-screen flex-col`}>
        <Fade triggerOnce>
          <section>
            <h1 className='mb-4 text-2xl font-bold text-center md:text-4xl font-header text-primary dark:text-accent'>
              Get in Touch
            </h1>
            <p data-testid='CTA-text' className='max-w-md px-4 mb-8 text-sm text-center md:text-base font-body'>
              Feel free to get in touch with me. I am available to discuss your project, answer any questions, or just
              chat about frontend development and design.
            </p>
            <div className='grid grid-cols-1 gap-4 mb-8 md:grid-cols-2'>
              <ContactItem icon={<BiMailSend />} aria-label='Email Icon' type='mail' contact='Jonajes0288@gmail.com' />
              <ContactItem
                icon={<IoLogoWhatsapp />}
                aria-label='Whatsapp Icon'
                type='whatsapp'
                contact='+34652540974'
              />
              <div className='flex items-center justify-center md:col-span-2'>
                <Social aria-label='Visit Jonathan Bracho Social Media' />
              </div>
            </div>
          </section>
          <section>
            <ContactForm
              state={{ loading, messageSent, errorMessage }}
              values={{ name, email, project }}
              handlers={{ handleChange, handleSubmit }}
            />
          </section>
          <section aria-label='CTA-button'>
            <Button label='Visit my Blog' onClick={handleCTAClick} className='px-2 py-1' />
          </section>
        </Fade>
      </main>
    </>
  );
};

export default ContactPage;
