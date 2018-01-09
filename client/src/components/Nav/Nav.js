import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
    <Link className="main" to="/">
      <div className="logo">

      </div>
    </Link>
    <div className="links" id="navbarNav">
      <ul className="">
        <li className="">
          <Link className="" to="/Box">
            Dead Link
          </Link>
        </li>
        <li className="">
          <Link className="" to={"/Box/1"}>
            Forum 1
          </Link>
        </li>
        <li className="">
          <Link className="" to={"/userauth"}>
             Login/Signup
          </Link>   
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;