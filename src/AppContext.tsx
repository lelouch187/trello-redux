import React, { createContext, useReducer } from 'react';
import { IActiveTask, ICard } from './types/card';
import { nanoid } from 'nanoid';

export interface State {
  popup: {
    visible: boolean;
    name: string;
  };
  cards: ICard[];
  activeTask: IActiveTask;
}

export enum Actions {
  setName = 'setName',
  changeCard = 'changeCard',
  showTask = 'showTask',
  closeCard = 'closeCard',
  changeTask='changeTask'
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
      id: nanoid(),
      titleCard: 'TODO',
      tasks: [],
    },
    {
      id: nanoid(),
      titleCard: 'In Progress',
      tasks: [],
    },
    {
      id: nanoid(),
      titleCard: 'Testing',
      tasks: [],
    },
    {
      id: nanoid(),
      titleCard: 'Done',
      tasks: [],
    },
  ],
  activeTask: {
    isVisible: false,
    indexCard: null,
    indexTask: null,
  },
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.setName:
      return { ...state, popup: { ...state.popup, name: action.payload!, visible: false } };
    case Actions.changeCard:
      return { ...state, cards: action.payload! };
    case Actions.showTask:
      return { ...state, activeTask: action.payload };
    case Actions.closeCard:
      return { ...state, activeTask: initialValue.activeTask };
    case Actions.changeTask:
      return {
    ...state, cards: state.cards.map(card=>{
      if (card.id===action.payload.id) {
        return action.payload
      }
      return card
    })
      };
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
