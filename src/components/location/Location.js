import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import CenterMapButton from './CenterMapButton'
import LinkButton from '../buttons/LinkButton'
import '../../styles/location.css'

const GMAPS_ZOOM = 20
const centerFocus = { lat: -0.192275, lng: -78.482631 }

class Location extends Component {
  constructor (props) {
    super(props)
    this.onMapLoaded = this.onMapLoaded.bind(this)
    this.state = { scale: 1 }
  }

  onMapLoaded (instance) {
    this.googleMap = instance.map
    let centerControlDiv = document.createElement('div')
    centerControlDiv.className = 'center-btn-wrapper'
    new CenterMapButton(centerControlDiv, this.googleMap, centerFocus)
    centerControlDiv.index = 1
    this.googleMap.controls[instance.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv)
  }

  render () {
    return (
      <div id="location" className="location section-container">
        <div className="content-container">
          <div className="col-xs-12 no-padding">
            <div className="location-info col-xs-12 col-md-5 col-lg-5">
              <div className="large-title pink">CÓMO LLEGAR</div>
              <div>
                <div className="location-title font-size-small">DIRECCIÓN</div>
                <div className="location-text font-size-medium">
                  <b>CIESPAL</b> <br/>
                  Diego de Almagro 170135 y Andrade Marin <br/>
                  Quito - Ecuador - 170515
                </div>
                <div className="location-title font-size-small">HORARIO</div>
                <div className="location-text font-size-medium">Sábado 10 de Noviembre <br/> 9:00-18:30</div>
                <div className="location-title font-size-small">TRANSPORTE PÚBLICO</div>
                <div className="location-text font-size-medium"><b>Ecovía:</b> Plaza Argentina</div>
                <div className="button-location-container col-xs-12 no-padding">
                  <LinkButton text="ABRIR EN GOOGLE MAP" class="location-button"
                              url="https://www.google.com/maps/place/CIESPAL/@-0.1922696,-78.4837251,18z/data=!4m5!3m4!1s0x91d59a7a47d3a513:0xd547afeca6c5200a!8m2!3d-0.192275!4d-78.4826308"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-7 no-padding">
              <div className="map-container">
                <GoogleMapReact
                  yesIWantToUseGoogleMapApiInternals={true}
                  bootstrapURLKeys={{ key: 'AIzaSyBZfMdx14SuTIgDWRYIo6eUMdUS4YJFLwM' }}
                  center={centerFocus}
                  defaultCenter={centerFocus}
                  defaultZoom={GMAPS_ZOOM}
                  onGoogleApiLoaded={this.onMapLoaded}
                  gestureHandling="greedy">
                  <MapMarker lat={centerFocus.lat} lng={centerFocus.lng} key={"1"} scale={1} />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Location
