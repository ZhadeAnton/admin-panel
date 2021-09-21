import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './routes/loginPage';
import PanelPage from './routes/panelPage';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/panel' component={PanelPage} />
      </Switch>
    </main>
  );
}

export default App;
