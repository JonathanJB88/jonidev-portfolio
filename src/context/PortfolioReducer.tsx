import { PortfolioState, Theme } from '@/context';
import { ISkill, IProject, IService } from '../interfaces/interfaces';

export type PortfolioAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'SET_TECH_SKILLS'; payload: ISkill[] }
  | { type: 'SET_SOFT_SKILLS'; payload: ISkill[] }
  | { type: 'SET_PROJECTS'; payload: IProject[] }
  | { type: 'SET_SERVICES'; payload: IService[] }
  | { type: 'SET_ABOUT'; payload: string };

export const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ABOUT':
      return { ...state, about: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_TECH_SKILLS':
      return { ...state, techSkills: action.payload };
    case 'SET_SOFT_SKILLS':
      return { ...state, softSkills: action.payload };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    case 'SET_SERVICES':
      return { ...state, services: action.payload };
    default:
      return state;
  }
};
