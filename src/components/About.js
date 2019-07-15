import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div>
      <div id="about" className="about section-container">
        <div className="content-container">
          <div className="col-xs-12 no-padding">
            <div className="title-box large-title pink">SOBRE EL XCONF 2018
              <div className="border-line"
                   data-aos="zoom-in-right"
                   data-aos-offset="50"
                   data-aos-delay="20"
                   data-aos-duration="1000"
                   data-aos-easing="ese-in-out"
                   data-aos-mirror="true"
                   data-aos-once="false"
                   data-aos-anchor-placement="left-left"/>
            </div>
          </div>
          <p className="about-description col-xs-12 col-sm-6 col-lg-5 font-size-medium no-padding">
            XConf es una conferencia para tecnólogos apasionados que están buscando inspiración
            y la oportunidad de conectarse con sus colegas. Descubre y aprende en un día las ideas
            más recientes de ThoughtWorks y sus colaboradores.
            <br></br>
            <br></br>
            Después de 8 años de éxito global, ThoughtWorks XConf tendrá lugar por segunda vez en
            Latinoamérica, en la ciudad de Quito, Ecuador.
          </p>
        </div>
        <div className="about-map-image hidden-xs col-sm-push-4 col-md-push-6 col-lg-push-5"
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="800"
            data-aos-easing="ese-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
        </div>
      </div>
      <div className="note section-container">
        <div className="about-note">A diferencia de otros eventos este es solamente acerca de tecnología</div>
      </div>
    </div>
  )
}

export default About
