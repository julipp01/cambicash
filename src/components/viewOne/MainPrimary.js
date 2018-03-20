import React from 'react';
import PropTypes from 'prop-types';
import DataUser from './DataUser';
import Welcome from './Welcome';

const MainPrimary = () => (
  <div>
    <div className="container">
      <br />
      <div className="row">
        <DataUser />
        <Welcome />
      </div>
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
} */

export default MainPrimary