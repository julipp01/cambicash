import React from 'react';
import PropTypes from 'prop-types';
import DataUser from './DataUser';
import Welcome from './Welcome';

const data = {
  url: 'http://www.metalcivasquez.com.bo/php/images/contact-women.jpg',
  name: 'Mery Luz Umiyauri Mendoza',
  dni: '70234567',
}

const MainPrimary = () => (
  <div>
    <div className="container">
      <br />
      <div className="row">
        <DataUser dataUser = {data}/>
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