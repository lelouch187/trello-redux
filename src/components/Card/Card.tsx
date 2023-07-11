import React, { FC } from 'react'
import s from './card.module.css'

const Card:FC = () => {
  return (
    <div className={s.card}>
      <h4 className={s.title}>заголовок</h4>
      <p className={s.text}>+ добавить карточку</p>
    </div>
  )
}

export default Card