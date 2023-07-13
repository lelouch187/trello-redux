import React, { FC } from 'react';
import { ITask } from '../../../../types/card';
import dialogsSvg from '../../../../assets/images/dialogs.svg';
import s from './task.module.css';
import { nanoid } from 'nanoid';

interface ITaskProps {
  tasks: ITask[];
}

const Task: FC<ITaskProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={nanoid()} className={s.task}>
            <p className={s.title}>{task.title}</p>
            {task.comments.length>0 && (
              <>
              <p className={s.dialogImg}>
                <img className={s.img} src={dialogsSvg} alt="image" />
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
