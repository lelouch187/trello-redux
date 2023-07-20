import s from './main.module.scss';
import Bord from './Bords/Bord';
import { BordInterface } from '../../types/bords';
import { useAppSelector } from '../../state/hooks';
import { bordsSelectors } from '../../state/ducks/bords';

const Main = () => {
  const bords = useAppSelector(bordsSelectors.selectBords);

  return (
    <main className={s.main}>
      {bords.map((bord: BordInterface) => {
        return <Bord bord={bord} key={bord.id} />;
      })}
    </main>
  );
};

export default Main;
