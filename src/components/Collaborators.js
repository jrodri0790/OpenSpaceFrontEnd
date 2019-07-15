import React, { Component } from 'react'
import '../styles/collaborators.css'
import mediaLab from '../assets/MediaLab_logo.png'
import amchamLogo from '../assets/AMCHAM_logo.png'

class SocialMedia extends Component {
  render () {
    return (
      <div className="collaborators-section section-container">
        <div className="text-center content-container">
          <div id="collaborators" className="col-xs-12 col-sm-6 col-md-6 col-lg-7 default-section align-middle no-padding">
            Colaboradores
          </div>
          <div className="collaborator-icons-section col-xs-12 col-sm-3 col-md-3 col-lg-3 align-middle no-padding">
            <a href="http://ciespal.org/" target="_blank">
              <img className="collaborators-images"
                   alt="Centro Internacional de Estudios Superiones de Comunicación para Ámerica Latina.
                   Gestiona y negocia la cooperación técnica y financiera no reembolsable ante las fuentes
                   cooperantes internacionales y nacionales."
                   src={ mediaLab }/></a>
          </div>
          <div className="collaborator-icons-section col-xs-12 col-sm-3 col-md-3 col-lg-2 align-middle no-padding">
            <a href="https://www.amchamec.com/" target="_blank">
              <img className="collaborators-images"
                   alt="Cámara de Comercio Ecuatoriano Americana de Quito. Fomenta el desarrollo comercial y
                   de inversión entre Ecuador y los Estados Unidos de Norteamérica"
                   src={ amchamLogo }/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMedia
