import { render, fireEvent, waitFor } from '@testing-library/react';
import * as emailjs from 'emailjs-com';
import { useContact } from '@/hooks';

// Mock the 'emailjs-com' module
jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

const emailjsSend = emailjs.send as jest.MockedFunction<typeof emailjs.send>;

// Helper component to test the useContact hook
const ContactFormTester = () => {
  const { name, email, project, loading, messageSent, errorMessage, handleChange, handleSubmit } = useContact();

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={handleChange} placeholder='Name' />
      <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email' />
      <textarea name='project' value={project} onChange={handleChange} placeholder='Project'></textarea>
      <button type='submit'>Submit</button>
      {loading && <span>Loading...</span>}
      {messageSent && <span>Message sent!</span>}
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

describe('useContact hook', () => {
  beforeEach(() => {
    emailjsSend.mockReset();
  });

  it('handles form input changes', () => {
    const { getByPlaceholderText } = render(<ContactFormTester />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const projectInput = getByPlaceholderText('Project') as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(projectInput, { target: { value: 'My awesome project' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(projectInput.value).toBe('My awesome project');
  });

  it('submits form successfully', async () => {
    emailjsSend.mockResolvedValue({ status: 200, text: 'OK' });

    const { getByPlaceholderText, getByText } = render(<ContactFormTester />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const projectInput = getByPlaceholderText('Project') as HTMLTextAreaElement;
    const submitButton = getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(projectInput, { target: { value: 'My awesome project' } });

    fireEvent.click(submitButton);

    // Check if the form shows loading state
    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(emailjsSend).toHaveBeenCalled());
    await waitFor(() => expect(getByText('Message sent!')).toBeInTheDocument());

    // Check if the form is cleared after successful submission
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(projectInput.value).toBe('');
  });

  it('handles form submission errors', async () => {
    emailjsSend.mockRejectedValue(new Error('Sending error'));

    const { getByPlaceholderText, getByText } = render(<ContactFormTester />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const projectInput = getByPlaceholderText('Project') as HTMLTextAreaElement;
    const submitButton = getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(projectInput, { target: { value: 'My awesome project' } });

    fireEvent.click(submitButton);

    // Check if the form shows loading state
    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(emailjsSend).toHaveBeenCalled());
    await waitFor(() =>
      expect(getByText('An error occurred while sending the message. Please try again later.')).toBeInTheDocument()
    );
  });

  it('displays an error if any field is empty', async () => {
    const { getByPlaceholderText, getByText } = render(<ContactFormTester />);
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const projectInput = getByPlaceholderText('Project') as HTMLTextAreaElement;
    const submitButton = getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(projectInput, { target: { value: 'My awesome project' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(getByText('Please fill out all the fields.')).toBeInTheDocument());
  });
});
