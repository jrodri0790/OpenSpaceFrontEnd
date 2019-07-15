import React, { Component } from 'react'
import Slider from 'react-slick/lib'
import ScreenSizeUtils from '../utils/ScreenSizeUtils'
import '../../styles/agenda/slider-agenda.css'

class SliderAgenda extends Component {
  render() {
    const isMobile = this.props.isMobile
    const agenda = this.props.agenda
    const talkPosition = this.props.talkPosition ? this.props.talkPosition : 0
    let sliderAgenda = this.setUpAgenda(agenda)
    if (isMobile) {
      sliderAgenda = this.setUpAgendaForMobile(agenda, talkPosition)
    }
    return(sliderAgenda)
  }

  setUpAgenda(agenda) {
    return <div id="agenda-container" className={ScreenSizeUtils.isMobile()
      ? "hidden"
      : "horizontal-container"}>
      <div id="scroll-horizontal" className="scroll-horizontal">
        <div className="agenda-content">
          {Array.from(agenda.values())}
        </div>
      </div>
    </div>
  }

  setUpAgendaForMobile(agenda, talkPosition) {
    const settings = {
      arrows: true,
      nextArrow: <button id="slick-next" type="button" className="slick-next" />,
      prevArrow: <button id="slick-prev" type="button" className="slick-prev" />,
      infinite: true,
      initialSlide: talkPosition,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return <div className={ScreenSizeUtils.isMobile() ? "agenda-carousel" : "hidden"}>
      <Slider {...settings}>
        {Array.from(agenda.values())}
      </Slider>
    </div>
  }
}

export default SliderAgenda
