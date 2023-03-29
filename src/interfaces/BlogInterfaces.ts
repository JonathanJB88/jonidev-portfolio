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
