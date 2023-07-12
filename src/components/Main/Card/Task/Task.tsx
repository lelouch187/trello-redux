import React,{FC} from 'react'
import { ITask } from '../../../../types/card'
import dialogsSvg from '../../../../assets/images/dialogs.svg'
import s from './task.module.css'
import { nanoid } from 'nanoid';

interface ITaskProps {
   tasks:ITask[]
}

const Task:FC<ITaskProps> = ({tasks}) => {
  return (
    <>
      {tasks.map(task=>{
        return <div key={nanoid()}
        className={s.task}>
          <p>{task.title}</p>
          {/* <p>{dialogsSvg}</p> */}
          </div>
      })}
    </>
  )
}

export default Task