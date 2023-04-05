import { useRouter } from 'next/router';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { PortfolioProvider } from '@/context';
import { useBreadcrumbNavigation } from '@/hooks';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.MockedFunction<typeof useRouter>;

const BreadcrumbTester = () => {
  const { visitedItems, onBreadcrumbClick } = useBreadcrumbNavigation();
  return (
    <div>
      {visitedItems.map((item, index) => (
        <button key={item.href} onClick={() => onBreadcrumbClick(index)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

describe('useBreadcrumbNavigation hook', () => {
  beforeEach(() => {
    useRouterMock.mockReset();
  });

  it('updates breadcrumb navigation when navigating to a new page', () => {
    useRouterMock.mockReturnValue({ pathname: '/blog', query: {} } as any);

    const { getByText } = render(
      <PortfolioProvider>
        <BreadcrumbTester />
      </PortfolioProvider>
    );

    expect(getByText('Blog')).toBeInTheDocument();
  });

  it('updates breadcrumb navigation when navigating to a blog post', () => {
    useRouterMock.mockReturnValue({ pathname: '/blog/[slug]', query: { slug: 'test-post' } } as any);

    const { getByText } = render(
      <PortfolioProvider>
        <BreadcrumbTester />
      </PortfolioProvider>
    );

    expect(getByText('test-post')).toBeInTheDocument();
  });

  it('updates breadcrumb navigation when clicking on a breadcrumb item', () => {
    useRouterMock.mockReturnValue({ pathname: '/blog/[slug]', query: { slug: 'test-post' } } as any);

    const { getByText } = render(
      <PortfolioProvider>
        <BreadcrumbTester />
      </PortfolioProvider>
    );

    fireEvent.click(getByText('test-post'));
    waitFor(() => expect(getByText('Blog')).toBeInTheDocument());
  });
});
