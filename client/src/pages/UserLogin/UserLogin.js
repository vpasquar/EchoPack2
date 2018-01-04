import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';

class UserLogin extends Component {
    //state just includes the articles that will be stored once we contact our API (database)

    state = {
        signup:false
    };

    
    componentDidMount() {
      console.log("component mounted")
    };

    setSignup = e => {
        e.preventDefault();
        this.setState({signup:true});
    };

    setLogin = e => { 
        e.preventDefault();
        this.setState({signup:false});
    } 


    render() {
        return (
            <div className="container">
               <div className="main-user-section">

                  <div class="signup-log-form">

                      <ul class="tab-group">
                         <li id="signup-tab"class="tab active">
                            <a onClick={this.setSignup}>Sign Up</a>
                         </li>
                         <li id="login-tab" class="tab">
                            <a onClick={this.setLogin}>Log In</a>
                         </li>
                      </ul>

                      <div class="tab-content">

                        {this.state.signup ? (

                        <div id="signup">
                              <h1> Sign Up ! </h1>
                              <form class = "signup-form" action="/api/User" method="post">
                                <div class="field-wrap">
                                  <label>
                                    First Name<span class="req">*</span>
                                  </label>
                                  <input type="text" id="new-first" required autocomplete="off" />
                                </div>
                                <div class="field-wrap">
                                  <label>
                                    Last Name<span class="req">*</span>
                                  </label>
                                  <input id="new-last" type="text"required autocomplete="off"/>
                                </div>

                               <div class="field-wrap">
                                <label>
                                 User-Name <span class="req">*</span>
                                </label>
                                <input id="new-user" type="text"required autocomplete="off"/>
                              </div>

                              <div class="field-wrap">
                                <label>
                                  Email Address<span class="req">*</span>
                                </label>
                                <input id="new-email"type="email"required autocomplete="off"/>
                              </div>
                              
                              <div class="field-wrap">
                                <label>
                                  Set A Password<span class="req">*</span>
                                </label>
                                <input id="new-pass" type="password"required autocomplete="off"/>
                              </div>
                              
                              <button type="submit" class="button button-block">Sign Up </button>
                              </form>

                        </div>   
                        ) : (
                        <div id="login">

                            <h1>Welcome Back!</h1>
                      
                            <form class= "login-form" action="/api/login" method="post">
                      
                                <div class="field-wrap">
                                  <label>
                                      Username<span class="req">*</span>
                                  </label>
                                  <input id="login-user" type="text"required autocomplete="off"/>
                                </div>
                          
                                <div class="field-wrap">
                                  <label>
                                    Password<span class="req">*</span>
                                  </label>
                                  <input id="login-pass" type="password"required autocomplete="off"/>
                                </div>
                          
                                <p class="forgot"><a href="#">Forgot Password?</a></p>
                          
                                <button type="submit" class="button button-block">Log In</button>
                      
                            </form>

                        </div>  
                        )}
                      </div>  
                  </div> 

               </div>

               <Sidebar userCount="1"  />
            </div>   
            
        );
    }
}

export default UserLogin;