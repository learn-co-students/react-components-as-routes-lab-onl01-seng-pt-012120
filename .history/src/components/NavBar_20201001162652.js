import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' />
      <NavLink to='/actors' />
      <NavLink to='/directors' />
      <NavLink to='/movies' />
    </div>
  );
};

export default NavBar;
