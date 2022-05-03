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
import AddShootingPage from './pages/addShooting';
import Shooting from './pages/shooting';
import Statistics from './pages/statistics';
import Debug from './pages/debug';

function App() {
  return (
    <HashRouter>
      <div className="application">
        <Switch>
          <Route
            exact
            path={getRootLink(PAGES_ROOTS.homepage)}
            component={Statistics}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.addShooting)}
            component={AddShootingPage}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.shooting)}
            component={Shooting}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.debug)}
            component={Debug}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
