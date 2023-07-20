import { activeTaskActions } from '../../../../state/ducks/activeTask';
import { useAppDispatch } from '../../../../state/hooks';
import { TaskInterface } from '../../../../types/bords';
import { ALARM_SYMBOL } from '../../../../variables/icons';
import s from './task.module.scss';

interface TaskInterfaceProps {
  tasks: TaskInterface[];
  idBord: string;
}

const Task = ({ tasks, idBord }: TaskInterfaceProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            onClick={() =>
              dispatch(activeTaskActions.openTask({ idBord: idBord, idTask: task.id }))
            }
            key={task.id}
            className={s.task}>
            <p className={s.title}>{task.title}</p>
            {task.comments.length > 0 && (
              <>
                <p className={s.dialogImg}>{ALARM_SYMBOL}</p>
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
