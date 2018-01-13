import React from 'react';
import { Link } from 'react-router-dom';

const PostPanel = props => (
    <div className="box-panel" key={props.id}>
    	<p>Post Name: {props.title}  {!props.author ? (<span>By: Unknown</span>) : (<span>{props.author}</span>)}</p>
    	<p>Content: {props.content}</p>
    	
    	
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default PostPanel;