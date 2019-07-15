import React, { Component } from 'react'
import AgendaBackArrow from './AgendaBackArrow'
import AgendaNextArrow from './AgendaNextArrow'
import '../../styles/agenda/title-section.css'
import ScreenSizeUtils from '../utils/ScreenSizeUtils'

class TitleSection extends Component {
  constructor (props) {
    super(props);
    this._handleCloseModalButton = this._handleCloseModalButton.bind(this)
  }

  _handleCloseModalButton() {
    this.props.onCloseAbstractModalButton(false)
  }

  _renderSubtitle(isTalkAbstractModal, talk) {
    if (isTalkAbstractModal) {
      return <div className="agenda-date font-size-large purple">{`${talk.startDate} - ${talk.endDate}`}</div>
    }
    return <div className="agenda-date font-size-large purple">S&aacute;bado, 10 de noviembre</div>
  }

  _renderCloseAbstractModalButton(isTalkAbstractModal) {
    if (isTalkAbstractModal) {
      return <a onClick={this._handleCloseModalButton}><i className="fas fa-times close-button pink" /></a>
    }
    return null
  }

  _renderCarouselArrowsButtons(isTalkAbstractModal) {
    if (!isTalkAbstractModal) {
      return <div className="arrow-container">
        <AgendaBackArrow isMobile={ScreenSizeUtils.isMobile()} />
        <AgendaNextArrow isMobile={ScreenSizeUtils.isMobile()} />
      </div>
    }
    return null
  }

  render() {
    const isTalkAbstractModal = this.props.isTalkAbstractModal
    const talk = this.props.talk
    return (
      <div className="agenda-title-section">
        <div>
          <div className="large-title pink">Agenda</div>
          {this._renderSubtitle(isTalkAbstractModal, talk)}
        </div>
        <div>
          {this._renderCarouselArrowsButtons(isTalkAbstractModal)}
          {this._renderCloseAbstractModalButton(isTalkAbstractModal)}
        </div>
      </div>
    )
  }
}

export default TitleSection
