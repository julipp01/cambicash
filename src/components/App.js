import React from 'react'
import PropTypes from 'prop-types';
import Header from './Header/Header'
import Main from './viewOne/Main';
import Form from './viewThree/Form'
/* import Style from './App.css'; */

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Header/>
      <Main /> */}
      <Form/>
    </div>
  );
}

export default App