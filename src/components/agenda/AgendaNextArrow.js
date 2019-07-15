import React, { Component } from 'react'
import Scroll from '../utils/SideScroll'

const handleSideScroll = () => {
  Scroll('right')
}

const handleMobileSideScroll = () => {
  document.getElementById("slick-next").click()
}

class AgendaNextArrow extends Component {
  render() {
    const isMobile = this.props.isMobile
    return(<a id="slide" className="arrow" title="next-arrow"
              onClick={isMobile ? handleMobileSideScroll : handleSideScroll}>
      <i className="fas fa-angle-right"/>
    </a>)
  }
}

export default AgendaNextArrow
