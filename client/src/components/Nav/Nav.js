import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
    <nav className="main-nav">
    <Link className="main" to="/">
      <div className="logo">

      </div>
    </Link>
    <div className="links" id="navbarNav">
      <ul className="">
      {props.active === "" ? 
        <li className="login-item">
          <Link className="" to={"/login"}>
             Login/Signup
          </Link>   
        </li> : 
        <li className="login-item">
           <Link to={"/"} className="" onClick={props.handleLogout}>
             Logout
          </Link>   
        </li>}
        
      </ul>
    </div>
  </nav>
);

export default Nav;