import React, { Component } from 'react';
import { Button, Form, FormControl, ControlLabel, HelpBlock, FormGroup, Image, ButtonToolbar}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";
import bG from './bg.jpg';


class Login extends Component {
  state = {
    login: [],
    loginUser: {
      email: '',
      password: ''
    }
  }

  onChange = (e) => {
    let loginUser = this.state.loginUser;
    const field = e.target.name
    loginUser[field] = e.target.value;
    this.setState({loginUser});
  }

  onClick = () => {
    let login = this.state.loginUser;
    console.log(login);
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: login.email,
        password: login.password
      })
    })
  }

  render() {
    return(
      <div>
      <Image src={bG} responsive/>
        <div id="cover">
          <div id="container">
              <div className="Login" id="signText">
                <h1>Sign in</h1>
                {this.state.login.map(user => //esta parte no sé si omitirla
                <div key = {user.id}>
                  <b>{user.email}</b>
                  <p>{user.name}</p>
                </div>
                )}
              </div>
              <div className="SignIn" id="signForm">
                <Form >
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
                    <Button id="enterButton" bsStyle="primary" onClick={this.onClick} > Enter </Button>
                    <Link to ="/users">
                      <Button id="btnRegister" active>Please register</Button>
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
export default Login;
