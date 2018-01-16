import React from "react";
import Nav from '../../components/Nav';

const NoMatch = props =>
          <div>
          <Nav active={props.activeUser} handleLogout={""}/>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          </div>;

export default NoMatch;
