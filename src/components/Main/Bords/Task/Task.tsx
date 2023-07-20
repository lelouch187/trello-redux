import { activeTaskActions } from '../../../../state/ducks/activeTask';
import { useAppDispatch } from '../../../../state/hooks';
import { ITask } from '../../../../types/bords';
import { alarm } from '../../../../variables';
import s from './task.module.scss';

interface ITaskProps {
  tasks: ITask[];
  idBord: string;
}

const Task = ({ tasks, idBord }: ITaskProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            onClick={() =>
              dispatch(
                activeTaskActions.openTask({ idBord: idBord, idTask: task.id }),
              )
            }
            key={task.id}
            className={s.task}>
            <p className={s.title}>{task.title}</p>
            {task.comments.length > 0 && (
              <>
                <p className={s.dialogImg}>{alarm}</p>
                <span>{task.comments.length}</span>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Task;
