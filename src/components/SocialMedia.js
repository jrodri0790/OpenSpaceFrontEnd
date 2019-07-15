import React, { Component } from 'react'
import '../styles/social-media.css'

class SocialMedia extends Component {
  render () {
    return (
      <div className="social-media-section section-container">
        <div className="text-center content-container">
          <div id="invite-friends"
            className="hidden-xs hidden-sm col-md-7 col-lg-7 default-section align-middle no-padding">
            Encuéntranos en las redes sociales
          </div>
          <div className="icons-section col-xs-12 col-sm-12 col-md-5 col-lg-5 align-middle no-padding">
            <a id="facebook-icon" href="https://www.facebook.com/ThoughtWorksECCL/" target="_blank">
              <i className="fab fa-facebook-square social-media-logo"/>
            </a>
            <a id="twitter-icon" href="https://twitter.com/ThoughtWorksANS" target="_blank">
              <i className="fab fa-twitter social-media-logo"/>
            </a>
            <a id="instagram-icon" href="http://instagram.com/thoughtworksandes" target="_blank">
              <i className="fab fa-instagram social-media-logo"/>
            </a>
            <a id="youtube-icon" href="https://www.youtube.com/channel/UCd3w-41HNRvSj0TvKZu-jeA" target="_blank">
              <i className="fab fa-youtube social-media-logo"/>
            </a>
            <a id="linkedin-icon" href="https://www.linkedin.com/company/thoughtworks/" target="_blank">
              <i className="fab fa-linkedin social-media-logo"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMedia
