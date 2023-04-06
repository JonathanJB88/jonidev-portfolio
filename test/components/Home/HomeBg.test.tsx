import { render } from '@testing-library/react';
import { HomeBg } from '@/components';

describe('HomeBg component', () => {
  it('should render without crashing', () => {
    render(<HomeBg />);
  });
});
