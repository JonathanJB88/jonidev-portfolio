import { render, fireEvent, screen } from '@testing-library/react';
import { ContactForm } from '@/components';

const mockHandlers = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
};

const mockState = {
  loading: false,
  messageSent: false,
  errorMessage: '',
};

const mockValues = {
  name: '',
  email: '',
  project: '',
};

describe('ContactForm', () => {
  beforeEach(() => {
    render(<ContactForm state={mockState} values={mockValues} handlers={mockHandlers} />);
  });

  it('should render input fields', () => {
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell me about your project')).toBeInTheDocument();
  });

  it('should handle input changes', () => {
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tell me about your project'), { target: { value: 'A new web app' } });

    expect(mockHandlers.handleChange).toHaveBeenCalledTimes(3);
  });

  it('should handle form submission', () => {
    fireEvent.submit(screen.getByLabelText('contact-form'));

    expect(mockHandlers.handleSubmit).toHaveBeenCalledTimes(1);
  });
});
