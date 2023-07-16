import React, { FC, useContext, useState } from 'react';
import s from './itemInfo.module.css';
import { IBord, ITask } from '../../../types/bords';


interface IItemInfo {
  name: string;
  bord: IBord;
  task: ITask;
  closeCard: () => void;
}

const ItemInfo: FC<IItemInfo> = ({ name, bord, task, closeCard }) => {

  const [isVisibleInput, setVisibleInput] = useState(false);
  const [value, setValue] = useState(task.title);
  
  return (
    <div className={s.info}>
      <div className={s.title}>
        <p className={s.name}>{name}</p>
        <h3 className={s.title_card}>{'название'}</h3>
      </div>
      {isVisibleInput ? (
        <div>
          <input
            className={s.input}
            value={value}
            onChange={(e) => setValue(() => e.target.value)}
          />
          <span className={s.save} onClick={()=>{}}>
            &#10004;
          </span>
        </div>
      ) : (
        <div className={s.task}>
          <h2 onClick={() => setVisibleInput((prev) => !prev)}>
            {task.title || 'Поле не может быть пустым'}
          </h2>
          <span onClick={()=>{}} className={s.button}>
            &#128465;
          </span>
        </div>
      )}
    </div>
  );
};

export default ItemInfo;
