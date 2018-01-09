import React from 'react';
import { Link } from 'react-router-dom';

const BoxPanel = props => (
    <div className="box-panel">
    	<p>Id:{props.id}</p>
    	<h2>Box Name: {props.title}</h2>
    	<p>{props.content}</p>
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default BoxPanel;