import { client, getAllPosts, getPostBySlug, urlForImage, getUrlWithBlurData } from '@/lib/Sanity';
import { Post } from '@/interfaces';

jest.spyOn(client, 'fetch');

const samplePost: Post = {
  _id: 'test-id',
  title: 'Test Post',
  slug: 'test-slug',
  content: [
    {
      _key: 'contentKey1',
      _type: 'block',
      children: [
        {
          _key: 'childKey1',
          _type: 'span',
          marks: [],
          text: 'Sample text',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  excerpt: 'Test post excerpt',
  coverImage: 'https://example.com/test-image.jpg',
  date: '2023-04-05',
  author: {
    name: 'Test Author',
    picture: 'https://example.com/test-author.jpg',
  },
  categories: ['Category1', 'Category2'],
  tags: ['Tag1', 'Tag2'],
};

const samplePosts: Post[] = [
  samplePost,
  {
    ...samplePost,
    _id: 'test-id-2',
    title: 'Test Post 2',
    slug: 'test-slug-2',
  },
];

describe('Sanity API functions', () => {
  beforeEach(() => {
    (client.fetch as jest.Mock).mockReset();
  });

  it('should get all posts', async () => {
    (client.fetch as jest.Mock).mockResolvedValue(samplePosts);
    const result = await getAllPosts();
    expect(result).toEqual(samplePosts);
    expect(client.fetch).toHaveBeenCalledTimes(1);
  });

  it('should get a post by slug', async () => {
    (client.fetch as jest.Mock).mockResolvedValue(samplePost);
    const result = await getPostBySlug('test-slug');
    expect(result).toEqual(samplePost);
    expect(client.fetch).toHaveBeenCalledTimes(1);
  });
});

describe('Sanity image functions', () => {
  const imageUrl = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg'; // Sanity asset reference

  it('should generate a URL with auto format and max fit', () => {
    const result = urlForImage(imageUrl);
    const expectedOptions = {
      auto: 'format',
      baseUrl: 'https://cdn.sanity.io',
      dataset: 'production',
      fit: 'max',
      projectId: 'vqggrqao',
      source: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
    };
    expect(result.options).toEqual(expectedOptions);
  });

  it('should generate a URL with blur data', () => {
    const result = getUrlWithBlurData(imageUrl);
    const expectedUrl =
      'https://cdn.sanity.io/images/vqggrqao/production/Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg?rect=0,500,2000,2000&w=20&h=20&fit=max&auto=format';
    expect(result).toBe(expectedUrl);
  });
});
