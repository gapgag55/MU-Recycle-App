import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Router from './route';
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App;