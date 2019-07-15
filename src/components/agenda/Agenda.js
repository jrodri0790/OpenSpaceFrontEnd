import React, { Component } from 'react'
import talks from '../../data/talks'
import '../../styles/agenda.css'
import MiscellaneousAgendaSection from './MiscellaneousAgendaSection'
import TalkAgendaSection from './TalkAgendaSection'
import TitleSection from './TitleSection'
import Timetable from './Timetable'

class Agenda extends Component {

  constructor (props) {
    super(props)
    this.state = {
      talkPosition: 0,
      isAbstractBeingShown: false
    }
    this.handleReadMoreClicked = this.handleReadMoreClicked.bind(this)
    this.handleCloseAbstractModalButton = this.handleCloseAbstractModalButton.bind(this)
  }

  handleReadMoreClicked(speakerPosition) {
    this.setState({isAbstractBeingShown: true})
    if (this.state.talkPosition !== speakerPosition) {
      this.setState({talkPosition: speakerPosition, isAbstractBeingShown: true})
    }
  }

  handleCloseAbstractModalButton(flag) {
    this.setState({isAbstractBeingShown: flag})
  }

  setUpAgenda() {
    let agenda = new Map()
    talks.forEach(talk => {
      if (talk.isTalk) {
        agenda.set(`${talk.startDate}-${talk.endDate}`,
          <TalkAgendaSection key={`${talk.startDate}-${talk.endDate}`} onReadMoreClicked={this.handleReadMoreClicked}
                             talk={talk} />)
      } else {
        agenda.set(`${talk.startDate}-${talk.endDate}`,
          MiscellaneousAgendaSection(talk)
        )
      }
    })
    return agenda
  }

  render() {
    const agenda = this.setUpAgenda()
    return (
      <div id="agenda" className="agenda section-container">
        <div className="content-container">
          <div className="agenda-title-section">
            <TitleSection
              onCloseAbstractModalButton={this.handleCloseAbstractModalButton}
              isTalkAbstractModal={this.state.isAbstractBeingShown}
              talk={talks[this.state.talkPosition]} />
          </div>
          <Timetable
            isTalkAbstractModal={this.state.isAbstractBeingShown}
            talk={talks[this.state.talkPosition]}
            talkPosition={this.state.talkPosition}
            agenda={agenda} />
        </div>
      </div>
    )
  }
}

export default Agenda
