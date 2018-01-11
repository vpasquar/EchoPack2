import React, { Component } from 'react';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
// import BoxPanel from '../../components/BoxPanel';
import PostPanel from '../../components/PostPanel';

class Box extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        posts: [],
        counter: 0
    };

    componentDidMount() {
        const boxTitle = {};
        boxTitle.pBox = this.props.match.params.title;
        console.log("boxid" + boxTitle.pBox);
        API.getBoxId(boxTitle)  //check if box exists, grab ID
            .then(res => {
                const boxId = res.data.id
                if (!boxId) {  //if the title pushed to page doesn't exist redirect to err page
                    this.props.history.push('/BoxNotFound');
                } else {  // box exists so grab posts and usercount. 

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

    render() {
        return (
            <section className="content">
                <div className="container">
                    <Sidebar userCount={this.state.users} />
                        <div className="container clean"> 
                            <h1> Forum: {this.props.match.params.title} </h1>
                            <div className="main-content">
                            {this.state.posts.map( (post, i) => (
                                <Link className ="" to={"/Box/Post/" + post.title} key={i}>
                                <PostPanel 
                                    key={post.id}
                                    id={post.id}
                                    createdAt={post.createdAt}
                                    content={post.content}
                                    title={post.title}
                                    author={post.authorUserId}
                                />
                                </Link>  
                            ))}
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}

export default Box;