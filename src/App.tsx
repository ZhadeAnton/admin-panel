import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { panelList } from './utils/panelUtils';
import { useAppSelector } from './hooks/usePreTypedHooks';
import useHistoryPush from './hooks/useHistory';
import LoginPage from './routes/loginPage';
import PanelPage from './routes/panelPage';

function App() {
  const historyPush = useHistoryPush()
  const state = useAppSelector((state) => state)
  const activeTab = state.panel.activeTab
  const currentTabComponent = panelList[+activeTab]
  const authorizedUser = state.auth.authData

  if (!authorizedUser) historyPush('/login')

  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/admin/:id' render={() => (
          <PanelPage CurrentTab={currentTabComponent.component} />
        )} />
      </Switch>
    </>
  );
}

export default App;
