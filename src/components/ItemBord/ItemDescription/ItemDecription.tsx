import s from './itemDescription.module.scss';
import { IBord, ITask } from '../../../types/bords';
import { useForm } from 'react-hook-form';
import {
  IChangeDescription,
  IDeleteTask,
} from '../../../state/ducks/bords/reducers';
import { useAppDispatch } from '../../../state/hooks';
import { bordsActions } from '../../../state/ducks/bords';
import { pen, trash } from '../../../variables';

interface DescriptionInput {
  descriptionTask: string;
}

interface IItemDecription {
  bord: IBord | undefined;
  task: ITask | undefined;
}

const ItemDecription = ({ bord, task }: IItemDecription) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<DescriptionInput>({
    defaultValues: {
      descriptionTask: task?.description,
    },
  });

  const addDescription = (data: DescriptionInput) => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: IChangeDescription = {
        idBord: bord.id,
        idTask: task.id,
        descriptionTask: data.descriptionTask,
      };
      dispatch(bordsActions.changeDescriptionTask(currentTask));
    }
  };

  const changeDescription = () => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: IDeleteTask = {
        idBord: bord.id,
        idTask: task.id,
      };
      dispatch(bordsActions.deleteDescriptionTask(currentTask));
    }
  };

  const deleteDescription = () => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: IDeleteTask = {
        idBord: bord.id,
        idTask: task.id,
      };
      dispatch(bordsActions.deleteDescriptionTask(currentTask));
      reset();
    }
  };

  return (
    <div className={s.description}>
      <h2 className={s.title}>Описание</h2>
      {task?.description ? (
        <p>
          {task.description}
          <span onClick={changeDescription} className={s.change}>
            {pen}
          </span>
          <span onClick={deleteDescription} className={s.delete}>
            {trash}
          </span>
        </p>
      ) : (
        <form onSubmit={handleSubmit(addDescription)} className={s.input}>
          <textarea
            {...register('descriptionTask', { required: true, minLength: 2 })}
          />
          <button type="submit">Добавить описание</button>
        </form>
      )}
    </div>
  );
};

export default ItemDecription;
