import { useState } from 'react';
import { IBord, ITask } from '../../../types/bords';
import s from './itemComments.module.css';
import { useForm } from 'react-hook-form';
import { addCommentTaskAction, changeCommentTaskAction, deleteCommentTaskAction } from '../../../state/ducks/bords/reducers';
import { useAppDispatch } from '../../../state/hooks';
import { bordsActions } from '../../../state/ducks/bords';

interface CommentInput {
  commentTitle: string;
  changeComment: string;
}

interface IItemComments {
  name: string;
  bord: IBord;
  task: ITask;
}

const ItemComments = ({ name, bord, task }: IItemComments) => {
  const [visibleInput, setVisibleInput] = useState('');
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<CommentInput>();

  const addComment = (data: CommentInput) => {
    if (data.commentTitle.trim()){
      const currentTask: addCommentTaskAction = {
        idBord: bord.id,
        idTask: task.id,
        commentTask: data.commentTitle,
      };
      dispatch(bordsActions.addCommentTask(currentTask));
      reset();
    }
  };

  const deleteComment = (id: string) => {
    const currentComment: deleteCommentTaskAction = {
      idBord: bord.id,
      idTask: task.id,
      id,
    };
    dispatch(bordsActions.deleteCommentTask(currentComment));
  };

  const changeComment = (id:string) => ({changeComment}:CommentInput) => {
    const currentComment: changeCommentTaskAction = {
      idBord: bord.id,
      idTask: task.id,
      id,
      title: changeComment
    };
    dispatch(bordsActions.changeCommentTask(currentComment));
    setVisibleInput('')
    reset()
  };

  return (
    <div>
      <h2 className={s.title}>Комментарии</h2>
      {task.comments.length > 0 &&
        task.comments.map((comment) => {
          return (
            <div className={s.comment} key={comment.id}>
              <p className={s.comment_title}>{name}</p>
              {visibleInput === comment.id ? (
                <form onSubmit={handleSubmit(changeComment(comment.id))}>
                  <input {...register('changeComment', { required: true, minLength: 2 })} />
                  <button type='submit' className={s.save}>&#10004;</button>
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
              <span onClick={() => deleteComment(comment.id)} className={s.comment_delete}>
                &#10060;
              </span>
            </div>
          );
        })}
      <form onSubmit={handleSubmit(addComment)} className={s.add_comment}>
        <input
          {...register('commentTitle')}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Добавить комментарии
        </button>
      </form>
    </div>
  );
};

export default ItemComments;
