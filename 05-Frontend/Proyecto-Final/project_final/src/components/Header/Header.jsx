import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <section className="logo">
        <Link to={'/'}>
          <img src={logo} alt="logo"/>
          <h1 className="title">E-Commerce</h1>
        </Link>
      </section>
      <form className="input">
        <input type="search" placeholder="Buscar producto..." className="search_input"/>
        <input type="submit" value=" " className="search_logo"/>
      </form>
      <section className="login-container">
        <button className="btn-login btn">Iniciar sesion</button>
        <button className="btn-register btn">Registrar</button>
      </section>
    </header>
  );
};

export default Header;