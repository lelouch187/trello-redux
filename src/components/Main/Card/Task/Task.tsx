import React, { FC, useContext } from 'react';
import { ITask } from '../../../../types/card';
import dialogsSvg from '../../../../assets/images/dialogs.svg';
import s from './task.module.css';
import { nanoid } from 'nanoid';
import { Actions, AppContext } from '../../../../AppContext';

interface ITaskProps {
  tasks: ITask[];
  idCard:string;
}

const Task: FC<ITaskProps> = ({ tasks,idCard }) => {
  const {dispatch} = useContext(AppContext)
  const showTask=(idTask:string)=>{
    const activeTask = {
      isVisible:true,
      indexCard:idCard,
      indexTask:idTask,
    }
    dispatch({type:Actions.showTask, payload:activeTask})
  }

  return (
    <>
      {tasks.map((task) => {
        return (
          <div onClick={()=>showTask(task.id)}
          key={nanoid()} className={s.task}>
            <p className={s.title}>{task.title}</p>
            {task.comments.length>0 && (
              <>
              <p className={s.dialogImg}>
                {/* <image className={s.img} src={dialogsSvg} alt="image" /> */}
              </p>
              <span>{task.comments.length}</span>
            </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Task;
