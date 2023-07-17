import { useState } from 'react';
import s from './addTask.module.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../state/hooks';
import { addTask } from '../../../../state/ducks/bords/actions';

interface IAddTaskProps {
  idBord: string;
}

interface ITaskArea {
  taskText:string;
} 

const AddTask = ({ idBord }:IAddTaskProps) => {
  const [isVisibArea, setVisibArea] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
  } = useForm<ITaskArea>();
  const disptach = useAppDispatch()

  const addNewTask = (data:ITaskArea) => {
    disptach(addTask({id:idBord, TaskTitle:data.taskText}))
    setVisibArea(false)
    reset()
  }

  return (
    <>
      {isVisibArea ? (
        <form onSubmit={handleSubmit(addNewTask)}>
          <textarea
            {...register('taskText', { required: true, minLength: 2 })}
            className={s.area}
            placeholder="Ввести заголовок для этой карточки"
          />
          <div className={s.buttons}>
            <button type='submit' className={s.button}>
              Добавить карточку
            </button>
            <span onClick={() => setVisibArea((prev) => !prev)}>&#10060;</span>
          </div>
        </form>
      ) : (
        <p onClick={() => setVisibArea((prev) => !prev)} className={s.text}>
          + добавить карточку
        </p>
      )}
    </>
  );
};

export default AddTask;
