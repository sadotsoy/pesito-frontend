import React, {Component} from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import './navbar.css';

class Navbarcustom extends Component {

  render() {
    return(
      <div className="Investment">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Pesito</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem className="navbarElement" eventKey={1} href="">HOME</NavItem>
            <NavItem eventKey={2} href="">INTRODUCTION</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown pullRight eventKey={3} title="USERX" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>PROFILE</MenuItem>
              <MenuItem eventKey={3.2}>INVESTMENT</MenuItem>
              <MenuItem eventKey={3.3}>WITHDROW</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>SIGN OUT</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default Navbarcustom;
