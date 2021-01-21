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
//Need to import reducer
import { reducer } from './store/reducers'

//crateStore
const store = createStore( reducer, applyMiddleware (thunk));
  console.log('This is the state', store.getState());

//Wrap App with Provider store={store}
  ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
