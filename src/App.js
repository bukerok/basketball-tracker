import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Statistics from './pages/statistics';

function App() {
  return (
    <Router>
      <div className="application">
        <Switch>
          <Route
            exact
            path="/"
            component={Statistics}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
