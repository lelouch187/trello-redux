import React, { FC, useState } from 'react';
import { IBord, ITask } from '../../../types/bords';
import s from './itemComments.module.css';


interface IItemComments {
  name: string;
  bord: IBord;
  task: ITask;
}

const ItemComments: FC<IItemComments> = ({ name, bord, task }) => {

  const [visibleInput, setVisibleInput] = useState('');
  const [newComment, setNewComment] = useState('');
  const [renameComment, setRenameComment] = useState('');

  const saveBord = (changeTasks: ITask[]) => {
    
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
                <div>
                  <input
                    onChange={(e) => setRenameComment(e.target.value)}
                    value={renameComment}
                  />
                  <span
                    className={s.save}
                    onClick={() => {}}>
                    &#10004;
                  </span>
                </div>
              ) : (
                <p
                  onClick={() => {
                    setVisibleInput(comment.id);
                    setRenameComment(comment.value);
                  }}
                  className={s.comment_text}>
                  {comment.value}
                </p>
              )}
              <span
                onClick={() => {}}
                className={s.comment_delete}>
                &#10060;
              </span>
            </div>
          );
        })}
      <div className={s.add_comment}>
        <input
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          className={s.input}
        />
        <button onClick={()=>{}} className={s.button}>
          Добавить комментарии
        </button>
      </div>
    </div>
  );
};

export default ItemComments;
