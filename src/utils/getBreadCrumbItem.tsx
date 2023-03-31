import { BreadCrumb } from '@/interfaces';

export const getBreadCrumbItem = (pathname: string, postTitle?: string): BreadCrumb | null => {
  if (pathname.startsWith('/blog')) {
    if (pathname === '/blog') {
      return { label: 'Blog', href: '/blog' };
    }
    if (postTitle) {
      return { label: postTitle, href: '/blog/[slug]', query: { slug: postTitle } };
    }
  } else if (pathname === '/about') {
    return { label: 'About', href: pathname };
  } else if (pathname === '/contact') {
    return { label: 'Contact', href: pathname };
  } else if (pathname === '/projects') {
    return { label: 'Projects', href: pathname };
  } else if (pathname === '/journey') {
    return { label: 'Journey', href: pathname };
  } else if (pathname === '/skills') {
    return { label: 'Skills', href: pathname };
  }

  return null;
};
