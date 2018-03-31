import React from 'react';

const OperationMenu = () => (
  <div className="process">
    <div className="process-row nav nav-tabs">
      <div className="process-step">
        <button type="button" className="btn btn-info btn-circle" data-toggle="tab" href="#menu1"><i className="fa fa-info fa-3x" /></button>
        <p className="text-color-white"><small>Nueva <br />Operación</small></p>
      </div>
      <div className="process-step">
        <button type="button" className="btn btn-default btn-circle" data-toggle="tab" href="#menu2"><i className="fa fa-file-text-o fa-3x" /></button>
        <p className="text-color-white"><small>Confirmación <br />de Datos</small></p>
      </div>
      <div className="process-step">
        <button type="button" className="btn btn-default btn-circle" data-toggle="tab" href="#menu3"><i className="fa fa-check fa-3x" /></button>
        <p className="text-color-white"><small>Notificación</small></p>
      </div>
    </div>
  </div>
)

export default OperationMenu;
