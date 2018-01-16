import React from 'react';
import { Link } from 'react-router-dom';

const PostPanel = props => (
    <div className="box-panel post" key={props.id}>
    	<p className="header">{props.title}  {!props.author ? (<span>By: Unknown</span>) : (<span>{props.author}</span>)}</p>
    	<p className="body">{props.content}</p>
    	
    	
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default PostPanel;