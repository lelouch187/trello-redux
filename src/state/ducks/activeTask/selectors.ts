import { RootState } from "../../store";

export const selectisVisibleTask = (state: RootState) => state.activeTask.isVisible
export const selectActiveTask = (state: RootState) => state.activeTask