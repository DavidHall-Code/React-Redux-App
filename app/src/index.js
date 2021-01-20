import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//Need to import {Provider} from react-redux
import { Provider } from 'react-redux';
//Need to import {createStore, applymiddleware} from redux
import { createStore, applyMiddleware } from 'redux';
//Need to import thunk from redux-thunk
import thunk from 'redux-thunk';

//Crate store
const store = createStore(applyMiddleware (thunk));
  console.log('This is the state', store.getState());

ReactDOM.render(
  <Provider>
  <App />
  </Provider>,
  document.getElementById('root')
);
