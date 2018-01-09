import React from 'react';
import { Link } from 'react-router-dom';

const CommentPanel = props => (
    <div className="box-panel">
    	<p>Id:{props.id}</p>
    	<h2>content: {props.description}</h2>   	
	</div>
);

export default CommentPanel;