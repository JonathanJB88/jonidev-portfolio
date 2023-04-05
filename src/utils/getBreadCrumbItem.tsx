import { BreadCrumb } from '@/interfaces';

export interface PathMap {
  [key: string]: BreadCrumb;
}

export const pathMap: PathMap = {
  '/blog': {
    label: 'Blog',
    href: '/blog',
  },
  '/contact': {
    label: 'Contact',
    href: '/contact',
  },
  '/projects': {
    label: 'Projects',
    href: '/projects',
  },
  '/journey': {
    label: 'Journey',
    href: '/journey',
  },
  '/skills': {
    label: 'Skills',
    href: '/skills',
  },
};

export const getBreadCrumbItem = (pathname: string, postTitle?: string): BreadCrumb | null => {
  if (pathname.startsWith('/blog') && pathname !== '/blog') {
    if (postTitle) {
      return { label: postTitle, href: '/blog/[slug]', query: { slug: postTitle } };
    }
  } else {
    const item = pathMap[pathname];
    if (item) {
      return item;
    }
  }

  return null;
};
