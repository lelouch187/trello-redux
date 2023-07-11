import React, { FC } from 'react'
import s from './main.module.css'
import Card from '../Card/Card'

const Main:FC = () => {
  return (
    <main className={s.main}>
     <Card/>
    </main>
  )
}

export default Main