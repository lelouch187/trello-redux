import { useState } from 'react';
import s from './addTask.module.scss';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../state/hooks';
import { addTask } from '../../../../state/ducks/bords/actions';
import { redCross } from '../../../../variables';

interface IAddTaskProps {
  idBord: string;
}

interface ITaskArea {
  taskText: string;
}

const AddTask = ({ idBord }: IAddTaskProps) => {
  const [isVisibleArea, setVisibleArea] = useState(false);
  const { register, reset, handleSubmit } = useForm<ITaskArea>();
  const disptach = useAppDispatch();

  const addNewTask = (data: ITaskArea) => {
    disptach(addTask({ id: idBord, TaskTitle: data.taskText }));
    setVisibleArea(false);
    reset();
  };

  return (
    <>
      {isVisibleArea ? (
        <form onSubmit={handleSubmit(addNewTask)}>
          <textarea
            {...register('taskText', { required: true, minLength: 2 })}
            className={s.area}
            placeholder="Ввести заголовок для этой карточки"
          />
          <div className={s.buttons}>
            <button type="submit" className={s.button}>
              Добавить карточку
            </button>
            <span onClick={() => setVisibleArea((prev) => !prev)}>
              {redCross}
            </span>
          </div>
        </form>
      ) : (
        <p onClick={() => setVisibleArea((prev) => !prev)} className={s.text}>
          + добавить карточку
        </p>
      )}
    </>
  );
};

export default AddTask;
