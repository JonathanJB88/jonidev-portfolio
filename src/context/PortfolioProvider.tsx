import { useReducer } from 'react';
import { useTheme } from 'next-themes';

import { Theme, PortfolioContext, portfolioReducer } from '@/context';
import { ISkill, IProject, IService } from '../interfaces';

export interface PortfolioState {
  isLoading: boolean;
  theme: Theme;
  about: string;
  techSkills: ISkill[];
  softSkills: ISkill[];
  projects: IProject[];
  services: IService[];
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const INIT_STATE: PortfolioState = {
  isLoading: false,
  theme: 'dark',
  about: '',
  techSkills: [],
  softSkills: [],
  projects: [],
  services: [],
};

export const PortfolioProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(portfolioReducer, INIT_STATE);
  const { setTheme: setNextTheme } = useTheme();

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setTheme = (theme: Theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
    setNextTheme(theme);
  };

  const setAbout = (about: string) => {
    dispatch({ type: 'SET_ABOUT', payload: about });
  };

  const setTechSkills = (techSkills: ISkill[]) => {
    dispatch({ type: 'SET_TECH_SKILLS', payload: techSkills });
  };

  const setSoftSkills = (softSkills: ISkill[]) => {
    dispatch({ type: 'SET_SOFT_SKILLS', payload: softSkills });
  };

  const setProjects = (projects: IProject[]) => {
    dispatch({ type: 'SET_PROJECTS', payload: projects });
  };

  const setServices = (services: IService[]) => {
    dispatch({ type: 'SET_SERVICES', payload: services });
  };

  const value = {
    ...state,
    isLoading: state.isLoading,
    theme: state.theme,
    techSkills: state.techSkills,
    softSkills: state.softSkills,
    projects: state.projects,
    services: state.services,
    setLoading,
    setTheme,
    setAbout,
    setTechSkills,
    setSoftSkills,
    setProjects,
    setServices,
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
