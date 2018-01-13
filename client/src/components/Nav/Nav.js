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
        {/*<li className="">
                  <Link className="" to="/Box">
                    Dead Link
                  </Link>
                </li>
                <li className="">
                  <Link className="" to={"/Box/1"}>
                    Forum 1
                  </Link>
                </li>*/}
      {props.active === "" ? 
        <li className="login-item">
          <Link className="" to={"/login"}>
             Login/Signup
          </Link>   
        </li> : 
        <li className="login-item">
           <a className="" onClick={props.handleLogout}>
             Logout
          </a>   
        </li>}
        
      </ul>
    </div>
  </nav>
);

export default Nav;