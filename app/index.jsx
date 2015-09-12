import React from "react";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import piScreenApp from './reducers.jsx';
import App from './app.jsx';

let store = createStore(piScreenApp);

React.render(
  <Provider store={store}>
    {()=><App/>}
  </Provider>
  ,
  document.body
);
