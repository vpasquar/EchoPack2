import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar'

class Box extends Component {
  //state just includes the articles that will be stored once we contact our API (database)
  state = {
    box: {}

  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    //GRAB BOX INFORMATION BASED OFF OF PARAM PASSED
    // API.getBox(this.props.match.params.id)
    // .then(res => this.setState({box:res.data})
    // .catch(err => console.log(err));  
  }


  render() {
    return (
      <div>
         <h1> sah dude box </h1>
         <Sidebar />

           <Link className="" to="/Box/Post/1">
             <div>
                A Simple Post
             </div>
          </Link>

         </div>
    );
  }
}

export default Box;
