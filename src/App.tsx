import React, { FC, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Popup/Popup';
import { Actions, AppContext } from './AppContext';

const App: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      dispatch({ type: Actions.setName, payload: name });
    }
  }, []);
  return (
    <div className="App">
      {state.popup.visible&&!localStorage.getItem('name') && <Popup />}
      <Header />
      <Main />
    </div>
  );
};

export default App;
