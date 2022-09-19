import React from 'react';
import { NavLink } from 'react-router-dom';
import headerItems from './items';

import s from './header.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : `${s.link}`;
};

const Header = () => {
  const menuElements = headerItems.map(({ id, text, to }) => (
    <NavLink end className={getActiveClassName} key={id} to={to}>
      {text}
    </NavLink>
  ));

  return menuElements;
};

export default Header;
