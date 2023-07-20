import { useState } from 'react';
import s from './bordTitle.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../state/hooks';
import { bordsActions } from '../../../../state/ducks/bords';
import { CHECK_SYMBOL } from '../../../../variables/icons';

interface BordTitleInterfaceProps {
  titleBord: string;
  bordId: string;
}

interface FormInputInterface {
  titleBord: string;
}

const BordTitle = ({ titleBord, bordId }: BordTitleInterfaceProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputInterface>({
    defaultValues: {
      titleBord,
    },
  });

  const [isVisibleInput, setVisibleInput] = useState(false);

  const dispatch = useAppDispatch();

  const changeBordTitle: SubmitHandler<FormInputInterface> = (data) => {
    dispatch(bordsActions.saveBordName({ id: bordId, BordTitle: data.titleBord }));
    setVisibleInput(false);
  };

  return (
    <>
      {isVisibleInput ? (
        <>
          <form onSubmit={handleSubmit(changeBordTitle)}>
            <input
              className={s.input}
              {...register('titleBord', { required: true, minLength: 2 })}
            />
            <input className={s.save} type="submit" value={CHECK_SYMBOL} />
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
