import React, { FC, useState, useContext } from 'react';
import s from './addTask.module.css';
import { IBord, ITask } from '../../../../types/bords';
import { nanoid } from '@reduxjs/toolkit';

interface IAddTaskProps {
  id: string;
}

const AddTask: FC<IAddTaskProps> = ({ id }) => {
  const [isVisibArea, setVisibArea] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      {isVisibArea ? (
        <div>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className={s.area}
            placeholder="Ввести заголовок для этой карточки"
          />
          <div className={s.buttons}>
            <button onClick={()=>{}} className={s.button}>
              Добавить карточку
            </button>
            <span onClick={() => setVisibArea((prev) => !prev)}>&#10060;</span>
          </div>
        </div>
      ) : (
        <p onClick={() => setVisibArea((prev) => !prev)} className={s.text}>
          + добавить карточку
        </p>
      )}
    </>
  );
};

export default AddTask;
