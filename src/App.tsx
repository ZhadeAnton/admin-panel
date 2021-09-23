import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { useAppSelector } from './hooks/usePreTypedHooks';
import useHistoryPush from './hooks/useHistory';
import LoginPage from './routes/loginPage';
import PanelPage from './routes/panelPage';

function App() {
  const historyPush = useHistoryPush()
  const state = useAppSelector((state) => state)
  const authorizedUser = state.auth.authData

  if (!authorizedUser) historyPush('/login')

  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/admin/:id' component={PanelPage} />
      </Switch>
    </>
  );
}

export default App;
