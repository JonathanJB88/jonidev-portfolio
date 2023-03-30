export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: Content[];
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: string[];
  tags: string[];
}

export interface Author {
  name: string;
  picture: string;
}

interface Content {
  _key: string;
  _type: string;
  children: Children[];
  markDefs: string[];
  style: string;
}

interface Children {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface BlockProps {
  node: {
    _type: string;
    style: string;
    list?: string;
    listItem?: string;
  };
  children: React.ReactNode;
  isInline?: boolean;
  serializers: {
    types: {
      [key: string]: React.ComponentType<BlockProps>;
    };
  };
}

export interface ImageProps {
  node: {
    _type: string;
    asset: string;
    alt: string;
  };
}
