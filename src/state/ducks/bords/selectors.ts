import { RootState } from "../../store";

export const selectBords = (state: RootState) => state.bords.bords
export const selectCard = (state: RootState) => (id:string)=>state.bords.bords.filter(card=>card.id===id)