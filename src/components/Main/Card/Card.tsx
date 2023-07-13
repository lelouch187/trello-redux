import React, { FC } from 'react'
import s from './card.module.css'
import { ICard } from '../../../types/card'
import CardTitle from './CardTitle/CardTitle';
import AddTask from './AddTask/AddTask';
import Task from './Task/Task';


interface ICardProprs  {
  card:ICard;
}

const Card:FC<ICardProprs> = ({card}) => {
  
  return (
    <div className={s.card}>
      <CardTitle titleCard={card.titleCard} />
      {card.tasks&&
        <Task tasks={card.tasks} idCard={card.id} />
      }      
      <AddTask id={card.id} />
    </div>
  )
}

export default Card