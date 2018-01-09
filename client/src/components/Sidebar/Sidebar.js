import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => (
    <section className="sidebar">
	  <div className="sidecontainer">
	  <Link to="/create">
		  <div className="create-btn draw meet">
		    Create Box
		  </div>
	  </Link>
	  {props.userCount === 0 ? <span></span> : (<span className="user-count">
		  	<p>Total Users: {props.userCount}</p>
		  </span>)}

		  
	  </div>
 </section>
);

export default Sidebar;