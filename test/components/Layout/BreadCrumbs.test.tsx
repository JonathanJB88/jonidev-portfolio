import { render, screen, fireEvent } from '@testing-library/react';
import { BreadCrumbs } from '@/components';
import { useBreadcrumbNavigation } from '../../../src/hooks/useBreadcrumbNavigation';
import { BreadCrumb } from '@/interfaces';

jest.mock('../../../src/hooks/useBreadcrumbNavigation');

const mockVisitedItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Post',
    href: '/blog/post',
  },
];

const mockOnBreadcrumbClick = jest.fn();

const mockUseBreadcrumbNavigation = useBreadcrumbNavigation as jest.MockedFunction<
  () => {
    visitedItems: BreadCrumb[];
    onBreadcrumbClick: (index: number) => void;
  }
>;

describe('BreadCrumbs', () => {
  beforeEach(() => {
    mockUseBreadcrumbNavigation.mockReturnValue({
      visitedItems: mockVisitedItems,
      onBreadcrumbClick: mockOnBreadcrumbClick,
    });
    render(<BreadCrumbs />);
  });

  it('should render the breadcrumbs items', () => {
    const homeBreadcrumb = screen.getByText('Home');
    const blogBreadcrumb = screen.getByText('Blog');

    expect(homeBreadcrumb).toBeInTheDocument();
    expect(blogBreadcrumb).toBeInTheDocument();
  });

  it('should render visitedItems', () => {
    mockVisitedItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('should call onBreadcrumbClick when a breadcrumb item is clicked', () => {
    fireEvent.click(screen.getByText('Home'));

    expect(mockOnBreadcrumbClick).toHaveBeenCalledTimes(1);
    expect(mockOnBreadcrumbClick).toHaveBeenCalledWith(0);
  });
});
