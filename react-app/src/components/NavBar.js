
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <NavLink to='/' activeClassName='active'>
            <h1>Looks like this page doesn't exist!</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
