import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Header = ({ getSearch, isUserLogin, dataUser }) => {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (search.trim().length <= 1) return;

    getSearch(search.trim());

    setSearch('');
  };

  const onClick = () => {
    getSearch('');
  };

  return (
    <header>
      <section className="logo">
        <Link to="/" onClick={onClick}>
          <img src={logo} alt="logo" />
          <h1 className="title">E-Commerce</h1>
        </Link>
      </section>
      <form className="input" onSubmit={onSubmit}>
        <input type="search" value={search} placeholder="Buscar producto..." className="search_input" onChange={onChange} />
        <input type="submit" value="buscar" className="search_logo" />
      </form>
      <section className="btn-container">
        {isUserLogin ? (
          <h1>
            {dataUser.first_name}
            {' '}
            {dataUser.last_name}
          </h1>
        ) : (
          <>
            <Link to="/login"><button type="submit" className="btn-login btn">Iniciar sesion</button></Link>
            <Link to="/signup"><button type="submit" className="btn-register btn">Registrar</button></Link>
          </>
        )}
      </section>
    </header>
  );
};

export default Header;
