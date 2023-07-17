import { useState } from 'react';
import s from './bordTitle.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../state/hooks';
import { bordsActions } from '../../../../state/ducks/bords';

interface IBordTitleProps {
  titleBord: string;
  bordId: string;
}

interface IFormInputs {
  titleBord: string;
}

const BordTitle = ({ titleBord, bordId }:IBordTitleProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    defaultValues: {
      titleBord,
    },
  });

  const [isVisibleInput, setVisibleInput] = useState(false);

  const dispatch = useAppDispatch();
  
  const changeBordTitle: SubmitHandler<IFormInputs> = (data) => {
    dispatch(
      bordsActions.saveBordName({ id: bordId, BordTitle: data.titleBord }),
    );
    setVisibleInput(false);
  };

  return (
    <>
      {isVisibleInput ? (
        <>
        <form onSubmit={handleSubmit(changeBordTitle)}>
          <input className={s.input}
            {...register('titleBord', { required: true, minLength: 2 })}
          />
          <input className={s.save}
          type="submit" value="&#10004;" />
        </form>
        <div>{errors.titleBord && 'Поле не может быть пустым'}</div>
        </>
      ) : (
        <h4 onClick={() => setVisibleInput(true)} className={s.title}>
          {titleBord}
        </h4>
      )}
    </>
  );
};

export default BordTitle;
