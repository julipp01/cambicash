import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
