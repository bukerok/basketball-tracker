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
import Statistics from './pages/statistics';
import Debug from './pages/debug';
import Homepage from './pages/homepage';
import ZoneTracker from './pages/zoneTracker';
import SimpleTracker from './pages/simpleTracker';

function App() {
  return (
    <HashRouter>
      <div className="application">
        <Switch>
          <Route
            exact
            path={getRootLink(PAGES_ROOTS.homepage)}
            component={Homepage}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.statistics)}
            component={Statistics}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.debug)}
            component={Debug}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.zoneTracker)}
            component={ZoneTracker}
          />
          <Route
            path={getRootLink(PAGES_ROOTS.simpleTracker)}
            component={SimpleTracker}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
