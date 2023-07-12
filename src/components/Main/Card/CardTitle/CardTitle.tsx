import React, { FC, useContext, useEffect, useState } from 'react';
import { Actions, AppContext } from '../../../../AppContext';
import s from './cardTitle.module.css';
import { ICard } from '../../../../types/card';

interface ICardTitleProps {
  titleCard: string;
  index: number;
}

const CardTitle: FC<ICardTitleProps> = ({ titleCard, index }) => {
  const [value, setValue] = useState(titleCard);
  const { state, dispatch } = useContext(AppContext);
  const [isVisibleInput, setVisibleInput] = useState(false);


  const closeInput = () => {
    const cards= state.cards.map((card:ICard)=>{
      if (card.titleCard===titleCard) {
           return {...card, titleCard:value}
      }
      return card
   })
   dispatch({type:Actions.setCardName, payload:cards})
    setVisibleInput((prev) => !prev);
    localStorage.setItem('cardTitle', JSON.stringify(cards));
  };
  useEffect(() => {
    const storageValue = localStorage.getItem('cardTitle');
    if (storageValue) {
      const value = JSON.parse(storageValue);
      dispatch({type:Actions.setCardName, payload:value});
      setValue(value[index].titleCard);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {isVisibleInput ? (
        <div>
          <input className={s.input}
            value={value}
            onChange={(e) => setValue(() => e.target.value)}
          />
          <span onClick={closeInput}>&#10004;</span>
        </div>
      ) : (
        <h4 onClick={() => setVisibleInput((prev) => !prev)} className={s.title}>
          {value || 'Поле не может быть пустым'}
        </h4>
      )}
    </>
  );
};

export default CardTitle;
