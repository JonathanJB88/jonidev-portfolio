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

export type Category = 'React' | 'React Native' | 'Next' | 'TailwindCSS' | 'ChakraUI' | 'JavaScript' | 'TypeScript';

export interface ISocial {
  id: number;
  Icon: IconType;
  url: string;
  ariaLabel: string;
}

export interface IJourney {
  year: string;
  title: string;
  description: string;
  category: 'experience' | 'education';
}

export interface DataResponse {
  about?: string | null;
  techSkills?: ISkill[] | null;
  softSkills?: ISkill[] | null;
  projects?: IProject[] | null;
  services?: IService[] | null;
  journey?: IJourney[] | null;
}

export interface MyPageProps {
  data: DataResponse;
}
