import React, {Component} from 'react';
import Navbarcustom from '../Navbar/Navbarcustom';
import {Jumbotron, Button, Grid, Col, Row} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import './investment.css';

class Investment extends Component {

  render() {
    return(
      <div className="Investment">
        <Navbarcustom></Navbarcustom>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3}>
              <Jumbotron className="customJumbotron">
                <h1 className="jumbotronElement">CETES</h1>
                <p className="jumbotronElement">Títulos regulados por la secretaria de hacienda y crédito publico que la facultad de colocarlos a descuento o bajo par.</p>
                <p><Button className="jumbotronButton" bsStyle="info">MAS INFORMACION</Button></p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className="formCustom">
            <Col xs={1} xsOffset={5}>
              <FormControl
                name="money"
                type="text"
                placeholder="$100"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={2} xsOffset={5}>
              <b className="cantmin">Cantidad Mínima</b>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Investment;
