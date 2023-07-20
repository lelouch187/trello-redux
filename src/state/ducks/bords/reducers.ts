import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBord } from '../../../types/bords';

export interface BordsState {
  bords: IBord[];
}

interface ISaveBordName {
  id: string;
  BordTitle: string;
}

interface INewTask {
  id: string;
  TaskTitle: string;
}

export interface IDeleteTask {
  idBord: string;
  idTask: string;
}

export interface IChangeDescription extends IDeleteTask {
  descriptionTask: string;
}

export interface IChangeTaskTitle extends IDeleteTask {
  titleTask: string;
}
export interface IAddCommentTask extends IDeleteTask {
  commentTask: string;
}
export interface IDeleteCommentTask extends IDeleteTask {
  id: string;
}
export interface IChangeCommentTask extends IDeleteCommentTask {
  title: string;
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
    saveBordName: (state, action: PayloadAction<ISaveBordName>) => {
      state.bords.map((bord) => {
        if (bord.id === action.payload.id) {
          return (bord.titleBord = action.payload.BordTitle);
        }
        return bord;
      });
    },
    addTask: (state, action: PayloadAction<INewTask>) => {
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
    changeTaskTitle: (state, action: PayloadAction<IChangeTaskTitle>) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.title = action.payload.titleTask;
      }
    },
    deleteTask: (state, action: PayloadAction<IDeleteTask>) => {
      const bord = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      );
      if (bord !== undefined) {
        bord.tasks = bord.tasks.filter(
          (task) => task.id !== action.payload.idTask,
        );
      }
    },
    changeDescriptionTask: (
      state,
      action: PayloadAction<IChangeDescription>,
    ) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.description = action.payload.descriptionTask;
      }
    },
    deleteDescriptionTask: (state, action: PayloadAction<IDeleteTask>) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.description = '';
      }
    },
    addCommentTask: (state, action: PayloadAction<IAddCommentTask>) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.comments.push({ id: nanoid(), value: action.payload.commentTask });
      }
    },
    deleteCommentTask: (
      state,
      action: PayloadAction<IDeleteCommentTask>,
    ) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.comments = task!.comments.filter(
          (comment) => comment.id !== action.payload.id,
        );
      }
    },
    changeCommentTask: (
      state,
      action: PayloadAction<IChangeCommentTask>,
    ) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      if (tasks !== undefined) {
        const task = tasks.find((task) => task.id === action.payload.idTask);
        const comment = task?.comments.find(
          (comment) => comment.id === action.payload.id,
        );
        if (comment !== undefined) {
          comment.value = action.payload.title;
        }
      }
    },
  },
});

export default bordsSlice.reducer;
