import React from 'react';
import { Link } from "react-router-dom";


const List = () => (

  <div className="Menu">
    <ul className="pl-0">
      <li className="bg-green "> <Link to="/" className="white"><span className="fas fa-angle-right mr-1 "></span> Nueva Operación</Link></li>
      <li className="bg-white"><Link to="/info"><span className="fas fa-user text-primary"></span> Información Personal</Link></li>
      <li className="bg-white"><Link to="/history"><span className="fas fa-id-card text-primary"></span> Operaciones Históricas</Link></li>
      <li className="bg-white"><Link to="/cuentas"><span className="fas fa-credit-card text-primary"></span> Cuentas Bancarias Personales</Link></li>
      <li className="bg-white"><Link to="/terceros"><span className="fas fa-credit-card text-primary"></span> Cuentas Bancarias de Terceros</Link></li>
      <li className="bg-white"><Link to="/cuentarextie"><span className="fas fa-credit-card text-primary"></span> Cuentas Bancarias de Rextie</Link></li>
    </ul>
  </div>

)

export default List;
