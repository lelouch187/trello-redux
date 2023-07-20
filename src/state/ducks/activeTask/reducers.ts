import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActiveTaskInterface } from '../../../types/bords';

export interface ActiveTaskState extends ActiveTaskInterface {}

interface OpenTaskInterface {
  idBord:string;
  idTask:string;
}

const initialState: ActiveTaskState = {
  isVisible: false,
  indexBord: null,
  indexTask: null,
};

export const activeTaskSlice = createSlice({
  name: 'activeTask',
  initialState,
  reducers: {
  openTask:(state, action:PayloadAction<OpenTaskInterface>)=>{
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
