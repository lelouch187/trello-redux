import s from './itemDescription.module.css';
import { IBord, ITask } from '../../../types/bords';
import { useForm } from 'react-hook-form';
import { changeDescriptionAction, deleteTaskAction } from '../../../state/ducks/bords/reducers';
import { useAppDispatch } from '../../../state/hooks';
import { bordsActions } from '../../../state/ducks/bords';

interface DescriptionInput {
  descriptionTask: string;
}

interface IItemDecription {
  bord: IBord;
  task: ITask;
}

const ItemDecription= ({ bord, task }:IItemDecription) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<DescriptionInput>({
    defaultValues: {
      descriptionTask: task.description,
    },
  });

  const addDescription = (data: DescriptionInput) => {
    const currentTask: changeDescriptionAction = {
      idBord: bord.id,
      idTask: task.id,
      descriptionTask: data.descriptionTask,
    };
    dispatch(bordsActions.changeDescriptionTask(currentTask));
  };

  const changeDescription = () => {
    const currentTask: deleteTaskAction = { idBord: bord.id, idTask: task.id };
    dispatch(bordsActions.deleteDescriptionTask(currentTask));
  };

  const deleteDescription = () => {
    const currentTask: deleteTaskAction = { idBord: bord.id, idTask: task.id };
    dispatch(bordsActions.deleteDescriptionTask(currentTask));
    reset();
  };

  return (
    <div className={s.description}>
      <h2 className={s.title}>Описание</h2>
      {task.description ? (
        <p>
          {task.description}
          <span onClick={changeDescription} className={s.change}>
            &#9998;
          </span>
          <span onClick={deleteDescription} className={s.delete}>
            &#128465;
          </span>
        </p>
      ) : (
        <form onSubmit={handleSubmit(addDescription)} className={s.input}>
          <textarea {...register('descriptionTask', { required: true, minLength: 2 })} />
          <button type="submit">Добавить описание</button>
        </form>
      )}
    </div>
  );
};

export default ItemDecription;
