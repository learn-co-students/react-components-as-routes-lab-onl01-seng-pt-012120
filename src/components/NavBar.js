import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      {['home', 'movies', 'directors', 'actors'].map((page, index) => {
        return(
          <NavLink
            key={index}
            to={page==='home'? '/' : '/'+page}
            exact
            style={{backgroundColor: 'blueviolet', textDecoration: 'none', padding: '3px', border: '2px'}}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </NavLink>
          
        )
      })}
    </div>
  );
};

export default NavBar;
