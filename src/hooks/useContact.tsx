import { send } from 'emailjs-com';
import { useState } from 'react';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const useContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      console.warn('Please provide your emailjs serviceId, templateId and publicKey in the .env.local file.');
      return;
    }

    if (!formData.name || !formData.email || !formData.project) {
      setErrorMessage('Please fill out all the fields.');
      return;
    }

    setLoading(true);

    try {
      const result = await send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.project,
        },
        publicKey
      );
      setMessageSent(result.status === 200);
      if (result.status === 200) setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      setMessageSent(false);
      setErrorMessage(messageSent ? '' : 'An error occurred while sending the message. Please try again later.');
    }
    setLoading(false);
  };

  return {
    ...formData,
    loading,
    messageSent,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};
