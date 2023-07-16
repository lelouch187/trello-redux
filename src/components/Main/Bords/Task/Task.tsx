import React, { FC, useContext } from 'react';
import { ITask } from '../../../../types/bords';
import s from './task.module.css';
import { nanoid } from '@reduxjs/toolkit';


interface ITaskProps {
  tasks: ITask[];
  idCard: string;
}

const Task: FC<ITaskProps> = ({ tasks, idCard }) => {
 

  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            onClick={()=>{}}
            key={nanoid()}
            className={s.task}>
            <p className={s.title}>{task.title}</p>
            {task.comments.length > 0 && (
              <>
                <p className={s.dialogImg}>&#9200;</p>
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
