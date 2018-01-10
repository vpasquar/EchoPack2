import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import CommentPanel from '../../components/CommentPanel';

class Post extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        comments: [],
        counter: 0,
        reply: ""
    };

    componentDidMount() {
        API.getCount()
            .then(res => this.setState({ users: res.data.count }))
            .catch(err => console.log(err));

        const { id, title } = this.props.match.params
        console.log("postid" + id)

        API.getComments(id)
            .then(res => {
                console.log(res.data.comments);
                this.setState({ comments: res.data.comments })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const query = {
            postId: window.location.pathname.split("/").pop(),
            content: this.state.reply
        }
        console.log(query);

        API.createComment(query)
            .then(res => {
                this.setState({ reply: "" })
                alert("comment added");
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (

            <section className="content">
          
        <div className="container">  
            <div className="main-content">
            <div className="replyTo container clean">
                <h1> Post Title: {this.props.match.params.title} </h1>
                <textarea 
                   rows="5" 
                   cols="50" 
                   name="reply"
                   value={this.state.reply}
                   onChange={this.handleInputChange}>
                </textarea>
                <button
                   disabled = {!this.state.reply}
                   onClick  = {this.handleFormSubmit}>
                   Save
                </button>  
            </div> 
            <div className="container clean">
                {this.state.comments.map( (comment, i) => (
                        <CommentPanel 
                           key={comment.id}
                           id={comment.id}
                           createdAt={comment.createdAt}
                           description={comment.content}
                        /> 
                ))}
            </div>
                
                
            </div>
           <Sidebar userCount={this.state.users} />
        </div>
        </section>
        );
    }
}

export default Post;