import React from 'react'
import LinkButton from './buttons/LinkButton'
import '../styles/spacer.css'

const Spacer = () => {
  return (
    <div id="spacer" className="spacer section-container">
      <div className="col-xs-12">
        <div className="space-text col-xs-12 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 ">
          El evento tecnológico más importante de Latinoamérica
        </div>
        <div className="button-container col-xs-12">
          <LinkButton text="Reserva tu entrada" class="spacer-button"/>
        </div>
      </div>
    </div>
  )
}

export default Spacer
