import React from 'react'
import PropTypes from 'prop-types';
import Header from './Header/Header'
import Main from './Main';
import Form from './viewThree/Form';
import Notification from './viewFor/Notification'

const App = () => {
  return (
    <div>
      <Header/>
      <Main />
    </div>
  );
}

export default App