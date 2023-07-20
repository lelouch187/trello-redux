import s from './itemDescription.module.scss';
import { BordInterface, TaskInterface } from '../../../types/bords';
import { useForm } from 'react-hook-form';
import { ChangeDescriptionInterface, DeleteTaskInterface } from '../../../state/ducks/bords/reducers';
import { useAppDispatch } from '../../../state/hooks';
import { bordsActions } from '../../../state/ducks/bords';
import { PEN_SYMBOL, TRASH_SYMBOL } from '../../../variables/icons';


interface DescriptionInputInterface {
  descriptionTask: string;
}

interface ItemDecriptionInterfaseProps {
  bord: BordInterface | undefined;
  task: TaskInterface | undefined;
}

const ItemDecription = ({ bord, task }: ItemDecriptionInterfaseProps) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<DescriptionInputInterface>({
    defaultValues: {
      descriptionTask: task?.description,
    },
  });

  const addDescription = (data: DescriptionInputInterface) => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: ChangeDescriptionInterface = {
        idBord: bord.id,
        idTask: task.id,
        descriptionTask: data.descriptionTask,
      };
      dispatch(bordsActions.changeDescriptionTask(currentTask));
    }
  };

  const changeDescription = () => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: DeleteTaskInterface = {
        idBord: bord.id,
        idTask: task.id,
      };
      dispatch(bordsActions.deleteDescriptionTask(currentTask));
    }
  };

  const deleteDescription = () => {
    if (bord !== undefined && task !== undefined) {
      const currentTask: DeleteTaskInterface = {
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
            {PEN_SYMBOL}
          </span>
          <span onClick={deleteDescription} className={s.delete}>
            {TRASH_SYMBOL}
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
