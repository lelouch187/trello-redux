import React,{FC} from 'react'
import { IComments } from '../../../types/card'
import s from './itemComments.module.css'

interface IItemComments{
   comments:IComments[];
   name:string;
}

const ItemComments:FC<IItemComments> = ({comments, name}) => {
  return (
   <div>
   <h2 className={s.title}>Комментарии</h2>
   {comments.length>0&&
   comments.map(comment=>{
      return <div key={comment.id}>
         <p>{name}</p>
         <p>{comment.value}</p>
         </div>
   })
}
   <div className={s.add_comment}>
      <input className={s.input} />
      <button className={s.button}>Добавить комментарии</button>
   </div>
  </div>
  )
}

export default ItemComments