import React, { Component } from 'react'
import Scroll from '../utils/SideScroll'

const handleBackSideScroll = () => {
  Scroll('left')
}

const handleMobileBackSideScroll = () => {
  document.getElementById("slick-prev").click()
}

class AgendaBackArrow extends Component {
  render() {
    const isMobile = this.props.isMobile
    return (
      <a id="slideBack" className="arrow" title="back-arrow"
         onClick={isMobile ? handleMobileBackSideScroll : handleBackSideScroll}>
        <i className="fas fa-angle-left"/>
      </a>
    )
  }
}

export default AgendaBackArrow
