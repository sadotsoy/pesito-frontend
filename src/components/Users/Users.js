import React, { Component } from 'react';

import { Button, Form, FormControl, ControlLabel, HelpBlock, FormGroup, Image, ButtonToolbar}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Users.css";
import bG from './bg.jpg';

const request = require('superagent');

class Users extends Component {
  state = {
    users: [],
    createUser: {
      name: '',
      email: '',
      password: ''
    }
  }

  onChange = (e) => {
    let createUser = this.state.createUser;
    const field = e.target.name
    createUser[field] = e.target.value;
    this.setState({createUser});
  }

  onClick = () => {
    let user = this.state.createUser;
    request
      .post('http://localhost:3001/api/users')
      .send({
        "user": {
          "name": user.name,
          "email": user.email,
          "password": user.password
        }
      })
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
      });
  }

  render() {
    return(
      <div>
      <Image src={bG} responsive/>
        <div id="cover">
          <div id="container">
              <div className="Users" id="signText">
                <h1>Sign up!</h1>
                {this.state.users.map(user =>
                <div key = {user.id}>
                  <b>{user.email}</b>
                  <p>{user.name}</p>
                </div>
                )}
              </div>
              <div className="SignUp" id="signForm">
                <Form >
                    <FieldGroup
                      id="formControlsName"
                      name="name"
                      type="text"
                      label="Name"
                      placeholder="Enter name"
                      onChange={this.onChange}
                    />
                    <FieldGroup
                      id="formControlsEmail"
                      name="email"
                      type="email"
                      label="Email address"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                    <FieldGroup
                      id="formControlsPassword"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Enter password"
                      onChange={this.onChange}
                    />
                </Form>
                <ButtonToolbar>
                  <Link to ="/introduction">
                    <Button id="submitButton" bsStyle="primary" onClick={this.onClick} > Submit </Button>
                  </Link>
                </ButtonToolbar>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
export default Users;
