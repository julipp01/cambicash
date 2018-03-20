import React from 'react';
import HeaderCSS from './Header.css';


const Header = () => (

  <header className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <a className="navbar-brand" href="">
    <img src="img/logo-rextie.png"  className="d-inline-block align-top" alt=""/>
   
  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
          
          <li className="nav-item">
            <a className="nav-link font-size-12" href="">CUENTA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-size-12" href="">SALIR</a>
          </li>
        </ul>

      </div>
    </nav>
  </header>

)

export default Header;
