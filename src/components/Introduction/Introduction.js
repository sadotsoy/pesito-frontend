import React, {Component} from 'react';
import {Button, Grid, Row, Col, Clearfix, PageHeader, Panel, PanelGroup, Accordion} from 'react-bootstrap';

class Introduction extends Component {

  render() {
    return(
      <div className="Introduction">
        <PageHeader>Todo lo que necesitas saber sobre CETES</PageHeader>
        <h2>Que son los CETES?</h2>
        
        <p>¿CETES o también conocidos como certificados de la tesorería de la federación son títulos de crédito al 
        portador emitidos por el Gobierno federal en mercado de dinero, con un plazo máximo de un año, 
        para fines de control del circulante y financiamiento del gasto público.</p>
        <br/>
        <h2>¿Cómo funcionan estos instrumentos de inversión?</h2>
        <p>Cuando adquieres un Cete le estás prestando dinero al Gobierno para que pueda pagar sus compromisos,
         y a cambio te llevas una ganancia o interés.</p>
         <br/>
         <h2>¿Cómo es la operación?</h2>
         <p>Para información del mercado, Banco de México (Banxico)  hace del conocimiento del público en 
         general las características de las subastas, el plazo y el monto de Cetes que se van a emitir, 
         a través de su página de Internet.</p>
         <br/>
		<p>Una vez cumplido con este paso, el día de la subasta los bancos y casas de bolsa ingresan sus posturas, 
		es decir, el precio al que están dispuestos a llevarse los Cetes. Banxico le entrega los Cetes a aquellos 
		que pagan más por ellos; en otras palabras, los otorga a quien más barato le cobre por prestarle
			Generalmente los Cetes se colocan a plazos de 28, 91, 182 y 364 días. Estos títulos no devengan intereses, sin embargo, la tasa de interés está implícita en la relación que existe entre su precio de compra, el valor nominal del título y su plazo a vencimiento
</p>

        <h2>Los mitos mas grandes que escucha la gente</h2>
        


         <strong>*Se necesita ser un experto de la bolsa para invertir?</strong> 
         	<p>la verdad no es necesario, solo con entender unos conceptos basicos y tener un poco de sentido comun es suficiente 
         	para empezar a invertir en tu futuro</p>
      </div>
     
     	
     
    );
  }
}

export default Introduction;
