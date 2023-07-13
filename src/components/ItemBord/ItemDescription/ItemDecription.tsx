import React,{FC} from 'react'
import s from './itemDescription.module.css'

interface IItemDecription{
  description:string;
}

const ItemDecription:FC<IItemDecription> = ({description}) => {
  return (
   <div className={s.description}>
   <h2 className={s.title}>Описание</h2>
   {description?
   <p>{description}</p>
   :
   <p>Добавить описание</p>
   }
  </div>
  )
}

export default ItemDecription