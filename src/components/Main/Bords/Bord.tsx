import s from './bord.module.scss';
import { IBord } from '../../../types/bords';
import BordTitle from './BordTitle/BordTitle';
import AddTask from './AddTask/AddTask';
import Task from './Task/Task';

interface IBordProprs {
  bord: IBord;
}

const Bord = ({ bord }: IBordProprs) => {
  return (
    <div className={s.bord}>
      <BordTitle titleBord={bord.titleBord} bordId={bord.id} />
      {bord.tasks && <Task tasks={bord.tasks} idBord={bord.id} />}
      <AddTask idBord={bord.id} />
    </div>
  );
};

export default Bord;
