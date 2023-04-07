import { render, screen } from '@testing-library/react';
import { Loading } from '@/components';

describe('Loading', () => {
  it('renders the loading spinner and text', () => {
    render(<Loading />);

    const svgElement = screen.getByLabelText('svg');
    expect(svgElement).toBeInTheDocument();

    const circleElement = screen.getByLabelText('circle');
    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveClass('opacity-25');

    const pathElement = screen.getByLabelText('path');
    expect(pathElement).toBeInTheDocument();

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
