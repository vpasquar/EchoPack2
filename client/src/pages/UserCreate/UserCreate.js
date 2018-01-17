import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Nav from '../../components/Nav';

class UserCreate extends Component {
    //state just includes the articles that will be stored once we contact our API (database)

    state = {
        bTitle: "",
        bDescription: "",
        pBox: "",
        pTitle: "",
        pContent: "",
        cStatus: true,
        activeUser: ""
    };
    componentWillMount() {

    }

    componentDidMount() {
        API.checkUser()
            .then(res => {
                console.log(res.data);
                if (res.data.user) {
                   
                }else{
                     alert("please login before adding content");
                }
                this.setState({ 
                    activeUser: res.data.user.userName,
                    UserId: res.data.user.id
                });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    setBox = e => {
        e.preventDefault();
        this.setState({ cStatus: true });
    };

    setPost = e => {
        e.preventDefault();
        this.setState({ cStatus: false });
    };

    resetState = () => {
        this.setState({
            bTitle: "",
            bDescription: "",
            pBox: "",
            pTitle: "",
            pContent: "",
            cStatus: true
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const boxQuery = {
            forumTitle: this.state.bTitle,
            forumDescription: this.state.bDescription,
            UserId: this.state.UserId,
            userName: this.state.activeUser
        }

        const postQuery = {
            pBox: this.state.pBox,
            title: this.state.pTitle,
            content: this.state.pContent,
            UserId: this.state.UserId,
            userName: this.state.activeUser
        }
           // console.log("The following are queries sent to API");       
           // console.log(boxQuery)
           // console.log(postQuery)
        if (this.state.cStatus) {
            //Requesting Box Creation
            API.createBox(boxQuery)
                .then(res => {
                    this.resetState();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            //Requesting Post Creation
            // console.log("I've triggered...Post");
            // console.log(`Searching for ID of Box...`);
            API.getBoxId(postQuery)
                .then(res => {
                    postQuery.BoxId = res.data.id;
                    console.log(`Posting in Box ${postQuery.pBox} with an ID of ${postQuery.BoxId}`);
                    API.createPost(postQuery)
                        .then(res => {
                            this.resetState();
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
                .catch(err => console.log(err));

        }

    };

    handleBoxSubmit = e => {
        e.preventDefault();
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
            <Nav active={this.state.activeUser} handleLogout={this.handleLogout} />
            <div className="container">
               <div className="main-user-section create">

                  <div className="signup-log-form">

                      <ul className="tab-group">
                         <li id="box-tab"className="tab active">
                             <a onClick={this.setBox} name="signup" value="signup">
                               Create Box </a>
                         </li>
                         <li id="post-tab" className="tab">
                            <a onClick={this.setPost} name="login" value="login">
                              Create Post</a>
                         </li>
                      </ul>

                      <div className="tab-content">

                        {this.state.cStatus ? (

                        <div id="box-form">
                              <h1> Create a Box </h1>
                              <form className = "forum-create" action={"/api/box"} method="post">
                                 <div className="field-wrap">
                                     <label>
                                          Box Title
                                          <span className="req">*</span>
                                     </label>
                                     <input
                                        value={this.state.bTitle}
                                        onChange={this.handleInputChange}
                                        name="bTitle"
                                        placeholder="Box Title"
                                        id="new-box"
                                     />
                                 </div>

                                 <div className="field-wrap">
                                     <label>
                                         Box Description<span className="req">*</span>
                                     </label>
                                     <textarea
                                         value={this.state.bDescription}
                                         onChange={this.handleInputChange}
                                         name="bDescription"
                                         placeholder="Box Description"
                                         id="new-boxDesc" 
                                     />
                                 </div>

                                 <button 
                                     disabled = {!this.state.activeUser}
                                     onClick={this.handleFormSubmit}
                                     name="submitSignup"
                                     //type="submit" 
                                     className="button button-block">
                                     Create Box
                                 </button>
                              </form>

                        </div>

                        ) : (

                        <div id="post-form">

                            <h1>Add a Post</h1>
                      
                            <form className= "post-form" action="/api/posts" method="post">
                      
                                <div className="field-wrap">
                                    <label>
                                        Box Name<span className="req">*</span>
                                    </label>
                                    <input
                                       value={this.state.pBox}
                                       onChange={this.handleInputChange}
                                       name="pBox"
                                       placeholder="Box Name" 
                                       id="post-box"
                                    />
                                </div>
                          
                                <div className="field-wrap">
                                    <label>
                                        Post Title<span className="req">*</span>
                                    </label>
                                    <input
                                        value={this.state.pTitle}
                                        onChange={this.handleInputChange}
                                        name="pTitle"
                                        placeholder="Post Title" 
                                        id="post-title"
                                    />
                                </div>

                                 <div className="field-wrap">
                                    <label>
                                        Post Content<span className="req">*</span>
                                    </label>
                                    <textarea
                                        value={this.state.pContent}
                                        onChange={this.handleInputChange}
                                        name="pContent"
                                        placeholder="Post Content" 
                                        id="post-content"
                                    />
                                </div>
                                
                                <button
                                   disabled={!this.state.activeUser}
                                   onClick={this.handleFormSubmit}
                                   name="submitLogin"
                                   //type="submit" 
                                   className="button button-block">
                                   Create Post
                                </button>
                      
                            </form>

                        </div> 

                        )}

                      </div>  
                  </div> 

               </div>

            </div>
            </div>
        );
    }
}

export default UserCreate;