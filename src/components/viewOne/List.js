import React from 'react';
import PropTypes from 'prop-types';

const List = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 fixed">
            <br />
            <br />
            <button type="button" className="pading btn btn-outline-success">Cuentas Bancarias Personales</button>
            <button type="button" className="pading btn btn-outline-primary">Cuentas Bancarias de Terceros</button>
            <button type="button" className="pading btn btn-outline-success">Operaciones Historicas</button>
            <button type="button" className="pading btn btn-outline-primary">Cuentas Bacrias de Rextie</button>
      </div>
    </div>
  </div>
)
/* Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
} */

export default List