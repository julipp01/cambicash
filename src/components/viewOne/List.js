import React from 'react';
import PropTypes from 'prop-types';

const List = () => (
  <div className="container-fluid">
    {/* <div className="row">
      <div className="col-md-12">
        <div className="col-md-3">
          <button type="button" className="pading btn btn-outline-success btn-options">Cuentas Bancarias Personales</button>
        </div>
      </div>
    </div> */}
    <div className="row">
      <div className="col-md-12">
        <br />
        <br />
        <div className="col-md-3">
          <button type="button" className="pading btn btn-outline-success btn-options btn-block ">Cuentas Bancarias Personales</button>
        </div>
        <div className="col-md-3">
          <button type="button" className="pading btn btn-outline-primary btn-options btn-block">Cuentas Bancarias de Terceros</button>
        </div>
        <div className="col-md-3">
          <button type="button" className="pading btn btn-outline-success btn-options btn-block">Operaciones Historicas</button>
        </div>
        <div className="col-md-3">
          <button type="button" className="pading btn btn-outline-primary btn-options btn-block">Cuentas Bacrias de Rextie</button>
        </div>
      </div>
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
} */

export default List