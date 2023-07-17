import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';
import ItemBord from './components/ItemBord/ItemBord';
import { useAppSelector } from './state/hooks';
import {userNameSelectors} from './state/ducks/userName';
import {activeTaskSelectors} from './state/ducks/activeTask';

const App = () => {
  const name = useAppSelector(userNameSelectors.selectUserName)
  const isVisibleTask = useAppSelector(activeTaskSelectors.selectisVisibleTask)

  return (
    <div className="App">
      {!name && <Popup />}
      {isVisibleTask && <ItemBord />}
      <Header />
      <Main />
    </div>
  );
};

export default App;
