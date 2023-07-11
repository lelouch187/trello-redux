import React, { createContext, useReducer } from 'react';

export interface State {
  popup: {
    visible: boolean;
    name: string;
  };
}

export enum Actions {
  setName = 'setName',
}

interface Action {
  type: Actions;
  payload?: string;
}

const initialValue: State = {
  popup: {
    visible: true,
    name: '',
  },
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.setName:
      return { ...state, popup: { ...state.popup, name: action.payload!, visible: false } };
    default:
      return state;
  }
};

export const AppContext = createContext<any>(initialValue);

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
