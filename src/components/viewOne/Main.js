import React from 'react';
import PropTypes from 'prop-types';
import MainPrimary from './MainPrimary';
import List from './List';
import Estyle from './Main.css';

const Main = () => (
  <main>
    <MainPrimary />
    <List />
  </main>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
} */

export default Main 