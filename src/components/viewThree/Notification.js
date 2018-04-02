import React from 'react'
import { Link } from "react-router-dom";

const Notification = ({ isChange }) => {
  const validateChange = () => {
    const changeValue = isChange.term1 ? isChange.term1 : isChange.term2
    return changeValue;
  }
  const validateResult = () => {
    const changeResult = isChange.term1 ? isChange.result1 : isChange.result2
    return changeResult;
  }
  return (
    <div className="container mb-3 mt-1">
      <div className="bg-sky-2 radius-20">
        <div className="message m-auto pt-4">
          <p>Tu código de operación N°9808 fue registrada el día 08/03 a las 23:05 horas.
        deberás realizar la transferencia en un maximo de 15 minutos para mantener
el tipo de cambio acordado. Deberá realizar los siguientes dos pasos:</p>
        </div>
        {/***************************************collapse******************************************/}
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link one1" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img className="card-img-top rounded-circle" src='https://png.icons8.com/metro/1600/cheap.png' /> Transfiere de tu banca en Línea
              </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <p className="title-c-3 pl-4 pr-4 pt-4">Transfiere el monto en {isChange.typeMoney} desde tu banca en línea</p>
                <div className="pr-4 pl-4">
                  <hr />
                </div>
                <figure className="text-center">
                  <img className="logo-not" src="images/change.png" alt="" />
                </figure>
                <div className="row w300 m-auto">
                  <div className="col-6 f14 line-h">
                    <p>Cantidad a transferir :</p>
                    <p>Banco de Origen :</p>
                    <p>Banco de Destino :</p>
                    <p>Tipo de Cuenta :</p>
                    <p>Número de Cuenta :</p>
                    <p>Titular de Cuenta :</p>
                    <p>RUC del Titular :</p>
                  </div>
                  <div className="col-6 f14 line-h">
                    <p className="font-weight-bold" >{validateChange()} {isChange.typeMoney}</p>
                    <p>Scotiabank</p>
                    <p>Interbank</p>
                    <p>Cuenta Corriente</p>
                    <p>00316600300127342</p>
                    <p>REXTIE SAC</p>
                    <p>20601030013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed one" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <img className="card-img-top rounded-circle" src='https://png.icons8.com/metro/1600/2-circle-c.png' /> Rextie realizará la tranferencia al cliente
              </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <div className="pl-4 pr-4 pt-4">
                  <p className="title-c-3" >Rextie realizará la transferencia en soles al cliente</p>
                </div>
                <div className="pr-4 pl-4">
                  <hr />
                </div>
                <figure className="text-center">
                  <img className="logo-not" src="images/recibe.png" alt="logo" />
                </figure>
                <div className="row w300 m-auto">
                  <div className="col-6 f14 line-h">
                    <p>Cantidad a transferir :</p>
                    <p>Banco de Origen :</p>
                    <p>Banco de Destino :</p>
                    <p>Tipo de Cuenta :</p>
                    <p>Número de Cuenta :</p>
                    <p>Titular de Cuenta :</p>
                  </div>
                  <div className="col-6 f14 line-h">
                    <p className="font-weight-bold">{validateResult()} {isChange.typeChange}</p>
                    <p>Scotiabank</p>
                    <p>Interbank</p>
                    <p>Ahorro Dólares</p>
                    <p>123XXXXXXXXXXX123</p>
                    <p>PEPITO ROJAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/***************************************collapse******************************************/}
        <div className="text-center mt-2">
          <button type="button" className="btn btn-success px-5 my-4 ">
            <Link to="/" className="white">Aceptar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notification;