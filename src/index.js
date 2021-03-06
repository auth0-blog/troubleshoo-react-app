import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoApp from './reducers';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(toDoApp);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
