import React from 'react';
import { Link } from 'react-router-dom';

const BoxPanel = props => (
    <div className="box-panel">
    	{/*<p>Id:{props.id}</p>*/}
    	<h4>Box Name: {props.title}</h4>
    	<p>Description: {props.description}</p>
    	{/*<p>Sentiment Score: {props.sentimentScore}</p>*/}
	</div>
);

export default BoxPanel;