import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

class Post extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {

    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        //GRAB POST INFORMATION BASED OFF OF PARAM PASSED
        // API.getBox(this.props.match.params.id)
        // .then(res => this.setState({box:res.data})
        // .catch(err => console.log(err));  
    }


    render() {
        return (
            <h1> sah dude post </h1>
        );
    }
}

export default Post;