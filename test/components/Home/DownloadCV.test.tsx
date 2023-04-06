import { render, screen } from '@testing-library/react';
import { DownloadCV } from '@/components';

describe('DownloadCV component', () => {
  beforeEach(() => {
    render(<DownloadCV />);
  });

  it('renders Download CV button with correct link and filename', () => {
    const downloadLink = screen.getByLabelText('Download Jonathan Bracho CV');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('download', 'Fronted-Developer_JonathanBracho');
    expect(downloadLink).toHaveAttribute('href', '/docs/CV.pdf');
  });

  it('renders download icon', () => {
    const downloadIcon = screen.getByLabelText('Download Icon');
    expect(downloadIcon).toBeInTheDocument();
  });

  it('renders download text', () => {
    const downloadText = screen.getByText('Download CV');
    expect(downloadText).toBeInTheDocument();
  });
});
