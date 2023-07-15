import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserNameState {
  userName: string;
}

const initialState: UserNameState = {
  userName: '',
};

export const userNameSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    saveUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { saveUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
