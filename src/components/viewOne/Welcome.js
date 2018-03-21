import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="col-md-8">
    <div className="card text-center">
          <div className="card-header">
            <h5 className="card-title">BIENVENIDO...</h5>
          </div>
          <div className="card-body">
            <p className="card-text">REXTIE piensa en tu seguridad y comidad</p>
            <div className>
              <img src="http://www.tickerbar.info/images/make-money-online.jpg" width="50%" alt />
            </div>
            <br />
            <a  className="btn btn-success"><Link to="/MainViewTwo">Nueva Operacion</Link></a>
          </div>
          <div className="card-footer text-muted" />
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
} */

export default Welcome