import { useState } from 'react';
import s from './itemInfo.module.css';
import { IBord, ITask } from '../../../types/bords';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../state/hooks';
import { changeTaskTitleAction, deleteTaskAction } from '../../../state/ducks/bords/reducers';
import { bordsActions } from '../../../state/ducks/bords';
import { activeTaskActions } from '../../../state/ducks/activeTask';

interface ITitleTaskInput {
  taskTitle: string;
}

interface IItemInfo {
  name: string;
  bord: IBord;
  task: ITask;
}

const ItemInfo = ({ name, bord, task }:IItemInfo) => {
  const dispatch = useAppDispatch()
  const [isVisibleInput, setVisibleInput] = useState(false);

  const {
    register,
    handleSubmit
  } = useForm<ITitleTaskInput>({
    defaultValues: {
      taskTitle:task.title,
    },
  });

  const onChangeTaskTitle = (data:ITitleTaskInput)=>{
    const currentTask:changeTaskTitleAction = {idBord:bord.id, idTask:task.id, titleTask:data.taskTitle}
    dispatch(bordsActions.changeTaskTitle(currentTask))
    setVisibleInput(false)
  }

  const deleteTask = ()=>{
    const currentTask:deleteTaskAction = {idBord:bord.id, idTask:task.id}
    dispatch(activeTaskActions.closeTask())
    dispatch(bordsActions.deleteTask(currentTask))

  }

  return (
    <div className={s.info}>
      <div className={s.title}>
        <p className={s.name}>{name}</p>
        <h3 className={s.title_card}>{bord.titleBord}</h3>
      </div>
      {isVisibleInput ? (
        <form onSubmit={handleSubmit(onChangeTaskTitle)}>
          <input
            className={s.input}
            {...register('taskTitle', { required: true, minLength: 2 })}
          />
          <button type='submit' className={s.save}>
            &#10004;
          </button>
        </form>
      ) : (
        <div className={s.task}>
          <h2 onClick={() => setVisibleInput((prev) => !prev)}>
            {task.title}
          </h2>
          <span onClick={deleteTask} className={s.button}>
            &#128465;
          </span>
        </div>
      )}
    </div>
  );
};

export default ItemInfo;
