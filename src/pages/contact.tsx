import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { BiMailSend } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import autosize from 'autosize';

import { Btn, Social } from '@/components';
import { useContact } from '@/hooks';
import { PortfolioContext } from '@/context';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  //
  const { setLastVisitedBlog } = useContext(PortfolioContext);
  const router = useRouter();
  const { name, email, project, loading, messageSent, errorMessage, handleChange, handleSubmit } = useContact();
  const anchorClass = 'flex items-center justify-center';

  const handleCTAClick = () => {
    setLastVisitedBlog(true);
    router.push('/blog');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Fade triggerOnce>
        <h1 className='mb-4 text-2xl font-bold md:text-4xl font-header text-primary dark:text-accent'>Get in Touch</h1>
        <p className='max-w-md px-4 mb-8 text-sm text-center md:text-base font-body'>
          Feel free to get in touch with me. I am available to discuss your project, answer any questions, or just chat
          about frontend development and design.
        </p>
        <div className='grid grid-cols-1 gap-4 mb-8 md:grid-cols-2'>
          <div className='text-sm italic text-center font-body md:text-base'>
            <a href='mailto:jonajes0288@gmail.com' className={anchorClass}>
              <BiMailSend className='w-8 h-8 mx-1 transition-colors duration-300 text-primary dark:text-accent dark:hover:text-primary hover:text-accent' />
              <span className='font-medium'>Jonajes0288@gmail.com</span>
            </a>
          </div>
          <div className='text-sm italic text-center font-body md:text-base'>
            <a href='https://wa.me/34652540974' target='_blank' rel='noopener noreferrer' className={anchorClass}>
              <IoLogoWhatsapp className='w-8 h-8 mx-1 transition-colors duration-300 text-primary dark:text-accent dark:hover:text-primary hover:text-accent' />
              <span className='font-medium'>+34 652540974</span>
            </a>
          </div>
          <div className='flex items-center justify-center md:col-span-2'>
            <Social />
          </div>
        </div>

        <form onSubmit={handleSubmit} className='w-full max-w-md px-4 mb-8 font-body'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            placeholder='Your Name'
            className='w-full p-2 mb-4 border rounded'
          />
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='Your Email'
            className='w-full p-2 mb-4 border rounded'
          />
          <textarea
            ref={(el) => el && autosize(el)}
            name='project'
            value={project}
            onChange={handleChange}
            placeholder='Tell me about your project'
            className='w-full p-2 mb-4 overflow-auto border rounded resize-y max-h-48'
          />
          {loading && <p className='text-sm font-semibold text-center md:text-lg text-body'>Sending message...</p>}
          {!loading && messageSent && (
            <p className='text-sm font-semibold text-center text-green-500 md:text-lg'>Message sent successfully!</p>
          )}
          {!loading && !messageSent && <Btn label='Send Message' className='w-full py-2' />}
          {errorMessage && (
            <p className='mt-2 text-sm font-semibold text-center text-red-500 md:text-lg'>{errorMessage}</p>
          )}
        </form>

        <Btn label='Visit my Blog' onClick={handleCTAClick} className='px-2 py-1' />
      </Fade>
    </div>
  );
};

export default Contact;
