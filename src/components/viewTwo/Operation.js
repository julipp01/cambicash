
import React from 'react'
import PropTypes from 'prop-types';
import RegisterOperation from './RegisterOperation';
import { Link } from "react-router-dom";

const Operation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 center">
          <div className="card text-center transparent">
            <div className="card-header grey">
              <h1 className="colorWhite">Cambio de Dólares Online</h1>
            </div>
            <RegisterOperation />
            <div className="card-footer text-muted grey">
              <p className="colorWhite">Ahorra S/  55.00 respecto al banco</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center d-flex justify-content-center">
          <h1 className="sentence colorWhite">SEGURO, RAPIDO Y AL MEJOR PRECIO ...</h1>
        </div>
      </div>
    </div>
  );
}

export default Operation