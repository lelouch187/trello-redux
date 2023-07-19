import { useState } from 'react';
import { IBord, ITask } from '../../../types/bords';
import s from './itemComments.module.scss';
import { useForm } from 'react-hook-form';
import {
  IAddCommentTask,
  IChangeCommentTask,
  IDeleteCommentTask,
} from '../../../state/ducks/bords/reducers';
import { useAppDispatch } from '../../../state/hooks';
import { bordsActions } from '../../../state/ducks/bords';
import { redCross } from '../../../variables';

interface CommentInput {
  commentTitle: string;
  changeComment: string;
}

interface IItemComments {
  name: string;
  bord: IBord | undefined;
  task: ITask | undefined;
}

const ItemComments = ({ name, bord, task }: IItemComments) => {
  const [visibleInput, setVisibleInput] = useState('');
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<CommentInput>();

  const addComment = (data: CommentInput) => {
    const titleNotEmpry = data.commentTitle.trim();
    if (titleNotEmpry && bord !== undefined && task !== undefined) {
      const currentTask: IAddCommentTask = {
        idBord: bord.id,
        idTask: task.id,
        commentTask: data.commentTitle,
      };
      dispatch(bordsActions.addCommentTask(currentTask));
      reset();
    }
  };

  const deleteComment = (id: string) => {
    if (bord !== undefined && task !== undefined) {
      const currentComment: IDeleteCommentTask = {
        idBord: bord.id,
        idTask: task.id,
        id,
      };
      dispatch(bordsActions.deleteCommentTask(currentComment));
    }
  };

  const changeComment =
    (id: string) =>
    ({ changeComment }: CommentInput) => {
      if (bord !== undefined && task !== undefined) {
        const currentComment: IChangeCommentTask = {
          idBord: bord.id,
          idTask: task.id,
          id,
          title: changeComment,
        };
        dispatch(bordsActions.changeCommentTask(currentComment));
        setVisibleInput('');
        reset();
      }
    };

  return (
    <div>
      <h2 className={s.title}>Комментарии</h2>
      {task !== undefined &&
        task.comments.length > 0 &&
        task.comments.map((comment) => {
          return (
            <div className={s.comment} key={comment.id}>
              <p className={s.comment_title}>{name}</p>
              {visibleInput === comment.id ? (
                <form onSubmit={handleSubmit(changeComment(comment.id))}>
                  <input
                    {...register('changeComment', {
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <button type="submit" className={s.save}>
                    &#10004;
                  </button>
                </form>
              ) : (
                <p
                  onClick={() => {
                    setVisibleInput(comment.id);
                    setValue('changeComment', comment.value);
                  }}
                  className={s.comment_text}>
                  {comment.value}
                </p>
              )}
              <span
                onClick={() => deleteComment(comment.id)}
                className={s.comment_delete}>
                {redCross}
              </span>
            </div>
          );
        })}
      <form onSubmit={handleSubmit(addComment)} className={s.add_comment}>
        <input {...register('commentTitle')} className={s.input} />
        <button type="submit" className={s.button}>
          Добавить комментарии
        </button>
      </form>
    </div>
  );
};

export default ItemComments;
