import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lightblue',
  textDecoration: 'none',
  color: 'darkblue',
}

const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'white'
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
            background: 'white'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
            background: 'white'
          }}
        >Directors</NavLink>
                <NavLink
          to="/actors"
          exact
          style={link}
          activeStyle={{
            background: 'white'
          }}
        >Actors</NavLink>
      </div>
    )
};

export default NavBar;
