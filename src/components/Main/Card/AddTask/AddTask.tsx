import React, { FC, useState, useContext, useEffect } from 'react';
import s from './addTask.module.css';
import { Actions, AppContext } from '../../../../AppContext';
import { ICard, ITask } from '../../../../types/card';

interface IAddTaskProps{
   index:number;
}

const AddTask: FC<IAddTaskProps> = ({index}) => {
  const [isVisibArea, setVisibArea] = useState(false);
  const [value, setValue] = useState('');
  const {state ,dispatch} = useContext(AppContext)
  const addNewTask = ()=>{
   const task:ITask = {
      title:value,
      description:'',
      comments: [],
   }
   const cards = state.cards.map((card:ICard, i:number)=>{
      if (i===index) {
           return {...card, tasks:[...card.tasks, task]}
      }
      return card
   })
   dispatch({type:Actions.addTask, payload:cards})
   setValue('')
   setVisibArea(prev=>!prev)
   localStorage.setItem('addTask', JSON.stringify(cards));
  }
  

useEffect(() => {
  const storageValue = localStorage.getItem('addTask');
  if (storageValue) {
    const value = JSON.parse(storageValue);
    dispatch({type:Actions.addTask, payload:value});
  }
  //eslint-disable-next-line
}, []);


  return <>{isVisibArea ? 
   <div>
      <textarea onChange={(e)=>setValue(e.target.value)}
      value={value}
      className={s.area}
      placeholder='Ввести заголовок для этой карточки' />
      <div className={s.buttons}>
         <button onClick={addNewTask}
         className={s.button}>Добавить карточку</button>
         <span onClick={()=>setVisibArea(prev=>!prev)}>&#10060;</span>
      </div>
   </div>
  : <p onClick={()=>setVisibArea(prev=>!prev)}
  className={s.text}>+ добавить карточку</p>}</>;
};

export default AddTask;
