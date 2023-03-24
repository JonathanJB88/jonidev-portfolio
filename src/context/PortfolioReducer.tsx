import { PortfolioState, Theme } from '@/context';

export type PortfolioAction = { type: 'SET_THEME'; payload: Theme };

export const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
