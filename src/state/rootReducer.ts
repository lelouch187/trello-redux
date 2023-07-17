import { combineReducers } from '@reduxjs/toolkit';
import { userName, bords, activeTask } from './ducks';

export const rootReducer = combineReducers({
  userName,
  bords,
  activeTask
});
