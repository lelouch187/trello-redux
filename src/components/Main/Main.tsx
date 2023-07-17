import s from './main.module.css';
import Bord from './Bords/Bord';
import { IBord } from '../../types/bords';
import { useAppSelector } from '../../state/hooks';
import { bordsSelectors } from '../../state/ducks/bords';

const Main = () => {
  const bords = useAppSelector(bordsSelectors.selectBords)
  
  return (
    <main className={s.main}>
      {bords.map((bord: IBord) => {
        return <Bord bord={bord} key={bord.id} />;
      })}
    </main>
  );
};

export default Main;
