import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

const i18 = require('./i18n');

const redux = require('redux');
const createStore = require('redux').createStore;
//Lets create the Store Object
let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
document.getElementById('root')
);

reportWebVitals();
