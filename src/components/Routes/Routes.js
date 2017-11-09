import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Users from '../Users/Users';
import Introduction from '../Introduction/Introduction';
import Investment from '../Investment/Investment';
import Goal from '../Goal/Goal';

class Routes extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/users" component = {Users} />
            <Route path = "/introduction" component = {Introduction} />
            <Route path = "/invest" component = {Investment} />
          <Route component ={Home} />
        </Switch>
    );
  }
}

export default Routes;
