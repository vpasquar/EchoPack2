import React from 'react';
import { Link } from 'react-router-dom';
import VoteBlock from '../../components/VoteBlock';

const CommentPanel = props => (
    <div className="box-panel comment">
    	<VoteBlock />
    	<p>Id:{props.id}</p>
    	<p>{props.description}</p>
    	<p>score: {props.score}</p>
	</div>
);

export default CommentPanel;