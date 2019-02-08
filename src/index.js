import React from 'react';
import ReactDOM from 'react-dom';
// This is a component made by react-redux library.
// By convention we need to label component variable names as
// capitals.
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);