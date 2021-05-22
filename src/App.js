import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  PAGES_ROOTS,
  getRootLink,
} from './helpers/navigation';
import Shooting from './pages/shooting';
import Statistics from './pages/statistics';

function App() {
  return (
    <HashRouter>
      <div className="application">
        <Switch>
          <Route
            exact
            path="/"
            component={Statistics}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.shooting)}
            component={Shooting}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
