import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';

import App from './App';
import { store } from './store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // @material-ui/core/Drawer triggers '`findDOMNode` warning'
  // <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StylesProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
