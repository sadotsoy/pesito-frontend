import React, {Component} from 'react';
import './css/main.css'


class Home extends Component {
  render() {
    return(
        <div>
        <div className="menu">
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About me</a></li>
            </ul>
        </div>
        <div className="intro">
        <h1>Pesito Inc.</h1>
        <h2>Learn for investing... & get money easily!!</h2>
        <div className="boton">
        <span>Find Out More</span>
        </div>
        </div>
        <div className="project">
        <h3>This project is an initiative to present in DEV.F</h3>
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
        <span>Define your own goals for investment</span>
        <div className="btnService">
        <span>Learn More</span>
        </div>
        </div>
       
        
        </div>
        </div>
        </div>
    );
  }
}

export default Home;
