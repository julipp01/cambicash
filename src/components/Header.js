import React from 'react';

const Header = () => (
  <header className="">
    <nav className="navbar navbar-default nav-color">
      <div className="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="">
            <img src="images/logo.png" className="d-inline-block align-top img-responsive logo" alt="" />
          </a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="li-hover"><a href="#">CUENTA</a></li>
            <li className="li-hover"><a href="#">SALIR</a></li>
          </ul>
        </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
    </nav>
  </header>
)

export default Header;
