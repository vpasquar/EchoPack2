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
        postId: "",
        activeUser: "",
        UserId: "",
        sentiment: false
    };

    componentDidMount() {

        API.checkUser()
            .then(res => {
                if (res.data.user) {

                    // console.log(res.data.user);
                    this.setState({
                        activeUser: res.data.user.userName,
                        UserId: res.data.user.id
                    })
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
                // console.log("postId" + postId)
                if (!postId) {
                    this.props.history.push('../../PostNotFound')
                } else {
                    this.setState({ postId: postId })
                    this.getComments(postId);

                    API.getCount()
                        .then(res => this.setState({ users: res.data.count }))
                        .catch(err => console.log(err));

                    API.getPostInfo(postId)
                        .then(res => this.setState({ post: res.data }))
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
    };

    handleFormSubmit = e => {
        e.preventDefault();
        // console.log("postId for comment" + this.state.postId);
        const query = {
            postId: this.state.postId,
            content: this.state.reply,
            UserId: this.state.UserId,
            userName: this.state.activeUser
        };
        API.getSentiment(query)
            .then(res => {
                // console.log(res.data);
                let senT = res.data;
                // console.log(senT);
                query.sentiment = senT.score;
                // console.log(query);
                API.createComment(query)
                    .then(res => {
                        this.setState({ reply: "" })
                        alert("comment added");
                        this.getComments(this.state.postId)
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => console.log(err));


    };

    getComments = postId => {
        API.getComments(postId)
            .then(res => {
                // console.log(res.data.comments);
                this.setState({ comments: res.data.comments })
            })
            .catch(err => console.log(err));
    };

    getUserName = userId => {
        API.getUserName(userId)
            .then(res => {
                // console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    handleLogout = () => {
        API.logoutUser()
            .then(res => {
                // console.log(res.data);
                this.setState({ activeUser: "" });
            });

    };

    sentimentTrigger = () => {
        this.setState({ sentiment: !this.state.sentiment });
        // console.log(`${this.state.sentiment}:  toggled sentiment`);
    };

    sentimentAddClass = value => {
        // console.log(typeof value);
        // switch (value) {
        //     case value > .5 && value < 1:
        //         return "positiveu"
        //         break;
        //     case value > 0 && value < .5:
        //         return "positived"
        //         break;
        //     case value > -.5 && value < 0:
        //         return "negatived"
        //         break;
        //     case value > -1 && value < -.5:
        //         return "negativeu"
        //         break;
        //     default:
        //         return "empty"
        // }
        if (value > .75 && value < 1) {
            return "positiveu";
        } else if (value > .5 && value < .75) {
            return "positivemu"
        } else if (value > .25 && value < 5) {
            return "positivemd"
        } else if (value > 0 && value < .25) {
            return "positived"
        }else if (value > -.25 && value < 0){
            return "negatived"
        }else if (value > -.5 && value < -.25) {
            return "negativemd"
        }else if (value > -.75 && value < -.5) {
            return "negativemu"
        }else if (value > -1 && value < -.75) {
            return "negativeu"
        }
    };


    render() {
        return (
            <div>
<Nav active={this.state.activeUser} handleLogout={this.handleLogout}/>
    <section className="content">      
        <div className="container">  
          <Sidebar userCount={this.state.users} sentimentTrig={this.sentimentTrigger}/>
            <div className="main-content post">
                <div className="replyTo container clean">
                    <h1>{this.props.match.params.title} </h1>
                    {this.state.post ? <h4>{this.state.post.content}</h4> : ''}
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
               {
                this.state.sentiment ?  

                <div className="container clean active">
                    {this.state.comments.map( (comment, i) => (
                        <div key={i}>
                                <CommentPanel 
                                   userName={comment.userName}
                                   createdAt={comment.createdAt}
                                   description={comment.content}
                                   score={comment.score}
                                   sentimentScore={comment.sentimentScore}
                                   sentimentClass={this.sentimentAddClass(comment.sentimentScore)}
                                /> 
                            </div>
                    ))}
                </div> :  

                <div className="container clean">
                    {this.state.comments.map( (comment, i) => (
                        <div key={i}>
                                <CommentPanel 
                                   userName={comment.userName}
                                   createdAt={comment.createdAt}
                                   description={comment.content}
                                   score={comment.score}
                                   sentimentScore={comment.sentimentScore}
                                   sentimentClass={this.sentimentAddClass(comment.sentimentScore)}
                                /> 
                            </div>
                    ))}
                </div>
            }
            </div>
        </div>
        </section>
        </div>
        );
    }
}

export default Post;