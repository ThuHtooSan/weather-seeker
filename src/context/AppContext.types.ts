import { Action, State } from '../state/reducer.types';

export type AppContextProviderProps = {
  children: React.ReactNode;
};

export type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
