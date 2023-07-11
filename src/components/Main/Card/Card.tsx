import React, { FC, useEffect, useContext, useState } from 'react'
import s from './card.module.css'
import { ICard } from '../../../types/card'
import { AppContext } from '../../../AppContext'

interface ICardProprs extends ICard {
  index:number;
}

const Card:FC<ICardProprs> = ({titleCard, index}) => {
  const [isVisibleInput, setVisibleInput] = useState(false)
  const [value, setValue] = useState(titleCard)
  const {state, dispatch} = useContext(AppContext)
  const cards = state.cards
  const closeInput = ()=>{
    dispatch([...cards,cards[index].titleCard=value])
    setVisibleInput(prev=>!prev)
    localStorage.setItem("cardTitle",JSON.stringify(cards)) 
  }
  useEffect(() => {
    const storageValue = localStorage.getItem("cardTitle")

    if (storageValue) {
      const value=JSON.parse(storageValue)
      dispatch([...cards,cards[index].titleCard=value[index].titleCard]) 
      setValue(value[index].titleCard)
    }
  }, [])
  
  return (
    <div className={s.card}>
      {!isVisibleInput&&<h4 onClick={()=>setVisibleInput(prev=>!prev)}
      className={s.title}>{value||'Поле не может быть пустым'}</h4>}
      {isVisibleInput&&<div>
      <input className={s.input}
      value={value} onChange={(e)=>setValue(()=>e.target.value)} />
      <span onClick={closeInput}>&#10004;</span>
      </div>}
      <p className={s.text}>+ добавить карточку</p>
    </div>
  )
}

export default Card