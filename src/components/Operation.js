import React from 'react';

const Operation = () => (
  <div className="tab-content">
    <div id="menu1" className="tab-pane fade active in">
      <div className="Container mb-3 p-0 m-auto">
        <div className="bg-sky-2 radius-20 w-contain p-4">
          <div className="text-center">
            <p className="title-c-1 mb-0 padding-top-10">Cambio de dólares online</p>
            <p className="title-c-2 mt-0">Seguro, rápido y al mejor precio</p>
            <p className="title-c-3 mt-0">Compra: 3.2480 - Venta: 3.2700</p>
          </div>
          <div className="text-center grey-2 mt-3" >
            <p className="title-4 mb-0 ">Ahorra S/. 100.00 respecto al banco</p>
            <p className="f14">Tipo de cambio vigente hasta 00:00</p>
          </div>
        </div>
      </div>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>

    <div id="menu2" className="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Some content in menu 2.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>

    <div id="menu3" className="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Some content in menu 3.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>
  </div>
)

export default Operation;
