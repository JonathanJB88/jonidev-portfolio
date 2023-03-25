import { IconType } from 'react-icons';

export interface IService {
  title: string;
  about: string;
}

export interface ISkill {
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | 'React'
  | 'React Native'
  | 'Next'
  | 'CSS3'
  | 'Tailwind CSS'
  | 'ChakraUI'
  | 'JavaScript'
  | 'TypeScript';

export interface ISocial {
  id: number;
  Icon: IconType;
  url: string;
}
