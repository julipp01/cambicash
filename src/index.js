import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';



const reducer = (state = {
  inputUsd: 1000,
  inputPen: 3246,
  urlUsd: 'https://icon-icons.com/icons2/230/PNG/128/UnitedStates_US_USA_840_Flag1_26093.png',
  urlPen: 'http://www.mismarcadores.com/res/image/data/nk3TfRGG-CIDuW164.png',
  usd: 'USD $',
  pen: 'PEN S/',
  input: '100'
}, action) => {
  switch (action.type) {
    case 'INTERCAMBIAR':
      return { urlUsd: state.urlPen, urlPen: state.urlUsd, usd: state.pen, pen: state.usd }
    case 'CALCULAR':
      console.log(action.newInput)
      return { ...state, input: action.newInput, inputPen: state.input }

    default:
      return state;
  }
};

// const rootReducer = combineReducers ({
//   myApp: 
// });

// export default rootReducer;

// const store = createStore(reducer);
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router>
      <Route>
        <App/>
      </Route>
    </Router>
  </Provider>,

  //   < Provider store = {store} > 
  //   < Router > 
  //     < Route path = " / " componente = {App} / > 
  //   < / Router > 
  // < / Provider > 

  // <Provider store={store}>
  //   <Router history={syncHistoryWithStore(browserHistory, store)}>
  //     <Route path="/" component={App} />
  //   </Router>
  // </Provider>,

  document.getElementById('root')
)

