import React from 'react';
import PropTypes from 'prop-types';
import MainPrimary from './MainPrimary';
import List from './List';
import Estyle1 from './ViewOne.css';

const ViewOne = () => (
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

export default ViewOne