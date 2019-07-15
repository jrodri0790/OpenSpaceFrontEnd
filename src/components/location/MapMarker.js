import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogoIcon from '../../assets/svg/logo-icon.svg'
import MapMarkerIcon from '../../assets/svg/map-marker.svg'
import '../../styles/map-marker.css'

class MapMarker extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const contrast = 1
    const scale = this.props.scale
    return (
      <div className="pin-bubble" style={{transform: `scale(${scale} , ${scale})`,
        WebkitTransform: `scale(${scale} , ${scale})`,
        filter: `contrast(${contrast})`,
        WebkitFilter: `contrast(${contrast})`}}>
        <div className="pin-logo" style={{backgroundImage: "url('"+MapMarkerIcon+"')"}}>
          <img className="logo-icon" src={LogoIcon} alt="X" />
        </div>
        <div className="location-title title">
          CIESPAL
        </div>
      </div>
    )
  }
}

MapMarker.propTypes = {
  scale : PropTypes.number
}
export default MapMarker
