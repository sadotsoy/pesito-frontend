import React, { Component } from 'react';
import { Button, Form, FormControl, ControlLabel, HelpBlock, FormGroup}  from 'react-bootstrap';

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
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password
      })
    })
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }
  render() {
    return(
      <div>
        <div className="Users">
          <h1>Users</h1>
          {this.state.users.map(user =>
          <div key = {user.id}>
            <b>{user.name}</b>
            <p>{user.email}</p>
          </div>
          )}
        </div>
        <div className="SignUp">
          <Form >
              <FieldGroup
                id="formControlsText"
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
          <Button
            bsStyle="success"
            onClick={this.onClick}
          >
            SING UP
          </Button>
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
