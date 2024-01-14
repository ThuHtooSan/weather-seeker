import { createContext, useReducer } from 'react';
import { AppContextType, AppContextProviderProps } from './AppContext.types';
import { initialState, reducer } from '../state/reducer';

const AppContext = createContext({} as AppContextType);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
