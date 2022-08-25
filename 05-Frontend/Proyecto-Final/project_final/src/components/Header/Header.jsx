import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Header = ({getId}) => {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (search.trim().length <= 1 ) return;

    getId(search.trim());

    setSearch('')
  };

  return (
    <header>
      <section className="logo">
        <Link to={'/'}>
          <img src={logo} alt="logo"/>
          <h1 className="title">E-Commerce</h1>
        </Link>
      </section>
      <form className="input" onSubmit={onSubmit}>
        <input type="search" value={search} placeholder="Buscar producto..." className="search_input" onChange={onChange}/>
        <input type="submit" value="buscar" className="search_logo" />
      </form>
      <section className="login-container">
        <button className="btn-login btn">Iniciar sesion</button>
        <button className="btn-register btn">Registrar</button>
      </section>
    </header>
  );
};

export default Header;