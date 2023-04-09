/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ava from '../assets/images/ava.jpg';

import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={ava} alt={ava} />
        <nav className="navbar">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/new" end>
            New Card
          </NavLink>
          <NavLink to="/form" end>
            Form
          </NavLink>
          <NavLink to="/about" end>
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
