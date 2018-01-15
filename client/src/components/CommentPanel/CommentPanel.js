import React from 'react';
import { Link } from 'react-router-dom';
import VoteBlock from '../../components/VoteBlock';

const CommentPanel = props => (
    <div className="box-panel comment">
    	
    	<p>By: {props.userName}</p>
    	<p>{props.description}</p>
    	<p>score: {props.score}</p>
    	<VoteBlock />
	</div>
);

export default CommentPanel;