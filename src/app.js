import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Router from './route';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App;