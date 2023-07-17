import { bordsSlice } from './reducers';

export const {
  saveBordName,
  addTask,
  changeTaskTitle,
  deleteTask,
  changeDescriptionTask,
  deleteDescriptionTask,
  addCommentTask,
  deleteCommentTask,
  changeCommentTask
} = bordsSlice.actions;
