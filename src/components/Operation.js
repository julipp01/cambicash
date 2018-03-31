import React from 'react';

const Operation = () => (
  <div className="tab-content">
    <div id="menu1" className="tab-pane fade active in">
      <div className="Container mb-3 p-0 m-auto">
        <div className="bg-sky-2 radius-20 w-contain p-4">
          <div className="text-center">
            <p className="title-c-1 mb-0 padding-top-10">Cambio de dólares online</p>
            <p className="title-c-2 mt-0">Seguro, rápido y al mejor precio</p>
          </div>
          <div className="row text-center w-box m-auto" >
            <div className={"col-6 box-green-1"}>
              <p className="mb-0 p-2">Compra: 3.2480 </p>
            </div>
            <div className={"col-6 box-green-2 "}>
              <p className="mb-0 p-2">Venta: 3.2700</p>
            </div>
          </div>
          <div className={"container mt-3"}>
            <div className="row" >
              <div className="col-6 border ">
                <label className="grey-2 f14 mb-0" htmlFor="">Tu envías:</label>
                <input className="input-c" type="number" maxLength="10" />
              </div>
              <div className="col-6 border pt-2">
                <div className=" d-inline-block">
                  <img className="flag" src="images/peru.png" alt="eeuu" />
                </div>
                <div className="d-inline-block">
                  <p className=" money">PEN S/</p>
                </div>
              </div>
            </div>
            <div className="row" >
              <div className="col-6 border">
                <label className="grey-2 f14" htmlFor="">Tú Recibes:</label>
                <input type="text" className="input-c" maxLength="20" />
              </div>
              <div className="col-6 border pt-2">
                <div className=" d-inline-block">
                  <img className="flag" src="images/united-states.png" alt="eeuu" />
                </div>
                <div className=" d-inline-block">
                  <p className=" money">USD $</p>
                </div>
              </div>
            </div>
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
