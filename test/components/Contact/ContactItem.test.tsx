import { render, screen } from '@testing-library/react';
import { ContactItem, ANCHOR_CLASS } from '@/components';
import { BiMailSend } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';

describe('ContactItem', () => {
  it('should render a mail contact item', () => {
    const testContact = 'test@example.com';

    render(<ContactItem icon={<BiMailSend />} type='mail' contact={testContact} />);

    const anchorElement = screen.getByLabelText(`mailto:${testContact}`);
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveClass(ANCHOR_CLASS);
    expect(anchorElement).toHaveAttribute('href', `mailto:${testContact}`);
    expect(screen.getByText(testContact)).toBeInTheDocument();
  });

  it('should render a WhatsApp contact item', () => {
    const testContact = '1234567890';

    render(<ContactItem icon={<IoLogoWhatsapp />} type='whatsapp' contact={testContact} />);

    const anchorElement = screen.getByLabelText(`https://wa.me/${testContact}`);
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveClass(ANCHOR_CLASS);
    expect(anchorElement).toHaveAttribute('href', `https://wa.me/${testContact}`);
    expect(screen.getByText(testContact)).toBeInTheDocument();
  });
});
