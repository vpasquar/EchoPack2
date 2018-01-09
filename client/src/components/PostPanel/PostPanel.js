import React from 'react';
import { Link } from 'react-router-dom';

const PostPanel = props => (
    <div className="box-panel" key={props.id}>
    	<h2>Post Name: {props.title}</h2>
    	<p>Content: {props.content}</p>
    	{!props.author ? (<p>By: Unknown</p>) : (<p>{props.author}</p>)}
    	
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default PostPanel;