import { render, screen } from '@testing-library/react';
import { OptionGroup } from '@/components';

const label = 'Category';
const label2 = 'Tag';

const options = ['JavaScript', 'React'];
const options2 = ['#softskills', '#techskills', '#career'];

describe('OptionGroup', () => {
  beforeEach(() => {
    render(<OptionGroup label={label} options={options} />);
  });

  it('should render an optgroup with the correct label', () => {
    const optgroupElement = screen.getByRole('group', { name: /Categories/i });
    expect(optgroupElement).toBeInTheDocument();
    expect(optgroupElement).toHaveAttribute('label', 'Categories');

    render(<OptionGroup label={label2} options={options2} />);
    const optgroupElement2 = screen.getByRole('group', { name: /Tags/i });
    expect(optgroupElement2).toBeInTheDocument();
    expect(optgroupElement2).toHaveAttribute('label', 'Tags');
  });

  it('should render options with the correct values and texts', () => {
    options.forEach((option) => {
      const optionElement = screen.getByRole('option', { name: option });
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('value', `${label.toLowerCase()}:${option}`);
      expect(optionElement).toHaveTextContent(option);
    });
  });
});
