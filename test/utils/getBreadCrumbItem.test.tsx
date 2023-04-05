import { BreadCrumb } from '@/interfaces';
import { getBreadCrumbItem, pathMap } from '@/utils';

// Testing pathMap structure
describe('pathMap', () => {
  const pathKeys: string[] = ['/blog', '/contact', '/projects', '/journey', '/skills'];

  pathKeys.forEach((key) => {
    it(`should have "${key}" as key with a proper label and href`, () => {
      expect(pathMap[key]).toHaveProperty('label');
      expect(pathMap[key]).toHaveProperty('href', key);
    });
  });
});

// Testing getBreadCrumbItem
describe('getBreadCrumbItem', () => {
  it('should return null for an unknown path', () => {
    expect(getBreadCrumbItem('/unknown')).toBeNull();
  });

  it('should return a valid BreadCrumb for "/blog"', () => {
    const expectedBreadCrumb: BreadCrumb = { label: 'Blog', href: '/blog' };
    expect(getBreadCrumbItem('/blog')).toEqual(expectedBreadCrumb);
  });

  it('should return a valid BreadCrumb for "/blog/[slug]" with a postTitle', () => {
    const expectedBreadCrumb: BreadCrumb = {
      label: 'Example Post',
      href: '/blog/[slug]',
      query: { slug: 'Example Post' },
    };
    expect(getBreadCrumbItem('/blog/example-post', 'Example Post')).toEqual(expectedBreadCrumb);
  });

  it('should return null for "/blog/[slug]" without a postTitle', () => {
    expect(getBreadCrumbItem('/blog/example-post')).toBeNull();
  });

  it('should return a valid BreadCrumb for a known path other than "/blog"', () => {
    const knownPaths = ['/contact', '/projects', '/journey', '/skills'];

    knownPaths.forEach((path) => {
      const expectedBreadCrumb: BreadCrumb = { label: pathMap[path].label, href: path };
      expect(getBreadCrumbItem(path)).toEqual(expectedBreadCrumb);
    });
  });
});
