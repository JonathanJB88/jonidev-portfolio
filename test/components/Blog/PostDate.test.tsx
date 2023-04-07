import { render } from '@testing-library/react';
import { PostDate } from '@/components';
import { format, parseISO } from 'date-fns';

describe('PostDate', () => {
  it('should render the formatted date correctly', () => {
    const testDateString = '2023-04-07T00:00:00.000Z';

    const { getByTestId } = render(<PostDate dateString={testDateString} />);

    const postDateElement = getByTestId('post-date');
    const parsedDate = parseISO(testDateString);
    const expectedFormattedDate = format(parsedDate, 'LLLL d, yyyy');

    // Normalize and compare text contents
    const receivedText = postDateElement.textContent?.replace(/\s+/g, ' ').trim();
    const expectedText = expectedFormattedDate.replace(/\s+/g, ' ').trim();
    expect(receivedText).toBe(expectedText);
  });

  it('should not render anything if dateString is not provided', () => {
    const { container } = render(<PostDate dateString={''} />);

    expect(container.firstChild).toBeNull();
  });
});
