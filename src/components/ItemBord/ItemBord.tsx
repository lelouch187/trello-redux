import React, { FC, useContext, useEffect } from 'react';
import s from './itemBord.module.css';
import { IBord, ITask } from '../../types/bords';
import ItemInfo from './ItemInfo/ItemInfo';
import ItemDecription from './ItemDescription/ItemDecription';
import ItemComments from './ItemComments/ItemComments';

const ItemBord: FC = () => {
  //const { state, dispatch } = useContext(AppContext);
  
  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup}>
        {/* <ItemInfo
          closeCard={closeCard}
          task={currentTask}
          card={currentCard}
          name={state.popup.name}
        />
        <ItemDecription task={currentTask} card={currentCard} />
        <ItemComments
          task={currentTask}
          card={currentCard}
          name={state.popup.name}
        />
        <span onClick={closeCard} className={s.close}>
          &#10060;
        </span> */}
      </div>
    </div>
  );
};

export default ItemBord;
