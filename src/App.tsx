import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './routes/loginPage';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={LoginPage} />
      </Switch>
    </main>
  );
}

export default App;
