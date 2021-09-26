import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Sen Financa App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Transações
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Transação
        </NavLink>
        <NavLink to="/resume" className="link" activeClassName="active">
          Resumir Transações
        </NavLink>
      </div>
    </header>
  );
};

export default Header;