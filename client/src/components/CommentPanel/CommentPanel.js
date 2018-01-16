import React from 'react';
import { Link } from 'react-router-dom';
import VoteBlock from '../../components/VoteBlock';

const CommentPanel = props => (
    <div className="box-panel comment">
    	
    	<p className="header">{props.userName}</p>
    	<p className="body">{props.description}</p>
    	<p className="score">score: {props.score}</p>
    	<VoteBlock />
	</div>
);

export default CommentPanel;