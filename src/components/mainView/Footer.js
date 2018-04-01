import React from 'react';


const Footer = () => (
  <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-4 column">
              <h6 className="text-uppercase">Registrados en</h6>
              <hr className="bg-white"/>
              <ul className="list-unstyled">
                <li><a href="#">Superintendencia de Banca, Seguros y AFP</a></li>
                <li><a href="#">SUNAT REXTIE S.A.C RUC: 20601030013</a></li>
              </ul>
              <div>
          <img className="logo-secure" src="https://i0.wp.com/www.bombertech.com/wp-content/uploads/2017/03/comodo-secure-logo-new.png?ssl=1" alt="secure"/>
        </div>
            </div>
            <div className="col-xs-6 col-sm-4 column">
              <h6 className="text-uppercase">Enlaces</h6>
              <hr className="bg-white"/>
              <ul className="list-unstyled">
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Términos y Condiciones de Uso</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Libro de Reclamaciones</a></li>
              </ul>
              <div>
          <img className="logo-secure" src="https://rextie-static-prod2.s3.amazonaws.com/img/claimsbook.32f4590f35ed.png" alt="secure"/>
        </div>
            </div>
            <div className="col-xs-12 col-sm-4 column">
              <h6 className="text-uppercase">Contáctenos</h6>
              <hr className="bg-white"/>
              <ul className="list-unstyled">
                <li><a href="#"><span className="far fa-envelope"></span> info@rextie.com</a></li>
                <li><a href="#"><span className="fas fa-phone-volume"></span> (+51) (01) 642 9617 | (01) 342 2571</a></li>
                <li><a href="#"><span className="fas fa-mobile-alt"></span> (+51) 963 896 793</a></li>
                <li><a href="#"><span className="fas fa-map-marker"></span> Ricardo Angulo 745, Oficina 402</a></li>
                <li><a href="#"><span className=""></span> Urb. Corpac, San Isidro, Lima, Peru</a></li>
                <li><a href="#"><span className="far fa-clock"></span> Lunes a Sábado de 9 AM a 6 PM</a></li>
              </ul>
            </div>
          </div>
          <br />
        <span className="pull-right text-muted small d-flex justify-content-center pt-5 white"><a href="http://www.codeply.com " className="white mr-1"><span className="fas fa-copyright"></span>2016-2017 REXTIE SAC</a> Todos los derechos reservados.</span>
        </div>
      </footer>


)

export default Footer;
