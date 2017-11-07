import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Users from '../Users/Users';

class Routes extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/" component = {Home} />
            <Route path = "/users" component = {Users} />
          <Route component ={Home} />
        </Switch>
    );
  }
}

export default Routes;
