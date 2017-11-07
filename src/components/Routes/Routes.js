import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Introduction from '../Introduction/Introduction';
import Investment from '../Investment/Investment';

class Routes extends Component {
  render() {
    return(
        <Switch>
          <Route exact path="/" component = {Home} />
            <Route path = "/users" component = {Users} />
            <Route path = "/introduction" component = {Introduction} />
            <Route path = "/invest" component = {Investment} />
          <Route component ={Home} />
        </Switch>
    );
  }
}

export default Routes;
