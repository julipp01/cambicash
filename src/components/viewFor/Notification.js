import React from 'react';
import NotificationCSS from './Notification.css'

const Notification = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="card border-primary ">
        <div className="card-header ">Tu código de operación N°9808 fue registrada el día 08/03 a las 23:05 horas. deberás realizar la transferencia en un maximo de 15 minutos para mantener el tipo de cambio acordado. Deberá realizar los siguientes dos pasos:</div>
        <div className="row">
          <div className="card-body text-primary col-sm-6">
            <h5 className="card-title">Paso 1: Transfiere de tu banca en Línea</h5>
            <figure className="text-center">
              <img className="logo-not" src="img/change.png" alt="" />
            </figure>
            <p className="card-text"> Cantidad a Transferir S/ 2, 000. 00 PEN</p>
            <p className="card-text"> Banco Origen: Scotiabank</p>
            <p className="card-text"> Banco Destino: Interbank</p>
            <p className="card-text"> Tipo de cuenta: Corriente Soles</p>
            <p className="card-text"> Número de Cuenta: 003316600300127342868</p>
            <p className="card-text"> Titular de la Cuenta: REXTIE SAC</p>
            <p className="card-text"> RUC del titular: 20602030013</p>
            <p>Envía el voucher a <span className="text-green">pagos@rextie.com</span></p>
          </div>
          <div className="card-body text-primary col-sm-6">
            <h5 className="card-title">Paso 2: Rextie realizará la tranferencia al cliente</h5>
            <figure className="text-center">
              <img className="logo-not" src="img/recibe.png" alt="" />
            </figure>
            <p className="card-text"> Cantidad a Transferir $ 609.01 USD</p>
            <p className="card-text"> Tipo de Cambio: 3.2840</p>
            <p className="card-text"> Banco Destino: Interbank</p>
            <p className="card-text"> Tipo de cuenta: Ahorros Dólares</p>
            <p className="card-text"> Número de Cuenta: 123XXXXXXX5123</p>
            <p className="card-text"> Titular de la Cuenta:</p>
            <p className="card-text"> RUC del titular: 20602030013</p>
            <p>Envía el voucher a <span className="text-green">pagos@rextie.com</span></p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center" style={{ marginTop: 42, marginBottom: 10 }}>
            <button className="btn-u btn-u-default btn-secondary" type="submit">Ir a la página principal</button>
            <button className="btn-u btn-success" type="submit">Nueva Operación</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Notification;
