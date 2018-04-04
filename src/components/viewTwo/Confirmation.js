import React from 'react'
import { Link } from "react-router-dom";

const Confirmation = ({ isChange }) => {

  const validateChange = () => {
    const changeValue = isChange.term1 ? isChange.term1 : isChange.term2
    return changeValue;
  }

  const validateResult = () => {
    const changeResult = isChange.term1 ? isChange.result1 : isChange.result2
    return changeResult;
  }

  return (
    <div className="mb-3">
      <div className="border radius-20 p-3 w600 bg-white  mt-1">
        <div className="text-center">
          <h2 className="title-c-4  mt-1">Confirmación de datos</h2>
        </div>
        <table className="table table-hover table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>Tipo de Operación</th>
              <th>Cliente Envía</th>
              <th>Cliente Recibe</th>
              <th>Tipo de Cambio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isChange.type}</td>
              <td>{validateChange()} {isChange.typeMoney}</td>
              <td>{validateResult()} {isChange.typeChange}	</td>
              <td>{isChange.change}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>¿Deseas registrar una cuenta bancaria en este momento?</p>
        </div>
        <div className="form-group row pl-3">
          <label htmlFor="exampleFormControlSelect1">Cuenta Bancaria de Origen en dólares:</label>
          <select className="form-control col-10" id="exampleFormControlSelect1">
            <option>Seleccione Cuenta Bancaria Origen</option>
            <option>9586 5309 16 3678190093</option>
            <option>9586 5309 16 3678190094</option>
          </select>
          <div className="col-2" >
            <button className="ml-2  info-circle" data-container="body" data-toggle="popover" data-placement="bottom" data-content="La cuenta de origen indica de donde se sacará la cantidad de dinero en dólares para el cambio a soles.">
              ?
          </button>
          </div>
        </div>
        <div className="form-group row pl-3">
          <label htmlFor="exampleFormControlSelect1">Cuenta Bancaria de Destino en soles:</label>
          <select className="form-control col-10 " id="exampleFormControlSelect1">
            <option>Seleccione Cuenta Bancaria Destino</option>
            <option>7261 1719 17 0887601099</option>
            <option>7261 1719 17 0887601098</option>
          </select>
          <div className="col-2" >
            <button className="ml-2  info-circle" data-container="body" data-toggle="popover" data-placement="bottom" data-content="La cuenta de destino indica donde se depositará el monto cambiado a soles.">
              ?
          </button>
          </div>
        </div>        <div className="form-group ">
          <label htmlFor="inputCelu">Celular:</label>
          <input type="text" className="form-control" id="inputCelu" />
        </div>
        <div className="text-center">
          <input type="checkbox" /><span>Aceptar Términos y Condiciones y Política de Privacidad</span>
        </div>
        <div className="text-center mt-3">
          <button type="button" className="btn btn-success mr-2 btn-sell">
            <Link to="/" className="white">Cambiar la cantidad</Link>
          </button>
          <button type="button" className="btn btn-success px-5 btn-sell">
            <Link to="/notification" className="white">Aceptar</Link>
          </button>
        </div>
      </div>
    </div>)
}

export default Confirmation