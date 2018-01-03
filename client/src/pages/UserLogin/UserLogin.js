import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import {List, ListItem} from '../../components/List';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';

class UserLogin extends Component {
  //state just includes the articles that will be stored once we contact our API (database)

  state = {
    
  };

  componentDidMount() {
    
  }


  render() {
    return (
      <Row>
         <h1> sah dude usercreate </h1>
      </Row>
    );
  }
}

export default UserLogin;
