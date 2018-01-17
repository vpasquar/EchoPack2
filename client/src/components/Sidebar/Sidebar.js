import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => (
    <section className="sidebar">
	  <div className="sidecontainer">
		  <Link to="/create">
			  <div className="create-btn draw meet">
			    Create
			  </div>
		  </Link>
		  {props.userCount == 0 ? 
		  	<span></span> : 
		  	(<span className="user-count">
			  	<p>Total Users: {props.userCount}</p>
			  </span>)}

		  {props.sentimentTrig ? 
		  	<div>
		  	<div onClick={props.sentimentTrig} className="create-btn draw meet">
			    Sentiment this page!
			  </div> 
				  <div className="gradient-container">
					  <div className="gradient-guide">
					  	<h2>Sentiment Guide</h2>
					  	<div className="color-scheme"></div>
					  	<div className="markers">
					  		<div className="top">Positive</div>
					  		<div className="middle">Neutral</div>
					  		<div className="bottom">Negative</div>
					  	</div>
					  </div>
				  </div>
			  </div>
			  : ''}
		  	
			  
	  </div>
 </section>
);

export default Sidebar;