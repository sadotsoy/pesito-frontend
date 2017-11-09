import React, {Component} from 'react';
import {Button, Image, Modal, Thumbnail, Grid, Row, Col, Clearfix, PageHeader, Panel, PanelGroup, Accordion} from 'react-bootstrap';
import './estilos.css';
import i1 from './assets/imgs/1.jpeg';
import i2 from './assets/imgs/2.jpg';
import i3 from './assets/imgs/3.jpg';
import i4 from './assets/imgs/4.jpg';
import i5 from './assets/imgs/5.jpg';
import i6 from './assets/imgs/6.jpg';
import i7 from './assets/imgs/7.jpg';
import i8 from './assets/imgs/8.jpg';


class Introduction extends Component {

    constructor(props) {
    super(props);
    this.state = {
        showModal: false,
    };
  }

    getInitialState = () => {
        return { showModal: false };
    }
    close = () => {
        this.setState({ showModal: false });
    }
    open = () => {
        this.setState({ showModal: true });
    }



  render() {
    return(
    <div className="container">
    <section className="main row">
        <article className="col-xs-12 col-sm-8 col-lg-9 col-md-9">

      <div className="Introduction">
        <PageHeader>Todo lo que necesitas saber sobre CETES</PageHeader>
        <h4>¿Que son los CETES?</h4>
        <p>CETES o también conocidos como certificados de la tesorería de la federación son títulos de crédito al portador emitidos por el Gobierno federal en mercado de dinero, con un plazo máximo de un año, para fines de control del circulante y financiamiento del gasto público.</p>
        <h4>¿Cómo funcionan estos instrumentos de inversión?</h4>
            <p>Cuando adquieres un Cete le estás prestando dinero al Gobierno para que pueda pagar sus compromisos, y a cambio te llevas una ganancia o interés.</p>
        <h4>¿Cómo es la operación?</h4>
            <p>Para información del mercado, Banco de México (Banxico)  hace del conocimiento del público en general las características de las subastas, el plazo y el monto de Cetes que se van a emitir, a través de su página de Internet.</p>

            <p>Una vez cumplido con este paso, el día de la subasta los bancos y casas de bolsa ingresan sus posturas, es decir, el precio al que están dispuestos a llevarse los Cetes. Banxico le entrega los Cetes a aquellos que pagan más por ellos; en otras palabras, los otorga a quien más barato le cobre por prestarle</p>

            <p>Generalmente los Cetes se colocan a plazos de 28, 91, 182 y 364 días. Estos títulos no devengan intereses, sin embargo, la tasa de interés está implícita en la relación que existe entre su precio de compra, el valor nominal del título y su plazo a vencimiento
            .</p>
        <h4>¿Qué rendimiento puedo obtener?</h4>
            <p>Si bien los Cetes tienen un rendimiento mayor que el de las cuentas de ahorro o cheques, y los depósitos a plazo o pagarés, su rendimiento se encuentra aún por debajo de la inflación.</p>
            </div>
      </article>
    </section>

        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail src={i1} >
              <div className="caption">
                <h3>Aprenda a ahorrar</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                </p>
              </div>

              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open}
                >
                ver
            </Button>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <Thumbnail src={i1} >
              <div className="caption">
                <h3>Aprenda a ahorrar</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                </p>
              </div>
              </Thumbnail>

            </Modal.Body>

            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
             </Modal>

              </Thumbnail>
              </Col>

              <Col xs={6} md={3}>
              <Thumbnail src={i2} >
              <div className="caption">
                            <h3>¿Nuevo en finanzas?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>

            <Col xs={6} md={3}>
              <Thumbnail src={i3} >
              <div className="caption">
                            <h3>Tecnologias Emergentes</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>

            <Col xs={6} md={3}>
              <Thumbnail src={i4} >
              <div className="caption">
                            <h3>Bolsa</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>
          </Row>


          <Row>
            <Col xs={6} md={3}>
              <Thumbnail src={i5} >
              <div className="caption">
                            <h3>Aprenda a ahorrar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
              </Col>

              <Col xs={6} md={3}>
              <Thumbnail src={i6} >
              <div className="caption">
                            <h3>¿Nuevo en finanzas?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>

            <Col xs={6} md={3}>
              <Thumbnail src={i7} >
              <div className="caption">
                            <h3>Tecnologias Emergentes</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>

            <Col xs={6} md={3}>
              <Thumbnail src={i8} >
              <div className="caption">
                            <h3>Bolsa</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquam esse minus. Alias explicabo culpa rem dolore cumque officiis dolores excepturi cupiditate sunt, ipsa, aliquam iusto, libero harum eos possimus.
                            </p>
                            </div>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>



        <Accordion>
            <Panel header="¿ La inversión en Bolsa requiere importantes cantidades de dinero?" eventKey="1">
               No, en lo absoluto, hoy en dia hay herramientas al alcance de cualquiera que tenga curiosidad de invertir en la bolsa y desde una contidad tan pequeña de 100 pesos. 
            </Panel>
        </Accordion>

        <Accordion>
            <Panel header="¿ Invertir el dinero en la Bolsa, es destinarlo a la suerte?" eventKey="2">
               Si es que no deseas perder todo tu dinero, no te aconsejamos que dejes tu inversion a la suerte. Invertir no es complicado pero se necesita saber donde se esta invirtiendo.
            </Panel>
        </Accordion>

        <Accordion>
            <Panel header="¿ La inversión en Bolsa es para gente que domine el tema?" eventKey="3">
               Hoy en dia eso invertir es una habilidad que puede desarrollar cualquier persona que este dispuesto a aprender constantemente y tenga un fuerte deseo de empezar a ganar dinero de forma inteligente.  
            </Panel>
        </Accordion>

        <Accordion>
            <Panel header="¿ Cuando sea una crisis, mi patrimonio se reduce, inclusive desaparece?" eventKey="4">
               Las crisis son importantes oportunidades donde quien sabe donde meter su dinero puedo lejos de perder su dinero, aun ganar más, la diferencia esta en la inteligencia y la habilidad de tomar desiciones rapidas. 
            </Panel>
        </Accordion>

        <Accordion>
            <Panel header="¿ Inversiones típicas son mejores: inmobiliarias, comercio, préstamos personales, etc.?" eventKey="5">
               En definitiva Invertir en CETES es de las maneras más faciles y seguras en las que una persona con poca experiencia en el area podria empezar a asimilar algunos terminos de inversion. 
            </Panel>
        </Accordion>

</div>
     
     	
     
    );
  }
}

export default Introduction;
