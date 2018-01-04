import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <Link className="main" to="/">
      EchoPack
    </Link>
    <div className="links" id="navbarNav">
      <ul className="">
        <li className="">
          <Link className="" to="/Box">
            Forum
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
