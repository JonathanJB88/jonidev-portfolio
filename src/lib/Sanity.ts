import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

import { Post } from '@/interfaces';

export const client = createClient({
  projectId: 'vqggrqao',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = createImageUrlBuilder(client);

const postSelection = `
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  "coverImage": coverImage.asset->url,
  "categories": categories[]->title,
  "tags": tags[]->title,
  "author": author->{name, "picture": picture.asset->url},
  content
`;

export const urlForImage = (source: string) => imageBuilder.image(source).auto('format').fit('max');

export const getAllPosts = async (): Promise<Post[]> => {
  const data = await client.fetch<Post[]>(`*[_type == "post"]{${postSelection}} | order(date desc)`);
  return data;
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const data = await client.fetch<Post | null>(`*[_type == "post" && slug.current == $slug][0]{${postSelection}}`, {
    slug,
  });
  return data;
};

export const getUrlWithBlurData = (imageUrl: string) => {
  const blurDataURL = imageBuilder.image(imageUrl).width(20).height(20).auto('format').fit('max').url();
  return blurDataURL;
};
