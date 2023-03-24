import { createContext } from 'react';
import { ISkill, IProject, IService } from '../interfaces';

export type Theme = 'light' | 'dark';

export interface PortfolioContextProps {
  //State
  isLoading: boolean;
  theme: Theme;
  about: string;
  techSkills: ISkill[];
  softSkills: ISkill[];
  projects: IProject[];
  services: IService[];

  //Actions
  setLoading: (isLoading: boolean) => void;
  setTheme: (theme: Theme) => void;
  setAbout: (about: string) => void;
  setTechSkills: (techSkills: ISkill[]) => void;
  setSoftSkills: (softSkills: ISkill[]) => void;
  setProjects: (projects: IProject[]) => void;
  setServices: (services: IService[]) => void;
}

export const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);
