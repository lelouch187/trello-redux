import React, { FC, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';
import { Actions, AppContext } from './AppContext';
import ItemBord from './components/ItemBord/ItemBord';
import { useAppSelector } from './state/hooks';
import { selectUserName } from './state/ducks/userName/selectors';

const App: FC = () => {
  const name = useAppSelector(selectUserName)
  // const { state, dispatch } = useContext(AppContext);
  // useEffect(() => {
  //   const name = localStorage.getItem('name');
  //   if (name) {
  //     dispatch({ type: Actions.setName, payload: name });
  //   }
  //   //eslint-disable-next-line   
  // }, []);
  return (
    <div className="App">
      {!name && <Popup />}
      {/* {state.activeTask.isVisible && <ItemBord />}
      <Header />
      <Main /> */}
    </div>
  );
};

export default App;
