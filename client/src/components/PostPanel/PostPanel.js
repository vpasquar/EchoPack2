import React from 'react';
import { Link } from 'react-router-dom';

const PostPanel = props => (
    <div className="box-panel">
    	<p>Id:{props.id}</p>
    	<h2>Post Name: {props.title}</h2>
    	<p>Description: {props.description}</p>
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default PostPanel;