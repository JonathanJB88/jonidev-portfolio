import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from '@/components/Layout/Button';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    label: 'Test Button',
  };

  it('should render the button with the provided label', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('should apply the provided className', () => {
    const customClassName = 'custom-class';
    const { getByText } = render(<Button {...defaultProps} className={customClassName} />);
    expect(getByText(defaultProps.label)).toHaveClass(customClassName);
  });

  it('should apply the default className if none is provided', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText(defaultProps.label)).toHaveClass('px-3 py-1');
  });

  it('should trigger onClick callback when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClickMock} />);
    fireEvent.click(getByText(defaultProps.label));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not trigger onClick callback if not provided', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button {...defaultProps} />);
    fireEvent.click(getByText(defaultProps.label));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
