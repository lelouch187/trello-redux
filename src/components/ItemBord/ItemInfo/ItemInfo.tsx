import React, { FC, useContext } from 'react';
import s from './itemInfo.module.css';
import { ICard, ITask } from '../../../types/card';
import { Actions, AppContext } from '../../../AppContext';

interface IItemInfo {
  name: string;
  card: ICard;
  task: ITask;
  closeCard:()=>void;
}

const ItemInfo: FC<IItemInfo> = ({ name, card, task,closeCard  }) => {
  const { state,dispatch} = useContext(AppContext)

  const deletecard=()=>{
    const newTasks = card.tasks.filter((item:ITask)=>item.id!==task.id)
    const newCard = {...card, tasks:newTasks}
    dispatch({type:Actions.deleteTask, payload:newCard})
    const cards = state.cards.map((card:ICard)=>{
      if (card.id===newCard.id) {
        return newCard
      }
      return card
    })
    localStorage.setItem('cards', JSON.stringify(cards));
    closeCard()
  }
  return (
    <div className={s.info}>
      <div className={s.title}>
        <p className={s.name}>{name}</p>
        <h3 className={s.title_card}>{card.titleCard}</h3>
      </div>
      <div className={s.task}>
      <h2 >{task.title}</h2>
      <span onClick={deletecard}
      className={s.button}>&#128465;</span>
      </div>
    </div>
  );
};

export default ItemInfo;
