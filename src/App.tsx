import React, { FC, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';
import ItemBord from './components/ItemBord/ItemBord';
import { useAppSelector } from './state/hooks';
import { selectUserName } from './state/ducks/userName/selectors';

const App: FC = () => {
  const name = useAppSelector(selectUserName)

  return (
    <div className="App">
      {!name && <Popup />}
      {/* {state.activeTask.isVisible && <ItemBord />} */}
      <Header />
      <Main />
    </div>
  );
};

export default App;
