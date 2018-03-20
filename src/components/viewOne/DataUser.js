import React from 'react';
import PropTypes from 'prop-types';

const DataUser = () => (
  <div className="col-md-4">
    <div className="card" style={{width: '18rem'}}>
      <h2 className="text-center">Cuenta Personal</h2>
      <img className="card-img-top" src="http://www.metalcivasquez.com.bo/php/images/contact-women.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">Mery Luz Umiyauri Mendoza</h5>
        <p className="card-text text-center">DNI : 70234567</p>
      </div>
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
} */

export default DataUser