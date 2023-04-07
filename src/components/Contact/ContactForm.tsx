import autosize from 'autosize';

import { Button } from '@/components';

interface ContactFormProps {
  state: {
    loading: boolean;
    messageSent: boolean;
    errorMessage: string;
  };
  values: {
    name: string;
    email: string;
    project: string;
  };
  handlers: {
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  };
}

export const ContactForm = ({
  state: { loading, errorMessage, messageSent },
  values: { name, email, project },
  handlers: { handleChange, handleSubmit },
}: ContactFormProps) => (
  <form aria-label='contact-form' onSubmit={handleSubmit} className='w-full max-w-md px-4 mb-8 font-body'>
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
    {!loading && !messageSent && <Button label='Send Message' className='w-full py-2' />}
    {errorMessage && <p className='mt-2 text-sm font-semibold text-center text-red-500 md:text-lg'>{errorMessage}</p>}
  </form>
);
