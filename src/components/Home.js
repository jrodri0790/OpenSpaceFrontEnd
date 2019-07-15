import React, { Component } from 'react'
import CountDown from './Countdown'
import logoWhite from '../assets/logo-white.png'
import videoBackground from '../assets/hero.jpg'
import '../styles/home.css'

class Hero extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showBuyNow: false
    };
    this.showBuyNow = this.showBuyNow.bind(this)
  }

  showBuyNow (e) {
    e.preventDefault();
    this.setState({ showBuyNow: true })
  }

  render () {
    return (
      <div id="inicio" className="text-center home section-container white">
        <div className="full-screen-bg">
          <video className="hidden-xs" loop muted autoPlay poster={videoBackground}>
            <source src="https://s3-us-west-2.amazonaws.com/xconf/videos/videoplayback.mp4"
                    type="video/mp4" />
          </video>
        </div>
        <div className="hidden-xs full-screen-bg-overlay hero-glyphs" />
        <div className="col-xs-12 no-padding">
          <div className="home-logo-box">
            <img src={logoWhite} alt="XConf Latinoaméricana" />
          </div>
          <div className="col-xs-12 advertising-container no-padding">
            <span className="home-box-advertising">Un día. Un track. Tecnología de verdad</span>
          </div>
        </div>
        <div className="col-xs-12 countdown-container no-padding">
          <div className="col-xs-8 col-xs-push-2 col-sm-6 col-sm-push-3 col-lg-4 col-lg-push-4">
            <CountDown />
          </div>
          <div className="col-xs-12 date-container no-padding">
            <span className="home-date-box">Quito, 10 Noviembre 2018</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
