import s from './popup.module.scss';
import { useAppDispatch } from '../../state/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userNameActions } from '../../state/ducks/userName';

interface IUserNameInput {
  userName: string;
}

const Popup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserNameInput>();

  const dispatch = useAppDispatch();

  const onSetName: SubmitHandler<IUserNameInput> = (data) => {
    dispatch(userNameActions.saveUserName(data.userName));
  };

  return (
    <div className={s.popup_wrapper}>
      <div className={s.popup}>
        <p className={s.text}>Введите ваше имя</p>
        <form className={s.form} onSubmit={handleSubmit(onSetName)}>
          <input
            {...register('userName', { required: true, minLength: 2 })}
            className={s.input}
          />
          {errors.userName && <p className={s.error}>Вы не ввели имя!</p>}
          <button type="submit" className={s.button}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
