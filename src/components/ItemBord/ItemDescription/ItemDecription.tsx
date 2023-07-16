import React, { FC, useState, useContext } from 'react';
import s from './itemDescription.module.css';
import { IBord, ITask } from '../../../types/bords';


interface IItemDecription {
  bord: IBord;
  task: ITask;
}

const ItemDecription: FC<IItemDecription> = ({ bord, task }) => {
 
  const [value, setValue] = useState(task.description);

  return (
    <div className={s.description}>
      <h2 className={s.title}>Описание</h2>
      {task.description ? (
        <p>
          {task.description}
          <span onClick={()=>{}} className={s.change}>
            &#9998;
          </span>
          <span onClick={()=>{}} className={s.delete}>
            &#128465;
          </span>
        </p>
      ) : (
        <div className={s.input}>
          <textarea
            onChange={(e) => setValue(() => e.target.value)}
            value={value}
          />
          <button onClick={()=>{}}>Добавить описание</button>
        </div>
      )}
    </div>
  );
};

export default ItemDecription;
