import React from 'react';

const Menu = () => (
  <div className="col-sm-3 col-md-3">
    <h4 className="text-center message-user">¡REXTIE piensa en tu seguridad y comodidad!</h4>
    <div className="panel-group" id="accordion">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span className="glyphicon glyphicon-user">
            </span>Cuenta Personal</a>
          </h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse in">
          <div className="panel-body">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-center">
                    <img className="img-circle img-user" src='https://yt3.ggpht.com/a-/AK162_47gJcGTo1_xxqF7k26x09tqC2gIAoHtcnzyw=s900-mo-c-c0xffffffff-rj-k-no' />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <p>Araceli Cueva</p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <span>DNI:</span>
                    <span> 76437858</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <span className="glyphicon glyphicon-edit" /><a href="#">Información Personal</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading" id="color-green">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#"><span className="glyphicon glyphicon-play">
            </span>Nueva Operación</a>
          </h4>
        </div>
        {/* <div id="collapseTwo" className="panel-collapse collapse">
          <div className="panel-body">
            <table className="table">
              <tbody><tr>
                <td>
                  <a href="http://www.jquery2dotnet.com">Orders</a> <span className="label label-success">$ 320</span>
                </td>
              </tr>
                <tr>
                  <td>
                    <a href="http://www.jquery2dotnet.com">Invoices</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="http://www.jquery2dotnet.com">Shipments</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="http://www.jquery2dotnet.com">Tex</a>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div> */}
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#"><span className="glyphicon glyphicon-list-alt">
            </span>Operaciones Históricas</a>
          </h4>
        </div>
        {/* <div id="collapseThree" className="panel-collapse collapse">
          <div className="panel-body">
            <table className="table">
              <tbody><tr>
                <td>
                  <a href="http://www.jquery2dotnet.com">Change Password</a>
                </td>
              </tr>
                <tr>
                  <td>
                    <a href="http://www.jquery2dotnet.com">Notifications</a> <span className="label label-info">5</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="http://www.jquery2dotnet.com">Import/Export</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-trash text-danger" /><a href="http://www.jquery2dotnet.com" className="text-danger">
                      Delete Account</a>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </div> */}
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span className="glyphicon glyphicon-lock">
            </span>Cuentas Bancarias</a>
          </h4>
        </div>
        <div id="collapseFour" className="panel-collapse collapse">
          <div className="panel-body">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-credit-card" /><a href="#">Personales</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-credit-card" /><a href="#">Terceros</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="glyphicon glyphicon-credit-card" /><a href="#">Rextie</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Menu;
