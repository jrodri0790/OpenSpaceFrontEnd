import React from 'react'
import '../styles/key-note.css'
import rebeccaParsons from '../assets/rebecca-parson.jpg'

const KeyNote = () => {
  return (
    <div id="keyNote" className="key-note section-container">
      <div className="content-container">
        <div className="col-xs-12 no-padding">
          <div className="key-note-picture col-xs-12 col-md-7 col-lg-7 no-padding">
            <img src={rebeccaParsons} alt="Rebecca Parsons in a Conference"/>
          </div>
          <div className="key-note-bio col-xs-12 col-md-7 col-lg-6">
            <div className="bio-title">
              <div className="medium-title pink">CONOCE LA KEYNOTE</div>
              <div className="large-title pink">Dra. REBECCA PARSONS</div>
              <div className="small-title black">CHIEF TECHNOLOGY OFFICER DE THOUGHTWORKS</div>
            </div>
            <p className="bio-text font-size-medium">
              Tiene más años de experiencia en tecnología de los que le gustaría y conocimiento de desarrollo de software
              a gran escala. Recientemente fue co-autora del libro Building Evolutionary Architectures con sus colegas
              Neal Ford y Pat Kua. Antes de ThoughtWorks trabajó como profesora asistente de Ciencias de la
              Computación en University of Central Florida. Sus intereses incluyen computación paralela y distribuida,
              lenguajes de programación, lenguajes específicos de dominio, arquitectura evolutiva, algoritmos genéticos y
              ciencia computacional. Rebecca recibió una licenciatura en Informática y Economía en Bradley University,
              una maestría y un doctorado en Informática en Rice University.
            </p>
            <a className="read-more font-size-medium pink"
              href="https://www.thoughtworks.com/profiles/rebecca-parsons" target="_blank">Leer m&aacute;s</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyNote
