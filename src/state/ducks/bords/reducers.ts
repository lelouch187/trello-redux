import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBord } from '../../../types/bords';

export interface BordsState {
  bords: IBord[];
}

interface saveBordNameAction {
  id: string;
  BordTitle: string;
}

interface addTaskAction {
  id: string;
  TaskTitle: string;
}

const initialState: BordsState = {
  bords: [
    {
      id: nanoid(),
      titleBord: 'TODO',
      tasks: [],
    },
    {
      id: nanoid(),
      titleBord: 'In Progress',
      tasks: [],
    },
    {
      id: nanoid(),
      titleBord: 'Testing',
      tasks: [],
    },
    {
      id: nanoid(),
      titleBord: 'Done',
      tasks: [],
    },
  ],
};

export const bordsSlice = createSlice({
  name: 'bords',
  initialState,
  reducers: {
    saveBordName: (state, action: PayloadAction<saveBordNameAction>) => {
      state.bords.map((bord) => {
        if (bord.id === action.payload.id) {
          return (bord.titleBord = action.payload.BordTitle);
        }
        return bord;
      });
    },
    addTask: (state, action: PayloadAction<addTaskAction>) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.TaskTitle,
        description: '',
        comments: [],
      };
      state.bords.map((bord) => {
        if (bord.id === action.payload.id) {
          return bord.tasks.push(newTask);
        }
        return bord;
      });
    },
  },
});

export default bordsSlice.reducer;
