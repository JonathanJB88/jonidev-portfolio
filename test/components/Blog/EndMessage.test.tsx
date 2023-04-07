import { render, screen } from '@testing-library/react';
import { EndMessage } from '@/components';

describe('EndMessage', () => {
  beforeEach(() => {
    render(<EndMessage />);
  });

  it("should render the 'You've reached the end!' message", () => {
    const endMessage = screen.getByText(/You've reached the end!/i);
    expect(endMessage).toBeInTheDocument();
  });

  it('should render the thank you message', () => {
    const thankYouMessage = screen.getByText(/Thanks for checking out all my posts. Stay tuned for more!/i);
    expect(thankYouMessage).toBeInTheDocument();
  });
});
