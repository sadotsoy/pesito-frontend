import React, { Component } from 'react';
import {
  Button,
  Form,
  FormControl,
  ControlLabel,
  HelpBlock,
  FormGroup,
  InputGroup,
  Grid,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import './style.css';

import imgViajar from './assets/viajar.png';
import imgSGMM from './assets/sgmm.jpg';
import imgUniversidad from './assets/universidad.png';

class Goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: {
        name: '',
        price: 0,
        period: 0,
      },
    };
  }

  onChange = (e) => {
    const { goal } = this.state;
    const field = e.target.name;
    goal[field] = e.target.value;
    this.setState({ goal });
  }

  onClick = () => {
    const { goal } = this.state;
    console.log(goal);
  }

  render() {
    return (<div className="goals">
      <div className="title">
        <h1>Metas</h1>
        <h2>Añade tu meta</h2>

        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src={imgViajar} thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={imgSGMM} thumbnail />
            </Col>
            <Col xs={6} md={4}>
              <Image src={imgUniversidad} thumbnail />
            </Col>
          </Row>
        </Grid>
      </div>

      <div className="form">
        <Form>
          <FieldGroup
            id="name"
            name="name"
            type="text"
            label="Mi meta:"
            placeholder="Viajar a ... / Comprar ..."
            onChange={this.onChange}
          />
          <FormGroup id="period">
            <ControlLabel>Tiempo:</ControlLabel>
            <InputGroup>
              <FormControl
                name="period"
                type="text"
                placeholder="18 / 12 / 36"
                onChange={this.onChange}
              />
              <InputGroup.Addon>meses</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup id="price">
            <ControlLabel>Presupuesto:</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl
                name="price"
                type="text"
                placeholder="10000 / 2000"
                onChange={this.onChange}
              />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <div className="button">
            <Button
              bsStyle="success"
              onClick={this.onClick}
            >
              Invertir
            </Button>
          </div>
        </Form>
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

export default Goal;
