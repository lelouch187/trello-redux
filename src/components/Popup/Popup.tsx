import React, { FC } from 'react'
import s from './popup.module.css'

const Popup:FC = () => {
  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup}>
         <p className={s.text}>Введите ваше имя</p>
         <input className={s.input} />
         <button className={s.button}>Сохранить</button>
      </div>
    </div>
  )
}

export default Popup