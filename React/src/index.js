import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import UserReducer from './Store/UserReducer'
import EnterpriseReducer from './Store/EnterpriseReducer'
import thunk from 'redux-thunk';
const combin=combineReducers({
  user:UserReducer,
  enterprise:EnterpriseReducer
})
const store=createStore(combin,applyMiddleware(thunk))
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
