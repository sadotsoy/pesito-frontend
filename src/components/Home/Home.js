import React, {Component} from 'react';
import { Button, Form, FormControl, ControlLabel, HelpBlock, FormGroup, Image}  from 'react-bootstrap';
import Navbarcustom from '../Navbar/Navbarcustom';

import './css/main.css'

import img1 from './img/portfolio-1.jpg';
import img2 from './img/portfolio-2.jpg';
import img3 from './img/portfolio-3.jpg';
import img4 from './img/portfolio-4.jpg';

let FontAwesome = require('react-fontawesome');


class Home extends Component {
  render() {
    return(
        <div>
            <div className="intro">
                <h1>Pesito Inc.</h1>
                <h2>Learn for investing... & get money easily!!</h2>
                <div className="boton">
                    <span>Find Out More</span>
                </div>
            </div>
            <div className="project">
                <h2>This project is an initiative to present in DEV.F</h2>
                <h5>In this page you will find all the information about CETES investments CETES Main Page.</h5>
            </div>
            <div className="services">
                <h2 className="titulo">Our Services in Pesito Inc.</h2>
                <div className="contenedorServicios">
                    <div className="contServHijo">
                        <div><span>Goals</span></div>
                        <span>Define your own goals for investment</span>
                        <div className="btnService">
                            <span>Learn More</span>
                        </div>
                    </div>
                    <div className="contServHijo">
                        <div><span>Goals</span></div>
                        <span>Become an investor in our investment simulatort</span>
                        <div className="btnService">
                            <span>Learn More</span>
                        </div>
                    </div>
                    <div className="contServHijo">
                        <div><span>Goals</span></div>
                        <span>Drop off your money and plan your goals</span>
                        <div className="btnService">
                            <span>Learn More</span>
                        </div>
                    </div>
                    <div className="contServHijo">
                        <div><span>Goals</span></div>
                        <span>Compare your results and get more money</span>
                        <div className="btnService">
                            <span>Learn More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="workTitle">
                <h1>Our Work</h1>
            </div>
            <div className="galeriaBox">
                <Image className="imgMargin" src={img1} />
                <Image className="imgMargin" src={img2} />
                <Image className="imgMargin" src={img3} />
                <Image className="imgMargin" src={img4} />
            </div>
            <div className="btnMoreInfo">View More Items</div>
            <div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.3243436116677!2d-103.3522296645694!3d20.687135797046423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e70c115245%3A0x450af7bcfd8f920f!2sCentro%2C+44100+Guadalajara%2C+Jal.!5e0!3m2!1ses!2smx!4v1510193394227"></iframe>
            </div>
            <div className="contacto">
                <h3>Pesito Inc.</h3>
                <h5>Av Mariano Otero 408 .</h5>
                <h5>Jardines del Sol, 45050 Zapopan, Jal.</h5>
                <h5>(33) 1234-5678</h5>
                <a>
                    <h5>pesito.inc@gmail.com</h5>
                </a>
                <h4>Copyright © Pesito Inc., 2017</h4>
            </div>
        </div>
    );
  }
}

export default Home;
