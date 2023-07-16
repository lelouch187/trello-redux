import { combineReducers } from '@reduxjs/toolkit';
import { userName, bords } from './ducks';

export const rootReducer = combineReducers({
  userName,
  bords
});
