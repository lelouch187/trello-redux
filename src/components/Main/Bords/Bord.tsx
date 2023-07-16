import React, { FC } from 'react';
import s from './bord.module.css';
import { IBord } from '../../../types/bords';
import BordTitle from './BordTitle/BordTitle';


interface IBordProprs {
  bord: IBord;
}

const Bord: FC<IBordProprs> = ({ bord }) => {
  return (
    <div className={s.bord}>
      <BordTitle titleBord={bord.titleBord} bordId={bord.id} />
      {/* {bord.tasks && <Task tasks={bord.tasks} idBord={bord.id} />}
      <AddTask id={bord.id} /> */}
    </div>
  );
};

export default Bord;
