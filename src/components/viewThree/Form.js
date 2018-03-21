import React from 'react';
import FormCss from './Form.css'

const Form = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="row">
            <div className="reg-header">
              <h2 className="title-view-three">Confirmación de Datos</h2>
            </div>
            <form action id="reg_form" className="reg-page sky-form" method="post">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="4vGNgdweEbGjqB8AYXd4Vd89os019pEP" />
              <table className="table table-hover table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th className="backgraund-title-table">Tipo de Operación</th>
                    <th className="backgraund-title-table">Cliente ENVÍA</th>
                    <th className="backgraund-title-table">Cliente RECIBIRÁ</th>
                    <th className="backgraund-title-table">Tipo de Cambio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>COMPRA</td>
                    <td>1000.00 Dólares</td>
                    <td>3249.00 Soles</td>
                    <td>3,2490</td>
                  </tr>
                </tbody>
              </table>
              <section>
                <div className="row">
                  <div className="col-md-10">
                    ¿Deseas registrar una cuenta bancaria en este momento?
                </div>
                  <div className="col-md-2">
                    <button className="btn-u pull-right btn-success" type="button" onclick="openBankAccountModal()">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </section>
              <div className="row">
                <div className="col-sm-12">
                  <section>
                    <label className="label">Cuenta Bancaria Origen</label>
                    <label className="select ">
                      <select className="rextie_input" id="id_source_bank_account" name="source_bank_account">
                        <option value selected="selected">Seleccione Cuenta Bancaria Origen</option>
                      </select>
                      <i />
                    </label>
                  </section>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <section>
                    <label className="label">Cuenta Bancaria Destino</label>
                    <label className="select ">
                      <select className="rextie_input" id="id_target_bank_account" name="target_bank_account">
                        <option value selected="selected">Seleccione Cuenta Bancaria Destino</option>
                      </select>
                      <i />
                    </label>
                  </section>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div class="form-group">
                    <label for="phone-number">Celular</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend">
                          <i class="fa fa-phone"></i>
                        </span>
                      </div>
                      <input type="text" class="form-control" id="phone-number" placeholder="979052019" aria-describedby="inputGroupPrepend" required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 checkbox">
                  <label id="check_label_terms" className="checkbox ">
                    <input id="id_terms" name="terms" type="checkbox" />
                    <i />
                    <label className="label" style={{ fontSize: 14 }}>Aceptar
                    <a className="rextie_a" href="/terminos-y-condiciones" target="_blank"> Términos y Condiciones </a> y
                    <a className="rextie_a" href="/politica-de-privacidad" target="_blank"> Política de Privacidad</a>
                    </label>
                  </label>
                </div>
              </div>
              <div className="col-sm-12 text-center" style={{ marginTop: 42, marginBottom: 10 }}>
                <button className="btn-u btn-u-default btn-secondary" type="submit">Cambiar la cantidad</button>
                <button className="btn-u btn-success" type="submit">Aceptar</button>
              </div>
              <div className="col-sm-12 text-center" style={{ marginBottom: 20 }}>
                * Tipo de cambio vigente hasta 20:58
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
