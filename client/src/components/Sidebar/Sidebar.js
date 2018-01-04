import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => (
<section className="sidebar">
	  <div className="conatiner">
		  <div className="create-btn draw meet">
		    Create Box
		  </div>
		  <span className="user-count">
		  	<p>Total Users: {props.userCount}</p>
		  </span>
	  </div>
 </section>
);

export default Sidebar;