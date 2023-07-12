import React, { createContext, useReducer } from 'react';
import { ICard } from './types/card';

export interface State {
  popup: {
    visible: boolean;
    name: string;
  };
  cards: ICard[];
}

export enum Actions {
  setName = 'setName',
  setCardName = 'setCardName',
  addTask='addTask'
}

interface Action {
  type: Actions;
  payload?: any;
}

const initialValue: State = {
  popup: {
    visible: true,
    name: '',
  },
  cards: [
    {
      titleCard: 'TODO',
      tasks: [],
    },
    {
      titleCard: 'In Progress',
      tasks: [],
    },
    {
      titleCard: 'Testing',
      tasks: [],
    },
    {
      titleCard: 'Done',
      tasks: [],
    },
  ],
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.setName:
      return { ...state, popup: { ...state.popup, name: action.payload!, visible: false } };
    case Actions.setCardName:
      return { ...state, cards: action.payload! };
      case Actions.addTask:
       return {...state, cards: action.payload }
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
