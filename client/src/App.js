import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Box from './pages/Box';
import Post from './pages/Post';
import NoMatch from './pages/NoMatch';
// import Nav from './components/Nav';
import UserLogin from './pages/UserLogin';
import UserCreate from './pages/UserCreate';

const App = () => (
  <Router>
  <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Box/:title/" component={Box} />
        <Route exact path="/Box/Post/:title/" component={Post} />
        <Route exact path="/login" component={UserLogin} />
        <Route exact path="/create" component={UserCreate} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
