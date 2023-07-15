import { configureStore } from '@reduxjs/toolkit';
import * as reducers from "./ducks";

export const store = configureStore({
  reducer: {
    userName:reducers.userName
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch