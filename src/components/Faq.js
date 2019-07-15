import React, { Component } from 'react'
import '../styles/faq.css'

class Faq extends Component {
  render () {
    const paymentUrl="https://bit.ly/XConfLA2018"
    return (
      <div id="faq" className="faq-section section-container white">
        <div className="content-container">
          <div className="title-box large-title">PREGUNTAS FRECUENTES</div>
          <div className="faq">
            <p className="faq-question font-size-medium">¿Dónde puedo comprar mis entradas?</p>
            <p className="faq-answer font-size-medium">Adquiere tus entradas en&nbsp;
              <a href={paymentUrl} target="_blank">Buen Plan</a>. Puedes pagar con tarjeta de crédito,
            débito o transferencia bancaria. Si tienes algún problema o duda acerca de la compra de entradas escríbenos
            a:&nbsp;mlalama@thoughtworks.com</p>
            <br></br>

            <p className="faq-question font-size-medium">¿Cómo recibiré mi entrada?</p>
            <p className="faq-answer font-size-medium">Una vez que hagas la compra a través de &nbsp;
              <a href={paymentUrl} target="_blank">Buen Plan</a>, tu entrada te llegará
              por correo electrónico y podrás presentarla desde tu dispositivo (celular/tablet) o impresa,
              el día del evento.
            </p>
            <br></br>

            <p className="faq-question font-size-medium">¿Está incluida la alimentación?</p>
            <p className="faq-answer font-size-medium">Sí, te daremos un break en la mañana, almuerzo y otro break en la tarde. Si
              tienes alguna restricción alimentaria por favor envíanos un correo a:&nbsp;
              <a className="mail-link"
                 href="mailto:mlalama@thoughtworks.com?subject=XConf%202017%20FAQ">mlalama@thoughtworks.com</a>.
            </p>
            <br></br>

            <p className="faq-question font-size-medium">¿Cuándo y dónde es el registro para la conferencia?</p>
            <p className="faq-answer font-size-medium">El registro será a las 8:00 am del Sábado 10 de Noviembre en las mismas
              instalaciones de CIESPAL.</p>
            <br></br>

            <h3 className="faq-question font-size-medium">¿Tienes otras dudas?</h3>
            <p className="faq-answer font-size-medium">Escríbenos a:&nbsp;
              <a className="mail-link"
                 href="mailto:mlalama@thoughtworks.com?subject=XConf%202017%20FAQ">mlalama@thoughtworks.com</a>
            </p>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Faq
