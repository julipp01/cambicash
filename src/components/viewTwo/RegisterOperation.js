
import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const RegisterOperation = ({inputUsd, inputPen, urlPen, urlUsd, usd, pen, intercambiar, setInput}) => {
  return (
    <div className="card-body padding-register">
      <a href="#" className="btn btn-primary btn-register">Compra: 3.2490</a>
      <a href="#" className="btn btn-success btn-register">Venta: 3.2790</a>
      <div className="conv-wrap">
        <br />
        <div className="conv-cont" id="widget">
          <form name="frm" className="cov-frm" action="/fxops/create" method="get">
            <div className="cov-inp-bx">
              <div className="col-lg-7 col-md-6 col-sm-7 col-xs-6" id="widget_source_amount">
                <label className="cov-frm-labeli">Tengo</label>
                <input className="cov-frm-input" id="id_source_amount" maxLength={20} name="source_amount" type="text"   onChange={(evt) => {setInput(evt.target.value)}}/>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-5 col-xs-6" id="widget_source_currency">
                <input id="id_source_currency" name="source_currency" type="hidden" />
                <p className="fxop_widget_currency">
                  <span id="flag_source_currency">
                    <img src={urlUsd} width="50px" />
                  </span>
                  <span id="fxop_widget_source_currency_text" className="widget_currency_text">{usd}</span>
                </p>
              </div>
            </div>
            <div className="cov-inp-bx">
              <div className="col-lg-7 col-md-6 col-sm-7 col-xs-6" id="widget_target_amount">
                <label className="cov-frm-labeli">Quiero</label>
                <input className="cov-frm-input" id="id_target_amount" maxLength={20} name="target_amount" type="text" />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-5 col-xs-6" id="widget_target_currency">
                <input id="id_target_currency" name="target_currency" type="hidden" defaultValue="PEN" />
                <p className="fxop_widget_currency">
                  <span>
                    <img src={urlPen} width="50px"/>
                  </span>
                  <span className="widget_currency_text">{pen}</span>
                </p>
              </div>
            </div>
          </form>
          <div id="fxrate_div_exchange">
            <a href="#" className="btn btn-u" id="btn_exchange" onClick={intercambiar}>
              <img src="https://rextie-static-prod2.s3.amazonaws.com/img/currency_exchange.d49dcbf54c50.png" />
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-success btn-register btn-rextie"><Link to="/MainViewThree" className="btn-link-no">Registrar Operacion</Link></a>
    </div>
  );
}

const mapStateToProps = ({ inputUsd, inputPen, urlUsd, urlPen, usd, pen}) => ({
  inputUsd,
  inputPen,
  urlUsd, 
  urlPen, 
  usd, 
  pen,
});

const mapDispatchToProps = (dispatch) => ({
  intercambiar: () => {
    dispatch({ type: 'INTERCAMBIAR'})
  },
  setInput: (newInput) => {
/*     console.log(newInput) */
    dispatch({type: 'CALCULAR', newInput})
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterOperation);