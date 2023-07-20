import { useState } from 'react';
import s from './itemInfo.module.scss';
import { BordInterface, TaskInterface } from '../../../types/bords';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../state/hooks';
import { ChangeTaskTitleInterface, DeleteTaskInterface } from '../../../state/ducks/bords/reducers';
import { bordsActions } from '../../../state/ducks/bords';
import { activeTaskActions } from '../../../state/ducks/activeTask';
import { CHECK_SYMBOL, TRASH_SYMBOL } from '../../../variables/icons';


interface TitleTaskInputInterface {
  taskTitle: string;
}

interface ItemInfoInterfaceProps {
  name: string;
  bord: BordInterface | undefined;
  task: TaskInterface | undefined;
}

const ItemInfo = ({ name, bord, task }: ItemInfoInterfaceProps) => {
  const dispatch = useAppDispatch();
  const [isVisibleInput, setVisibleInput] = useState(false);

  const { register, handleSubmit } = useForm<TitleTaskInputInterface>({
    defaultValues: {
      taskTitle: task?.title,
    },
  });

  const onChangeTaskTitle = (data: TitleTaskInputInterface) => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: ChangeTaskTitleInterface = {
        idBord: bord.id,
        idTask: task.id,
        titleTask: data.taskTitle,
      };
      dispatch(bordsActions.changeTaskTitle(currentTask));
      setVisibleInput(false);
    }
  };

  const deleteTask = () => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: DeleteTaskInterface = {
        idBord: bord.id,
        idTask: task.id,
      };
      dispatch(activeTaskActions.closeTask());
      dispatch(bordsActions.deleteTask(currentTask));
    }
  };

  return (
    <div className={s.info}>
      <div className={s.title}>
        <p className={s.name}>{name}</p>
        <h3 className={s.title_card}>{bord?.titleBord}</h3>
      </div>
      {isVisibleInput ? (
        <form onSubmit={handleSubmit(onChangeTaskTitle)}>
          <input className={s.input} {...register('taskTitle', { required: true, minLength: 2 })} />
          <button type="submit" className={s.save}>
            {CHECK_SYMBOL}
          </button>
        </form>
      ) : (
        <div className={s.task}>
          <h2 onClick={() => setVisibleInput((prev) => !prev)}>{task?.title}</h2>
          <span onClick={deleteTask} className={s.button}>
            {TRASH_SYMBOL}
          </span>
        </div>
      )}
    </div>
  );
};

export default ItemInfo;
