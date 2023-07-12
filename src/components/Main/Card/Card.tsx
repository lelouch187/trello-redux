import React, { FC } from 'react'
import s from './card.module.css'
import { ICard } from '../../../types/card'
import CardTitle from './CardTitle/CardTitle';
import AddTask from './AddTask/AddTask';
import Task from './Task/Task';


interface ICardProprs extends ICard {
  index:number;
}

const Card:FC<ICardProprs> = ({titleCard, index, tasks}) => {
  
  return (
    <div className={s.card}>
      <CardTitle titleCard={titleCard} index={index} />
      {tasks&&
        <Task tasks={tasks} />
      }      
      <AddTask titleCard={titleCard} />
    </div>
  )
}

export default Card