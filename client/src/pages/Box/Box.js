import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import BoxPanel from '../../components/BoxPanel';
import PostPanel from'../../components/PostPanel';

class Box extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        posts: [],
        counter: 0
    };

    componentDidMount() {
        API.getCount()
            .then(res => this.setState({ users: res.data.count }))
            .catch(err => console.log(err));

        const boxId = this.props.match.params.id
        console.log("boxid" + boxId)
       
        API.getPosts(boxId)
            .then(res => { 
                console.log(res.data.posts);
                this.setState({ posts: res.data.posts })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (

        <section className="mainpage">
          
        <div className="container">
            <h1> Forum: {this.props.match.params.title} </h1>
            <div className="main-content">
                {this.state.posts.map( (post, i) => (
                    <Link className ="" to={"/Box/Post/" + post.title + "/" + post.id}>
                        <PostPanel 
                           key={post.id}
                           id={post.id}
                           createdAt={post.createdAt}
                           description={post.content}
                           title={post.title}
                        />
                    </Link>  
                ))}
             
            </div>
           <Sidebar userCount={this.state.users} />
        </div>
      </section>
        );
    }
}

export default Box;