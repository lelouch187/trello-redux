import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IActiveTask } from '../../../types/bords';

export interface activeTaskState extends IActiveTask {}

interface IopenTask {
  idBord:string;
  idTask:string;
}

const initialState: activeTaskState = {
  isVisible: false,
  indexBord: null,
  indexTask: null,
};

export const activeTaskSlice = createSlice({
  name: 'activeTask',
  initialState,
  reducers: {
  openTask:(state, action:PayloadAction<IopenTask>)=>{
    state.isVisible = true;
    state.indexBord = action.payload.idBord
    state.indexTask = action.payload.idTask
  },
  closeTask:(state)=>{
    state.isVisible = false;
  }
  },
});

export default activeTaskSlice.reducer;
