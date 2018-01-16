import React, { Component } from 'react';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
// import BoxPanel from '../../components/BoxPanel';
import PostPanel from '../../components/PostPanel';
import Nav from '../../components/Nav'

class Box extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        posts: [],
        counter: 0,
        activeUser: ""
    };

    componentDidMount() {
        API.checkUser()
            .then(res => {
                if (res.data.user) {

                    console.log(res.data.user);
                    this.setState({ activeUser: res.data.user.userName })
                    //success, user exists do something
                } else {

                    console.log("user not logged in");
                    //user not loggined in do something
                }
            })
            .catch(err => console.log(err));

            
        const boxTitle = {};
        boxTitle.pBox = this.props.match.params.title;
        console.log("boxid" + boxTitle.pBox);
        API.getBoxId(boxTitle) //check if box exists, grab ID
            .then(res => {
                const boxId = res.data.id
                if (!boxId) { //if the title pushed to page doesn't exist redirect to err page
                    this.props.history.push('/BoxNotFound');
                } else { // box exists so grab posts and usercount. 

                    API.getPosts(boxId)
                        .then(res => {
                            console.log(res.data.posts);
                            this.setState({ posts: res.data.posts })
                        })
                        .catch(err => console.log(err));

                    API.getCount()
                        .then(res => this.setState({ users: res.data.count }))
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    }


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
                        <div className="container clean"> 
                            <h1> {this.props.match.params.title} </h1>
                            <div className="main-content">
                            
                                {this.state.posts.map( (post, i) => (
                                    <Link className ="" to={"/Box/Post/" + post.title} key={i}>
                                    <PostPanel 
                                        key={post.id}
                                        id={post.id}
                                        createdAt={post.createdAt}
                                        content={post.content}
                                        title={post.title}
                                        author={post.userName}
                                    />
                                    </Link>  
                                ))}
                          
                            </div>
                        </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Box;