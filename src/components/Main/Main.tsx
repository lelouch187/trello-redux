import React, { FC, useContext } from 'react'
import s from './main.module.css'
import Card from './Card/Card'
import { AppContext } from '../../AppContext'
import { ICard } from '../../types/card'

const Main:FC = () => {
   const {state} = useContext(AppContext)
  return (
    <main className={s.main}>
     {state.cards.map((item:ICard, index:number)=>{
      return <Card index={index}
      key={index}
      titleCard={item.titleCard}
      />
     })}
    </main>
  )
}

export default Main