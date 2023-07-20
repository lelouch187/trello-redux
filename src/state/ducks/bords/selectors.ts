import { BordInterface } from '../../../types/bords';
import { RootState } from '../../store';

export const selectBords = (state: RootState) => state.bords.bords;
export const selectBord = (id: string) => (state: RootState) =>
  state.bords.bords.find((bord: BordInterface) => bord.id === id);
