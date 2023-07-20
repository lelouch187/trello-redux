import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BordInterface } from '../../../types/bords';

export interface BordsState {
  bords: BordInterface[];
}

interface SaveBordNameInterface {
  id: string;
  BordTitle: string;
}

interface NewTaskInterface {
  id: string;
  TaskTitle: string;
}

export interface DeleteTaskInterface {
  idBord: string;
  idTask: string;
}

export interface ChangeDescriptionInterface extends DeleteTaskInterface {
  descriptionTask: string;
}

export interface ChangeTaskTitleInterface extends DeleteTaskInterface {
  titleTask: string;
}
export interface AddCommentTaskInterface extends DeleteTaskInterface {
  commentTask: string;
}
export interface DeleteCommentTaskInterface extends DeleteTaskInterface {
  id: string;
}
export interface ChangeCommentTaskInterface extends DeleteCommentTaskInterface {
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
    saveBordName: (state, action: PayloadAction<SaveBordNameInterface>) => {
      state.bords.map((bord) => {
        if (bord.id === action.payload.id) {
          return (bord.titleBord = action.payload.BordTitle);
        }
        return bord;
      });
    },
    addTask: (state, action: PayloadAction<NewTaskInterface>) => {
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
    changeTaskTitle: (state, action: PayloadAction<ChangeTaskTitleInterface>) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.title = action.payload.titleTask;
      }
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskInterface>) => {
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
      action: PayloadAction<ChangeDescriptionInterface>,
    ) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.description = action.payload.descriptionTask;
      }
    },
    deleteDescriptionTask: (state, action: PayloadAction<DeleteTaskInterface>) => {
      const tasks = state.bords.find(
        (bord) => bord.id === action.payload.idBord,
      )?.tasks;
      const task = tasks?.find((task) => task.id === action.payload.idTask);
      if (task !== undefined) {
        task.description = '';
      }
    },
    addCommentTask: (state, action: PayloadAction<AddCommentTaskInterface>) => {
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
      action: PayloadAction<DeleteCommentTaskInterface>,
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
      action: PayloadAction<ChangeCommentTaskInterface>,
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
