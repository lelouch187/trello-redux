import { useEffect } from 'react';
import s from './itemBord.module.scss';
import { TaskInterface } from '../../types/bords';
import ItemInfo from './ItemInfo/ItemInfo';
import ItemDecription from './ItemDescription/ItemDecription';
import ItemComments from './ItemComments/ItemComments';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { bordsSelectors } from '../../state/ducks/bords';
import { activeTaskActions, activeTaskSelectors } from '../../state/ducks/activeTask';
import { userNameSelectors } from '../../state/ducks/userName';
import { ESC_KEY } from '../../variables/constants';
import { RED_CROSS_SYMBOL } from '../../variables/icons';

const ItemBord = () => {
  const userName = useAppSelector(userNameSelectors.selectUserName);
  const activeTask = useAppSelector(activeTaskSelectors.selectActiveTask);
  const currentBord = useAppSelector(bordsSelectors.selectBord(activeTask.indexBord || ''));
  const dispatch = useAppDispatch();

  const currentTask = currentBord!.tasks.find((task: TaskInterface) => task.id === activeTask.indexTask);

  const closeCard = () => {
    dispatch(activeTaskActions.closeTask());
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEY) {
        closeCard();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup}>
        <ItemInfo task={currentTask} bord={currentBord} name={userName} />
        <ItemDecription task={currentTask} bord={currentBord} />
        <ItemComments task={currentTask} bord={currentBord} name={userName} />
        <span onClick={closeCard} className={s.close}>
          {RED_CROSS_SYMBOL}
        </span>
      </div>
    </div>
  );
};

export default ItemBord;
