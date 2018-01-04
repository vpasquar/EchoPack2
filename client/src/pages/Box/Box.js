import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar'

class Box extends Component {
  //state just includes the articles that will be stored once we contact our API (database)
  state = {
    
  };

  componentDidMount() {
    
  }


  render() {
    return (
      <div>
         <h1> sah dude box </h1>
         <Sidebar />
         </div>
    );
  }
}

export default Box;
