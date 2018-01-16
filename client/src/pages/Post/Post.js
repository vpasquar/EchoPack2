import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import CommentPanel from '../../components/CommentPanel';
import Nav from '../../components/Nav';


class Post extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        comments: [],
        counter: 0,
        reply: "",
        postId:"",
        activeUser:"",
        UserId:""
    };

    componentDidMount() {

        API.checkUser()
            .then(res => {
                if (res.data.user) {

                    console.log(res.data.user);
                    this.setState({ activeUser: res.data.user.userName, 
                    UserId:res.data.user.id })
                    //success, user exists do something
                } else {
                    alert("please login before posting comments!")
                    console.log("user not logged in");
                    //user not loggined in do something
                }
            })
            .catch(err => console.log(err));
       
        const { title } = this.props.match.params

        API.getPostId(title)
           .then(res => {
                const postId = res.data.id
                console.log("postId" + postId)
                if (!postId) {
                    this.props.history.push('../../PostNotFound')
                } else {
                    this.setState({postId:postId})
                    this.getComments(postId);
                
                     API.getCount()
                    .then(res => this.setState({ users: res.data.count }))
                    .catch(err => console.log(err));

                }
           })
           .catch(err => console.log(err));  
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log("postId for comment" + this.state.postId);
        const query = {
            postId: this.state.postId,
            content:this.state.reply,
            UserId:this.state.UserId,
            userName:this.state.activeUser
        };
        API.createComment(query)
           .then(res => {
                this.setState({ reply: "" })
                alert("comment added");
                this.getComments(this.state.postId)
            })
            .catch(err => {
                console.log(err);
            });
    };
       
    getComments = postId => {
         API.getComments(postId)
                    .then(res => {
                        console.log(res.data.comments);
                        this.setState({ comments: res.data.comments })
                    })
                    .catch(err => console.log(err));
    };

    getUserName = userId => {
      API.getUserName(userId)
              .then(res => {
                  console.log(res.data);
              })
              .catch(err => console.log(err));
    };

    handleLogout = () => {
        API.logoutUser()
            .then(res => {
                console.log(res.data);
                this.setState({ activeUser: "" });
            });

    };

    render() {
        return (
<div>
<Nav active={this.state.activeUser} handleLogout={this.handleLogout}/>
    <section className="content">      
        <div className="container">  
          <Sidebar userCount={this.state.users} />
            <div className="main-content post">
                <div className="replyTo container clean">
                    <h1>{this.props.match.params.title} </h1>
                    <textarea 
                       rows="5" 
                       cols="50" 
                       name="reply"
                       value={this.state.reply}
                       onChange={this.handleInputChange}>
                    </textarea>
                    <button
                       disabled = {!this.state.reply && !this.state.activeUser}
                       onClick  = {this.handleFormSubmit}>
                       Save
                    </button>  
                </div> 
                <div className="container clean">
                    {this.state.comments.map( (comment, i) => (
                        <div key={i}>
                                <CommentPanel 
                                   userName={comment.userName}
                                   createdAt={comment.createdAt}
                                   description={comment.content}
                                   score={comment.score}

                                /> 
                            </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
        </div>
        );
    }
}

export default Post;