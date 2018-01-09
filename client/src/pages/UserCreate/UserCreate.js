import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';

class UserCreate extends Component {
    //state just includes the articles that will be stored once we contact our API (database)

    state = {
        bTitle: "",
        bDescription: "",
        pBox: "",
        pTitle: "",
        pContent: "",
        cStatus: true
    };

    componentDidMount() {

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
    }

    handlePostSubmit = e => {
        e.preventDefault();
        const boxQuery = {
            forumTitle: this.state.bTitle,
            forumDescription: this.state.bDescription,
        }

        const postQuery = {
            pBox: this.state.pBox,
            pTitle: this.state.pTitle,
            pCotnent: this.state.pContent
        }

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
            API.createPost(postQuery)
                .then(res => {
                    this.resetState();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    };

    handleBoxSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (

            <div className="container">
               <div className="main-user-section">

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
                              <form className = "forum-create" action="/api/box" method="post">
                                 <div className="field-wrap">
                                     <label>
                                          Box Title
                                          <span className="req">*</span>
                                     </label>
                                     <input
                                        value={this.state.bTitle}
                                        onChange={this.handleInputChange}
                                        name="fName"
                                        placeholder="First Name (required)"
                                        id="new-box"
                                     />
                                 </div>

                                 <div className="field-wrap">
                                     <label>
                                         Box Description<span className="req">*</span>
                                     </label>
                                     <input
                                         value={this.state.bDescription}
                                         onChange={this.handleInputChange}
                                         name="boxDescription"
                                         placeholder="Box Description"
                                         id="new-boxDesc" 
                                     />
                                 </div>

                                 <button 
                                     // disabled = {!loginEnabled}
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
                      
                            <form className= "post-form" action="/api/checkbox" method="post">
                      
                                <div className="field-wrap">
                                    <label>
                                        Box Name<span className="req">*</span>
                                    </label>
                                    <input
                                       value={this.state.pBox}
                                       onChange={this.handleInputChange}
                                       name="Box Name"
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
                                    <input
                                        value={this.state.pContent}
                                        onChange={this.handleInputChange}
                                        name="pContent"
                                        placeholder="Post Content" 
                                        id="post-content"
                                    />
                                </div>
                                
                                <button
                                   // disabled={!loginEnabled}
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

        );
    }
}

export default UserCreate;